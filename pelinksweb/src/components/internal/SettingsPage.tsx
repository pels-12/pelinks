import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

export default function SettingsPage() {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('general');

  if (!isAdmin) {
    return (
      <div className="text-center text-[#BFC7CE] py-12">
        <p className="text-lg">⛔ This page is only accessible to administrators.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-[#F5F5F5]">Settings</h1>
        <p className="text-[#BFC7CE] mt-2">Administrator settings and configuration</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-[#007EA7] border-opacity-20">
        {['general', 'company', 'staff', 'templates'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 border-b-2 transition capitalize ${
              activeTab === tab
                ? 'border-[#007EA7] text-[#F5F5F5]'
                : 'border-transparent text-[#BFC7CE] hover:text-[#F5F5F5]'
            }`}
          >
            {tab === 'general'
              ? '⚙️ General'
              : tab === 'company'
              ? '🏢 Company'
              : tab === 'staff'
              ? '👥 Staff'
              : '📄 Templates'}
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">System Settings</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                    Default Payment Terms
                  </label>
                  <input
                    type="text"
                    defaultValue="70% upfront, 30% on completion"
                    className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <div>
                  <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                    VAT Rate (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="7.5"
                    step="0.01"
                    className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <div>
                  <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                    Default Quote Validity (Days)
                  </label>
                  <input
                    type="number"
                    defaultValue="14"
                    className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <button className="w-full bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-2 rounded transition">
                  💾 Save Settings
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Company Settings */}
      {activeTab === 'company' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">Company Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    defaultValue="PELINKS SYNERGY LTD."
                    className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="hello@pelinks.com.ng"
                      className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+234 814 361 7840"
                      className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    defaultValue="Nigeria"
                    className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <button className="w-full bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-2 rounded transition">
                  💾 Save Company Info
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Staff Management */}
      {activeTab === 'staff' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#F5F5F5]">Manage Staff</h2>
              <button className="bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-2 px-4 rounded transition">
                ➕ Add Staff
              </button>
            </div>

            <div className="bg-[#002D4A] rounded p-4">
              <p className="text-[#BFC7CE] text-sm">
                No staff members to display. Use the "Add Staff" button to create new staff accounts.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Templates */}
      {activeTab === 'templates' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="bg-[#003459] border border-[#007EA7] border-opacity-20 rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">Email Templates</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                    Quote Email Template
                  </label>
                  <textarea
                    rows={6}
                    defaultValue={`Dear [CLIENT_NAME],

Thank you for your interest in our services. Please find the quotation attached.

Quote Number: [QUOTE_NUMBER]
Total Amount: [TOTAL_AMOUNT]
Valid Until: [VALID_DATE]

For any questions, feel free to contact us.

Best regards,
PELINKS SYNERGY LTD.`}
                    className="w-full px-4 py-2 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] focus:outline-none focus:border-[#007EA7]"
                  />
                </div>

                <button className="w-full bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold py-2 rounded transition">
                  💾 Save Templates
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
