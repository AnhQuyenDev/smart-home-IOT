import React, { useState } from 'react';
import { Bell, Mail, Smartphone } from 'lucide-react';

export default function NotificationSettings() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [inAppEnabled, setInAppEnabled] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 space-y-6">
      {/* Settings List */}
      <div className="space-y-5">
        <NotificationToggle
          icon={<Smartphone className="w-5 h-5 text-emerald-500" />}
          label="Thông báo trên điện thoại"
          enabled={pushEnabled}
          onToggle={() => setPushEnabled(!pushEnabled)}
        />
        <NotificationToggle
          icon={<Mail className="w-5 h-5 text-emerald-500" />}
          label="Gửi thông báo qua email"
          enabled={emailEnabled}
          onToggle={() => setEmailEnabled(!emailEnabled)}
        />
        <NotificationToggle
          icon={<Bell className="w-5 h-5 text-emerald-500" />}
          label="Thông báo trong ứng dụng"
          enabled={inAppEnabled}
          onToggle={() => setInAppEnabled(!inAppEnabled)}
        />
      </div>
    </div>
  );
}

// ✅ Component riêng cho từng toggle
function NotificationToggle({ icon, label, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-gray-700">
        {icon}
        <span>{label}</span>
      </div>

      <div
        onClick={onToggle}
        className={`w-12 h-6 rounded-full cursor-pointer flex items-center px-1 transition-colors duration-300 ${
          enabled ? 'bg-emerald-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? 'translate-x-6' : ''
          }`}
        ></div>
      </div>
    </div>
  );
}
