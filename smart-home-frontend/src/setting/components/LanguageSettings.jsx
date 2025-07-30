import React, { useState } from 'react';

export default function LanguageSettings() {
  const [language, setLanguage] = useState('vi');

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gray-700">Ngôn ngữ giao diện</span>
        </div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white border border-gray-300 text-gray-700 text-sm rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  );
}
