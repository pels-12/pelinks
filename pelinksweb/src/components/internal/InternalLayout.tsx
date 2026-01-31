import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiLogOut, FiHome, FiFileText, FiUsers, FiDollarSign } from 'react-icons/fi';

export default function InternalLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/internal/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const menuItems = [
    { label: 'Dashboard', icon: '📊', path: '/internal/dashboard', role: ['admin', 'staff'] },
    { label: 'Clients', icon: '👥', path: '/internal/clients', role: ['admin', 'staff'] },
    { label: 'Quotations', icon: '📄', path: '/internal/quotes', role: ['admin', 'staff'] },
    { label: 'Invoices', icon: '💰', path: '/internal/invoices', role: ['admin', 'staff'] },
    { label: 'Settings', icon: '⚙️', path: '/internal/settings', role: ['admin'] },
  ];

  const filteredMenu = menuItems.filter((item) => item.role.includes(user?.role as string));

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-[#001829]">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-[#003459] border-r border-[#007EA7] border-opacity-20 flex flex-col transition-all duration-300`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-[#007EA7] border-opacity-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#F5F5F5] font-bold"
          >
            {sidebarOpen ? (
              <div>
                <p className="text-2xl">PELINKS</p>
                <p className="text-xs text-[#007EA7]">Internal</p>
              </div>
            ) : (
              <p className="text-center text-2xl">P</p>
            )}
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {filteredMenu.map((item) => (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              whileHover={{ x: 5 }}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded transition ${
                isActive(item.path)
                  ? 'bg-[#007EA7] text-[#001829]'
                  : 'text-[#BFC7CE] hover:text-[#F5F5F5] hover:bg-[#007EA7] hover:bg-opacity-10'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </motion.button>
          ))}
        </nav>

        {/* User & Logout */}
        <div className="p-4 border-t border-[#007EA7] border-opacity-20 space-y-3">
          {sidebarOpen && (
            <div className="px-2 py-2 bg-[#002D4A] rounded">
              <p className="text-xs text-[#BFC7CE]">Logged in as</p>
              <p className="text-sm text-[#F5F5F5] font-semibold truncate">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="text-xs text-[#007EA7] capitalize">{user?.role}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-900 hover:bg-opacity-20 rounded transition"
          >
            <FiLogOut />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-[#002D4A] border-b border-[#007EA7] border-opacity-20 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-[#F5F5F5] hover:text-[#007EA7] transition"
          >
            {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <div className="text-[#F5F5F5]">
            <p className="text-sm text-[#BFC7CE]">Welcome back!</p>
            <p className="font-semibold">
              {user?.first_name} {user?.last_name}
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
