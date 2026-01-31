import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../contexts/AuthContext';
import { generateQuotationPDF } from '../../utils/pdfGenerator';

export default function QuotationPDFView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<any>(null);
  const [lineItems, setLineItems] = useState<any[]>([]);
  const [client, setClient] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const { data: quoteData, error: quoteError } = await supabase
          .from('quotes')
          .select('*, clients(*)')
          .eq('id', id)
          .single();

        if (quoteError) throw quoteError;

        setQuote(quoteData);
        setClient(quoteData.clients);

        const { data: itemsData } = await supabase
          .from('quote_line_items')
          .select('*')
          .eq('quote_id', id)
          .order('order_index');

        setLineItems(itemsData || []);
      } catch (error) {
        console.error('Error fetching quote:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [id]);

  const handleDownloadPDF = async () => {
    try {
      const element = document.getElementById('quotation-pdf');
      if (element) {
        await generateQuotationPDF(element, quote.quote_number);
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#001829]">
        <div className="text-[#BFC7CE]">Loading quotation...</div>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="min-h-screen bg-[#001829] text-[#F5F5F5] p-8">
        <p>Quotation not found</p>
      </div>
    );
  }

  const subtotal = lineItems.reduce((sum, item) => sum + item.quantity * item.unit_price, 0);
  const vat = subtotal * 0.075;
  const total = subtotal + vat;

  return (
    <div className="bg-[#001829] min-h-screen p-8">
      {/* Toolbar */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-2 px-6 rounded transition"
        >
          📥 Download PDF
        </button>
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          🖨️ Print
        </button>
        <button
          onClick={() => navigate('/internal/quotes')}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          ← Back
        </button>
      </div>

      {/* PDF Content */}
      <div id="quotation-pdf" className="bg-[#001829] text-[#F5F5F5] p-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-[#007EA7] border-opacity-30">
          <div>
            <h1 className="text-4xl font-bold">PELINKS</h1>
            <p className="text-[#007EA7] text-sm mt-1">Synergy Ltd.</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-[#007EA7]">QUOTATION</p>
            <p className="text-sm text-[#BFC7CE] mt-2">{quote.quote_number}</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-[#BFC7CE] text-xs uppercase mb-2">From:</p>
            <div className="text-sm">
              <p className="font-bold">PELINKS SYNERGY LTD.</p>
              <p className="text-[#BFC7CE]">Nigeria</p>
              <p className="text-[#BFC7CE]">hello@pelinks.com.ng</p>
              <p className="text-[#BFC7CE]">+234 814 361 7840</p>
            </div>
          </div>

          <div>
            <p className="text-[#BFC7CE] text-xs uppercase mb-2">Bill To:</p>
            <div className="text-sm">
              <p className="font-bold">{client?.name}</p>
              {client?.company && <p className="text-[#BFC7CE]">{client.company}</p>}
              {client?.address && <p className="text-[#BFC7CE]">{client.address}</p>}
              {client?.city && <p className="text-[#BFC7CE]">{client.city}</p>}
              {client?.email && <p className="text-[#BFC7CE]">{client.email}</p>}
              {client?.phone && <p className="text-[#BFC7CE]">{client.phone}</p>}
            </div>
          </div>
        </div>

        {/* Quote Details */}
        <div className="grid grid-cols-4 gap-6 mb-12 pb-12 border-b border-[#007EA7] border-opacity-30">
          <div>
            <p className="text-[#BFC7CE] text-xs uppercase mb-1">Quotation Date</p>
            <p className="font-semibold">{new Date(quote.date).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-[#BFC7CE] text-xs uppercase mb-1">Valid Until</p>
            <p className="font-semibold">
              {quote.valid_until
                ? new Date(quote.valid_until).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-[#BFC7CE] text-xs uppercase mb-1">Job Order Number</p>
            <p className="font-semibold">{quote.job_order_number || 'N/A'}</p>
          </div>
          <div>
            <p className="text-[#BFC7CE] text-xs uppercase mb-1">Currency</p>
            <p className="font-semibold">
              {quote.currency === 'NGN' ? '₦ NGN' : '$ USD'}
            </p>
          </div>
        </div>

        {/* Scope of Work (if applicable) */}
        {quote.scope_of_work && (
          <div className="mb-12 pb-8 border-b border-[#007EA7] border-opacity-30">
            <h3 className="text-lg font-bold text-[#007EA7] mb-3">Scope of Work</h3>
            <div className="text-sm text-[#BFC7CE] whitespace-pre-wrap leading-relaxed">
              {quote.scope_of_work}
            </div>
          </div>
        )}

        {/* Line Items Table */}
        <div className="mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#007EA7] border-opacity-30">
                <th className="text-left py-3 px-2 text-[#007EA7]">Description</th>
                <th className="text-right py-3 px-2 text-[#007EA7] w-24">Quantity</th>
                <th className="text-right py-3 px-2 text-[#007EA7] w-32">Unit Price</th>
                <th className="text-right py-3 px-2 text-[#007EA7] w-32">Total</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((item, index) => (
                <tr key={index} className="border-b border-[#007EA7] border-opacity-10">
                  <td className="py-3 px-2">{item.description}</td>
                  <td className="text-right py-3 px-2">{item.quantity}</td>
                  <td className="text-right py-3 px-2">
                    {quote.currency === 'NGN' ? '₦' : '$'}
                    {item.unit_price.toLocaleString()}
                  </td>
                  <td className="text-right py-3 px-2">
                    {quote.currency === 'NGN' ? '₦' : '$'}
                    {(item.quantity * item.unit_price).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-12 pb-12 border-b border-[#007EA7] border-opacity-30">
          <div className="w-80">
            <div className="flex justify-between py-2 border-b border-[#007EA7] border-opacity-20">
              <span className="text-[#BFC7CE]">Subtotal:</span>
              <span className="font-semibold">
                {quote.currency === 'NGN' ? '₦' : '$'}
                {subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#007EA7] border-opacity-20">
              <span className="text-[#BFC7CE]">VAT (7.5%):</span>
              <span className="font-semibold">
                {quote.currency === 'NGN' ? '₦' : '$'}
                {vat.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-lg font-bold">Grand Total:</span>
              <span className="text-2xl font-bold text-[#007EA7]">
                {quote.currency === 'NGN' ? '₦' : '$'}
                {total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Terms & Notes */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-[#007EA7] font-bold text-sm mb-2">PAYMENT TERMS</p>
            <p className="text-sm text-[#BFC7CE]">{quote.payment_terms}</p>
          </div>
          <div>
            <p className="text-[#007EA7] font-bold text-sm mb-2">NOTES</p>
            <p className="text-sm text-[#BFC7CE] whitespace-pre-wrap leading-relaxed">
              {quote.notes}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#007EA7] border-opacity-30 text-center text-xs text-[#BFC7CE]">
          <p>PELINKS SYNERGY LTD.</p>
          <p>hello@pelinks.com.ng | +234 814 361 7840 | www.pelinks.com.ng</p>
        </div>
      </div>
    </div>
  );
}
