import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../../contexts/AuthContext';

interface Quote {
  id: string;
  quote_number: string;
  client_id: string;
  date: string;
  total: number;
  currency: string;
  status: string;
  clients: { name: string };
}

export default function QuotationsPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      let query = supabase
        .from('quotes')
        .select('*, clients(name)')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setQuotes(data || []);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [filter]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this quotation?')) {
      try {
        await supabase.from('quotes').delete().eq('id', id);
        fetchQuotes();
      } catch (error) {
        console.error('Error deleting quote:', error);
      }
    }
  };

  const handleConvertToInvoice = async (id: string) => {
    navigate(`/internal/invoices/new?quoteId=${id}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-600 text-[#F5F5F5]';
      case 'sent':
        return 'bg-blue-600 text-[#F5F5F5]';
      case 'accepted':
        return 'bg-green-600 text-[#F5F5F5]';
      case 'invoiced':
        return 'bg-[#007EA7] text-[#001829]';
      default:
        return 'bg-gray-600 text-[#F5F5F5]';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-[#F5F5F5]">Quotations</h1>
          <p className="text-[#BFC7CE] mt-2">Manage all quotations</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/internal/quotes/new')}
          className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-3 px-6 rounded transition"
        >
          ➕ New Quote
        </motion.button>
      </motion.div>

      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto">
        {['all', 'draft', 'sent', 'accepted', 'invoiced'].map((status) => (
          <motion.button
            key={status}
            whileHover={{ scale: 1.05 }}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded transition capitalize ${
              filter === status
                ? 'bg-[#007EA7] text-[#001829] font-semibold'
                : 'bg-[#003459] text-[#BFC7CE] border border-[#007EA7] border-opacity-20'
            }`}
          >
            {status === 'all' ? 'All Quotes' : status}
          </motion.button>
        ))}
      </div>

      {/* Quotes List */}
      {loading ? (
        <div className="text-center text-[#BFC7CE]">Loading...</div>
      ) : quotes.length === 0 ? (
        <div className="text-center text-[#BFC7CE] py-12">
          <p className="text-lg">No quotations yet. Create one to get started.</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/internal/quotes/${quote.id}`)}
              className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6 hover:border-opacity-40 transition cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-bold text-[#F5F5F5]">
                      {quote.quote_number}
                    </h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded capitalize ${getStatusColor(quote.status)}`}>
                      {quote.status}
                    </span>
                  </div>
                  <p className="text-[#BFC7CE]">{quote.clients?.name || 'Unknown Client'}</p>
                  <p className="text-xs text-[#BFC7CE] mt-1">
                    Date: {new Date(quote.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-[#007EA7]">
                    {quote.currency === 'NGN' ? '₦' : '$'}
                    {quote.total?.toLocaleString() || '0'}
                  </p>
                  <div className="flex gap-2 mt-4 justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/internal/quotes/${quote.id}`);
                      }}
                      className="text-[#007EA7] hover:text-[#0096D6] transition text-sm"
                    >
                      ✏️ Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/internal/quotes/${quote.id}/pdf`);
                      }}
                      className="text-green-400 hover:text-green-300 transition text-sm"
                    >
                      📄 PDF
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleConvertToInvoice(quote.id);
                      }}
                      className="text-blue-400 hover:text-blue-300 transition text-sm"
                    >
                      💰 Invoice
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(quote.id);
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
