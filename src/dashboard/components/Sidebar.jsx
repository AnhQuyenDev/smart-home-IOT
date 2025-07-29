import React from 'react';
import {
  Home,
  BarChart3,
  MessageSquare,
  Smartphone,
  Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ activeItem, setActiveItem }) {
  const navigate = useNavigate();
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'message', icon: MessageSquare, label: 'Message' },
    { id: 'devices', icon: Smartphone, label: 'Devices' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-20 lg:w-64 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-700 min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-4 lg:p-6 text-center">
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-md">
          <Home className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
        </div>
        <div className="hidden lg:block">
          <h1 className="text-white font-bold text-lg tracking-widest">SMART HOME</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-2 lg:px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);
                navigate(`/${item.id}`);
              }}
              className={`w-full flex items-center p-3 lg:p-4 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-white/20 text-white shadow-lg backdrop-blur-md'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
              <span className="hidden lg:block ml-3 font-medium tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
