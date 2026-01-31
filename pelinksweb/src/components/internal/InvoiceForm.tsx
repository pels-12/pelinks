import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase, useAuth } from '../../contexts/AuthContext';

interface LineItem {
  id?: string;
  description: string;
  quantity: number;
  unit_price: number;
}

interface InvoiceFormData {
  client_id: string;
  quote_id: string | null;
  date: string;
  due_date: string;
  line_items: LineItem[];
  payment_terms: string;
  notes: string;
  currency: string;
  status: string;
}

export default function InvoiceForm() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const quoteId = searchParams.get('quoteId');

  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');
  const [formData, setFormData] = useState<InvoiceFormData>({
    client_id: '',
    quote_id: quoteId || null,
    date: new Date().toISOString().split('T')[0],
    due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0],
    line_items: [{ description: '', quantity: 1, unit_price: 0 }],
    payment_terms: '70% upfront, 30% on completion',
    notes: 'Thank you for your business!',
    currency: 'NGN',
    status: 'pending',
  });

  // Initialize
  useEffect(() => {
    const init = async () => {
      try {
        // Fetch clients
        const { data: clientsData } = await supabase
          .from('clients')
          .select('*')
          .order('name');

        if (clientsData) setClients(clientsData);

        // If quote ID provided, load quote data
        if (quoteId) {
          const { data: quoteData } = await supabase
            .from('quotes')
            .select('*, quote_line_items(*)')
            .eq('id', quoteId)
            .single();

          if (quoteData) {
            setFormData((prev) => ({
              ...prev,
              client_id: quoteData.client_id,
              quote_id: quoteData.id,
              line_items: quoteData.quote_line_items || prev.line_items,
              currency: quoteData.currency,
              payment_terms: quoteData.payment_terms,
            }));
          }
        }

        // Generate invoice number
        if (!id) {
          const year = new Date().getFullYear();
          const { data: counter } = await supabase
            .from('document_counters')
            .select('invoice_counter')
            .eq('year', year)
            .single();

          const nextCounter = (counter?.invoice_counter || 0) + 1;
          setInvoiceNumber(
            `PSL/INV/${year}/${String(nextCounter).padStart(3, '0')}`
          );
        }
      } catch (error) {
        console.error('Error initializing form:', error);
      }
    };

    init();
  }, [id, quoteId]);

  const handleLineItemChange = (index: number, field: string, value: any) => {
    const newItems = [...formData.line_items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData({ ...formData, line_items: newItems });
  };

  const addLineItem = () => {
    setFormData({
      ...formData,
      line_items: [
        ...formData.line_items,
        { description: '', quantity: 1, unit_price: 0 },
      ],
    });
  };

  const removeLineItem = (index: number) => {
    const newItems = formData.line_items.filter((_, i) => i !== index);
    setFormData({ ...formData, line_items: newItems });
  };

  const calculateSubtotal = () => {
    return formData.line_items.reduce(
      (sum, item) => sum + item.quantity * item.unit_price,
      0
    );
  };

  const calculateVAT = () => {
    return calculateSubtotal() * 0.075; // 7.5% VAT
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateVAT();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const subtotal = calculateSubtotal();
      const vat = calculateVAT();
      const total = calculateTotal();

      const invoiceData = {
        invoice_number: invoiceNumber,
        client_id: formData.client_id,
        quote_id: formData.quote_id,
        date: formData.date,
        due_date: formData.due_date,
        subtotal,
        vat_amount: vat,
        total,
        paid_amount: 0,
        balance: total,
        currency: formData.currency,
        status: formData.status,
        payment_terms: formData.payment_terms,
        notes: formData.notes,
        created_by: user?.id,
      };

      // Save invoice
      const { data: invoice, error: invoiceError } = await supabase
        .from('invoices')
        .insert([invoiceData])
        .select()
        .single();

      if (invoiceError) throw invoiceError;

      // Save line items
      const lineItemsData = formData.line_items.map((item, index) => ({
        invoice_id: invoice.id,
        description: item.description,
        quantity: item.quantity,
        unit_price: item.unit_price,
        order_index: index,
      }));

      const { error: itemsError } = await supabase
        .from('invoice_line_items')
        .insert(lineItemsData);

      if (itemsError) throw itemsError;

      // Update counter
      const year = new Date().getFullYear();
      await supabase
        .from('document_counters')
        .upsert(
          {
            year,
            invoice_counter: parseInt(invoiceNumber.split('/')[3]),
          },
          { onConflict: 'year' }
        );

      // If converting from quote, update quote status
      if (formData.quote_id) {
        await supabase
          .from('quotes')
          .update({ status: 'invoiced' })
          .eq('id', formData.quote_id);
      }

      navigate(`/internal/invoices/${invoice.id}`);
    } catch (error) {
      console.error('Error saving invoice:', error);
      alert('Failed to save invoice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-[#F5F5F5]">Create Invoice</h1>
        <p className="text-[#BFC7CE] mt-2">Invoice Number: {invoiceNumber}</p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Client & Basic Info */}
        <div className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">
            Client & Invoice Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                Select Client *
              </label>
              <select
                value={formData.client_id}
                onChange={(e) =>
                  setFormData({ ...formData, client_id: e.target.value })
                }
                required
                className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
              >
                <option value="">-- Select a client --</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name} ({client.company})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                Invoice Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
              />
            </div>

            <div>
              <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                Due Date *
              </label>
              <input
                type="date"
                value={formData.due_date}
                onChange={(e) =>
                  setFormData({ ...formData, due_date: e.target.value })
                }
                required
                className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
              />
            </div>

            <div>
              <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                Currency
              </label>
              <select
                value={formData.currency}
                onChange={(e) =>
                  setFormData({ ...formData, currency: e.target.value })
                }
                className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
              >
                <option value="NGN">₦ NGN</option>
                <option value="USD">$ USD</option>
              </select>
            </div>

            <div>
              <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                Payment Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
              >
                <option value="pending">Pending</option>
                <option value="partially_paid">Partially Paid</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#F5F5F5]">Line Items</h2>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              onClick={addLineItem}
              className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-2 px-4 rounded transition"
            >
              ➕ Add Item
            </motion.button>
          </div>

          <div className="space-y-4">
            {formData.line_items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3 items-end bg-[#002D4A] p-4 rounded"
              >
                <div className="flex-1">
                  <label className="block text-[#BFC7CE] text-xs mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      handleLineItemChange(index, 'description', e.target.value)
                    }
                    required
                    placeholder="Item description"
                    className="w-full px-3 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] text-sm focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <div className="w-24">
                  <label className="block text-[#BFC7CE] text-xs mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.quantity}
                    onChange={(e) =>
                      handleLineItemChange(
                        index,
                        'quantity',
                        parseFloat(e.target.value)
                      )
                    }
                    required
                    className="w-full px-3 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] text-sm focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <div className="w-32">
                  <label className="block text-[#BFC7CE] text-xs mb-1">
                    Unit Price
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.unit_price}
                    onChange={(e) =>
                      handleLineItemChange(
                        index,
                        'unit_price',
                        parseFloat(e.target.value)
                      )
                    }
                    required
                    className="w-full px-3 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] text-sm focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <div className="w-32">
                  <label className="block text-[#BFC7CE] text-xs mb-1">
                    Total
                  </label>
                  <div className="px-3 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#007EA7] font-semibold text-sm">
                    {(item.quantity * item.unit_price).toLocaleString()}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeLineItem(index)}
                  className="text-red-400 hover:text-red-300 transition py-2"
                >
                  🗑️
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6">
          <div className="space-y-3 text-right">
            <div className="flex justify-between text-[#BFC7CE]">
              <span>Subtotal:</span>
              <span className="font-semibold">
                {formData.currency === 'NGN' ? '₦' : '$'}
                {calculateSubtotal().toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-[#BFC7CE]">
              <span>VAT (7.5%):</span>
              <span className="font-semibold">
                {formData.currency === 'NGN' ? '₦' : '$'}
                {calculateVAT().toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-[#F5F5F5] text-xl font-bold border-t border-[#007EA7] border-opacity-20 pt-3">
              <span>Grand Total:</span>
              <span className="text-[#007EA7]">
                {formData.currency === 'NGN' ? '₦' : '$'}
                {calculateTotal().toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Terms & Notes */}
        <div className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
              Payment Terms
            </label>
            <input
              type="text"
              value={formData.payment_terms}
              onChange={(e) =>
                setFormData({ ...formData, payment_terms: e.target.value })
              }
              className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
            />
          </div>

          <div>
            <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
            />
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            disabled={loading}
            className="flex-1 bg-[#007EA7] hover:bg-[#0096D6] disabled:opacity-50 text-[#001829] font-semibold py-3 rounded transition"
          >
            {loading ? 'Saving...' : 'Create Invoice'}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/internal/invoices')}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-[#F5F5F5] font-semibold py-3 rounded transition"
          >
            Cancel
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
