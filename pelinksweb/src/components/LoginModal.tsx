import React from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Login</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <button className="w-full flex flex-col items-center gap-3 p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 group">
            <span className="text-3xl group-hover:scale-110 transition-transform">👤</span>
            <span className="font-semibold text-gray-900">Client Login</span>
          </button>

          <button className="w-full flex flex-col items-center gap-3 p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 group">
            <span className="text-3xl group-hover:scale-110 transition-transform">👨‍💼</span>
            <span className="font-semibold text-gray-900">Staff Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
