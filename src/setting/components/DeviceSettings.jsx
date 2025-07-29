import React, { useState } from 'react';
import { ToggleRight, WifiOff, RefreshCcw } from 'lucide-react';

export default function DeviceSettings() {
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [remoteControl, setRemoteControl] = useState(true);
  const [syncEnabled, setSyncEnabled] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 space-y-6">
      {/* Toggle Items */}
      <div className="space-y-5">
        <DeviceToggle
          icon={<RefreshCcw className="w-5 h-5 text-emerald-500" />}
          label="Tự động cập nhật trạng thái"
          enabled={autoUpdate}
          onToggle={() => setAutoUpdate(!autoUpdate)}
        />
        <DeviceToggle
          icon={<WifiOff className="w-5 h-5 text-emerald-500" />}
          label="Cho phép điều khiển từ xa"
          enabled={remoteControl}
          onToggle={() => setRemoteControl(!remoteControl)}
        />
        <DeviceToggle
          icon={<ToggleRight className="w-5 h-5 text-emerald-500" />}
          label="Đồng bộ thiết bị mới"
          enabled={syncEnabled}
          onToggle={() => setSyncEnabled(!syncEnabled)}
        />
      </div>
    </div>
  );
}

// ✅ Toggle component chuẩn giao diện dashboard
function DeviceToggle({ icon, label, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-gray-700">
        {icon}
        <span>{label}</span>
      </div>

      <div
        onClick={onToggle}
        className={`w-12 h-6 rounded-full cursor-pointer flex items-center px-1 transition-all duration-300 ease-in-out ${
          enabled ? 'bg-emerald-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
            enabled ? 'translate-x-6' : ''
          }`}
        ></div>
      </div>
    </div>
  );
}
