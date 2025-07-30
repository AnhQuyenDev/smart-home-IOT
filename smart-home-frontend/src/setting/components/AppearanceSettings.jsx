import React, { useState } from 'react';
import { Moon, Sun, Palette, Check } from 'lucide-react';

export default function AppearanceSettings() {
  const [theme, setTheme] = useState('light');
  const [accent, setAccent] = useState('emerald');

  const accentOptions = [
    { name: 'Emerald', color: 'emerald' },
    { name: 'Indigo', color: 'indigo' },
    { name: 'Rose', color: 'rose' },
  ];

  const colorMap = {
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-500',
    rose: 'bg-rose-500',
  };


  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 space-y-6">

      {/* Theme Toggle */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Chế độ giao diện</p>
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 ${
              theme === 'dark' ? 'bg-gray-800 justify-end' : 'bg-gray-300 justify-start'
            }`}
            onClick={toggleTheme}
          >
            <div className="bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-transform duration-300">
              {theme === 'dark' ? (
                <Moon className="w-4 h-4 text-gray-700" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-500" />
              )}
            </div>
          </div>
          <span className="text-sm text-gray-700">{theme === 'dark' ? 'Tối' : 'Sáng'}</span>
        </div>
      </div>

      {/* Accent Color Picker */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Màu chủ đạo</p>
        <div className="flex gap-4">
          {accentOptions.map((opt) => (
            <button
              key={opt.color}
              onClick={() => setAccent(opt.color)}
              className={`w-10 h-10 rounded-full relative transition-transform transform hover:scale-105 focus:outline-none
                ${colorMap[opt.color]}
                ${accent === opt.color ? 'ring-2 ring-emerald-500 scale-110' : ''}
              `}
            >
              {accent === opt.color && (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
