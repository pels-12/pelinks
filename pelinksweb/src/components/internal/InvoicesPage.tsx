import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../../contexts/AuthContext';

interface Invoice {
  id: string;
  invoice_number: string;
  client_id: string;
  date: string;
  total: number;
  paid_amount: number;
  balance: number;
  currency: string;
  status: string;
  clients: { name: string };
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      let query = supabase
        .from('invoices')
        .select('*, clients(name)')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setInvoices(data || []);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchInvoices();
  }, [filter]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      try {
        await supabase.from('invoices').delete().eq('id', id);
        fetchInvoices();
      } catch (error) {
        console.error('Error deleting invoice:', error);
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-600 text-[#F5F5F5]';
      case 'partially_paid':
        return 'bg-blue-600 text-[#F5F5F5]';
      case 'paid':
        return 'bg-green-600 text-[#F5F5F5]';
      default:
        return 'bg-gray-600 text-[#F5F5F5]';
    }
  };

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.total, 0);
  const totalPaid = invoices.reduce((sum, inv) => sum + inv.paid_amount, 0);
  const totalBalance = invoices.reduce((sum, inv) => sum + inv.balance, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-[#F5F5F5]">Invoices</h1>
          <p className="text-[#BFC7CE] mt-2">Manage all invoices and payments</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/internal/invoices/new')}
          className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-3 px-6 rounded transition"
        >
          ➕ New Invoice
        </motion.button>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-4"
        >
          <p className="text-[#BFC7CE] text-sm">Total Amount</p>
          <p className="text-2xl font-bold text-[#F5F5F5] mt-2">
            ₦{totalAmount.toLocaleString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-4"
        >
          <p className="text-[#BFC7CE] text-sm">Amount Paid</p>
          <p className="text-2xl font-bold text-green-400 mt-2">
            ₦{totalPaid.toLocaleString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-4"
        >
          <p className="text-[#BFC7CE] text-sm">Outstanding Balance</p>
          <p className="text-2xl font-bold text-orange-400 mt-2">
            ₦{totalBalance.toLocaleString()}
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto">
        {['all', 'pending', 'partially_paid', 'paid'].map((status) => (
          <motion.button
            key={status}
            whileHover={{ scale: 1.05 }}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded transition capitalize whitespace-nowrap ${
              filter === status
                ? 'bg-[#007EA7] text-[#001829] font-semibold'
                : 'bg-[#003459] text-[#BFC7CE] border border-[#007EA7] border-opacity-20'
            }`}
          >
            {status === 'all'
              ? 'All Invoices'
              : status === 'partially_paid'
              ? 'Partially Paid'
              : status}
          </motion.button>
        ))}
      </div>

      {/* Invoices List */}
      {loading ? (
        <div className="text-center text-[#BFC7CE]">Loading...</div>
      ) : invoices.length === 0 ? (
        <div className="text-center text-[#BFC7CE] py-12">
          <p className="text-lg">No invoices yet. Create one to get started.</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {invoices.map((invoice, index) => (
            <motion.div
              key={invoice.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/internal/invoices/${invoice.id}`)}
              className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6 hover:border-opacity-40 transition cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-bold text-[#F5F5F5]">
                      {invoice.invoice_number}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded capitalize ${getStatusColor(
                        invoice.status
                      )}`}
                    >
                      {invoice.status === 'partially_paid'
                        ? 'Partially Paid'
                        : invoice.status}
                    </span>
                  </div>
                  <p className="text-[#BFC7CE]">{invoice.clients?.name || 'Unknown Client'}</p>
                  <p className="text-xs text-[#BFC7CE] mt-1">
                    Date: {new Date(invoice.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <div className="mb-3">
                    <p className="text-[#BFC7CE] text-xs">Total Amount</p>
                    <p className="text-2xl font-bold text-[#007EA7]">
                      ₦{invoice.total?.toLocaleString() || '0'}
                    </p>
                  </div>

                  <div className="mb-3">
                    <p className="text-[#BFC7CE] text-xs">Balance</p>
                    <p
                      className={`text-lg font-bold ${
                        invoice.balance === 0 ? 'text-green-400' : 'text-orange-400'
                      }`}
                    >
                      ₦{invoice.balance?.toLocaleString() || '0'}
                    </p>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/internal/invoices/${invoice.id}`);
                      }}
                      className="text-[#007EA7] hover:text-[#0096D6] transition text-sm"
                    >
                      ✏️ Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/internal/invoices/${invoice.id}/pdf`);
                      }}
                      className="text-green-400 hover:text-green-300 transition text-sm"
                    >
                      📄 PDF
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(invoice.id);
                      }}
                      className="text-red-400 hover:text-red-300 transition text-sm"
                    >
                      🗑️
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
