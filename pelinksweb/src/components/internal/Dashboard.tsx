import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../contexts/AuthContext';

interface DashboardStats {
  totalClients: number;
  totalQuotes: number;
  totalInvoices: number;
  pendingAmount: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalClients: 0,
    totalQuotes: 0,
    totalInvoices: 0,
    pendingAmount: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch clients count
        const { count: clientsCount } = await supabase
          .from('clients')
          .select('*', { count: 'exact', head: true });

        // Fetch quotes count
        const { count: quotesCount } = await supabase
          .from('quotes')
          .select('*', { count: 'exact', head: true });

        // Fetch invoices count
        const { count: invoicesCount } = await supabase
          .from('invoices')
          .select('*', { count: 'exact', head: true });

        // Fetch pending invoice amount
        const { data: pendingInvoices } = await supabase
          .from('invoices')
          .select('balance')
          .eq('status', 'pending')
          .or('status.eq.partially_paid');

        const pendingAmount = pendingInvoices?.reduce((sum, inv) => sum + (inv.balance || 0), 0) || 0;

        setStats({
          totalClients: clientsCount || 0,
          totalQuotes: quotesCount || 0,
          totalInvoices: invoicesCount || 0,
          pendingAmount,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ title, value, icon, onClick }: any) => (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6 cursor-pointer hover:border-opacity-40 transition"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#BFC7CE] text-sm mb-2">{title}</p>
          <p className="text-4xl font-bold text-[#F5F5F5]">{value}</p>
        </div>
        <div className="text-4xl opacity-20">{icon}</div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-[#F5F5F5]">Dashboard</h1>
        <p className="text-[#BFC7CE] mt-2">Overview of your quotations and invoices</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <StatCard
            title="Total Clients"
            value={loading ? '...' : stats.totalClients}
            icon="👥"
            onClick={() => navigate('/internal/clients')}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <StatCard
            title="Quotations"
            value={loading ? '...' : stats.totalQuotes}
            icon="📄"
            onClick={() => navigate('/internal/quotes')}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <StatCard
            title="Invoices"
            value={loading ? '...' : stats.totalInvoices}
            icon="💰"
            onClick={() => navigate('/internal/invoices')}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <StatCard
            title="Pending Amount"
            value={loading ? '...' : `₦${stats.pendingAmount.toLocaleString()}`}
            icon="⏳"
            onClick={() => navigate('/internal/invoices')}
          />
        </motion.div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/internal/quotes/new')}
            className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-3 px-6 rounded transition"
          >
            ➕ New Quote
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/internal/invoices/new')}
            className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-3 px-6 rounded transition"
          >
            ➕ New Invoice
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/internal/clients/new')}
            className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-3 px-6 rounded transition"
          >
            ➕ New Client
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/internal/quotes')}
            className="bg-gray-600 hover:bg-gray-700 text-[#F5F5F5] font-semibold py-3 px-6 rounded transition"
          >
            📋 View All
          </motion.button>
        </div>
      </motion.div>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-[#002D4A] border border-[#007EA7] border-opacity-30 rounded-lg p-6"
      >
        <p className="text-[#BFC7CE] text-sm">
          💡 Tip: Use the sidebar to navigate between different sections. Click any stat card to view detailed information.
        </p>
      </motion.div>
    </div>
  );
}
