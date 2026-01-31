import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/internal/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001829] to-[#003459] flex items-center justify-center p-4">
      {/* Logo and Header */}
      <div className="absolute top-8 left-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[#F5F5F5] text-2xl font-bold">PELINKS</h1>
          <p className="text-[#007EA7] text-sm">Internal Dashboard</p>
        </motion.div>
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#003459] rounded-lg shadow-2xl p-8 border border-[#007EA7] border-opacity-20">
          <h2 className="text-[#F5F5F5] text-3xl font-bold mb-2">Staff Portal</h2>
          <p className="text-[#BFC7CE] text-sm mb-8">Quotation & Invoice System</p>

          {error && (
            <div className="mb-6 p-4 bg-red-900 bg-opacity-20 border border-red-500 border-opacity-50 rounded text-red-300 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] placeholder-[#BFC7CE] placeholder-opacity-50 focus:outline-none focus:border-[#007EA7] focus:bg-[#001829] focus:bg-opacity-50 transition"
                placeholder="staff@pelinks.com.ng"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-[#F5F5F5] text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#001829] border border-[#007EA7] border-opacity-40 rounded text-[#F5F5F5] placeholder-[#BFC7CE] placeholder-opacity-50 focus:outline-none focus:border-[#007EA7] focus:bg-[#001829] focus:bg-opacity-50 transition"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#007EA7] hover:bg-[#0096D6] text-[#001829] font-semibold rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-[#007EA7] border-opacity-20">
            <p className="text-[#BFC7CE] text-xs text-center">
              For access credentials, contact your administrator
            </p>
            <p className="text-[#007EA7] text-xs text-center mt-2">
              hello@pelinks.com.ng
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
