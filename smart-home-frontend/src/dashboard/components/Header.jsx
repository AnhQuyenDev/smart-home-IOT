import React from 'react';
import { Search, MoreVertical } from 'lucide-react';
import { getCurrentUser } from '../../utils/auth';
export default function Header({ title }) {
  const user = getCurrentUser();

  return (
    <header className="flex items-center justify-between p-6 bg-white border-b border-gray-300">
      {/* Left: Page Title */}
      <div className="text-sm uppercase text-gray-500 font-medium">
        {title}
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search using keywords or name ..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right: User Info */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm font-medium text-gray-900">
            {user?.full_name}
          </div>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
      </div>
    </header>
  );
}
