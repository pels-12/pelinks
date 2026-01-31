import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../contexts/AuthContext';

interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  created_at: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  // Fetch clients
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        // Update
        const { error } = await supabase
          .from('clients')
          .update(formData)
          .eq('id', editingId);

        if (error) throw error;
      } else {
        // Create
        const { error } = await supabase.from('clients').insert([formData]);

        if (error) throw error;
      }

      setFormData({ name: '', company: '', email: '', phone: '', address: '', city: '' });
      setShowForm(false);
      setEditingId(null);
      fetchClients();
    } catch (error) {
      console.error('Error saving client:', error);
    }
  };

  const handleEdit = (client: Client) => {
    setFormData({
      name: client.name,
      company: client.company || '',
      email: client.email || '',
      phone: client.phone || '',
      address: client.address || '',
      city: client.city || '',
    });
    setEditingId(client.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        const { error } = await supabase.from('clients').delete().eq('id', id);

        if (error) throw error;
        fetchClients();
      } catch (error) {
        console.error('Error deleting client:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#F5F5F5]">Clients</h1>
            <p className="text-[#BFC7CE] mt-2">Manage your client database</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setShowForm(!showForm);
              setEditingId(null);
              setFormData({ name: '', company: '', email: '', phone: '', address: '', city: '' });
            }}
            className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-3 px-6 rounded transition"
          >
            {showForm ? '✕ Cancel' : '➕ New Client'}
          </motion.button>
        </div>
      </motion.div>

      {/* Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6"
        >
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">
            {editingId ? 'Edit Client' : 'New Client'}
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] placeholder-[#BFC7CE] placeholder-opacity-50 focus:outline-none focus:border-[#007EA7]"
            />

            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] placeholder-[#BFC7CE] placeholder-opacity-50 focus:outline-none focus:border-[#007EA7]"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] placeholder-[#BFC7CE] placeholder-opacity-50 focus:outline-none focus:border-[#007EA7]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] placeholder-[#BFC7CE] placeholder-opacity-50 focus:outline-none focus:border-[#007EA7]"
            />

            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] placeholder-[#BFC7CE] placeholder-opacity-50 focus:outline-none focus:border-[#007EA7]"
            />

            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] placeholder-[#BFC7CE] placeholder-opacity-50 focus:outline-none focus:border-[#007EA7]"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-2 rounded transition"
            >
              {editingId ? 'Update Client' : 'Create Client'}
            </button>
          </form>
        </motion.div>
      )}

      {/* Clients List */}
      {loading ? (
        <div className="text-center text-[#BFC7CE]">Loading...</div>
      ) : clients.length === 0 ? (
        <div className="text-center text-[#BFC7CE] py-12">
          <p className="text-lg">No clients yet. Create one to get started.</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#007EA7] border-opacity-20 bg-[#002D4A]">
                  <th className="px-6 py-4 text-left text-[#007EA7] font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-[#007EA7] font-semibold">Company</th>
                  <th className="px-6 py-4 text-left text-[#007EA7] font-semibold">Email</th>
                  <th className="px-6 py-4 text-left text-[#007EA7] font-semibold">Phone</th>
                  <th className="px-6 py-4 text-left text-[#007EA7] font-semibold">City</th>
                  <th className="px-6 py-4 text-center text-[#007EA7] font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <motion.tr
                    key={client.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-[#007EA7] border-opacity-10 hover:bg-[#002D4A] transition"
                  >
                    <td className="px-6 py-4 text-[#F5F5F5] font-medium">{client.name}</td>
                    <td className="px-6 py-4 text-[#BFC7CE]">{client.company || '-'}</td>
                    <td className="px-6 py-4 text-[#BFC7CE]">{client.email || '-'}</td>
                    <td className="px-6 py-4 text-[#BFC7CE]">{client.phone || '-'}</td>
                    <td className="px-6 py-4 text-[#BFC7CE]">{client.city || '-'}</td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(client)}
                        className="text-[#007EA7] hover:text-[#0096D6] transition"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(client.id)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        🗑️
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
}
