import React, { useState } from 'react';
import { Wifi, Tv, Thermometer, Flashlight } from 'lucide-react';

export default function DeviceControlsCard() {
  const [devices, setDevices] = useState({
    wifi: true,
    tv: false,
    temp: true,
  });

  const toggleDevice = (key) => {
    setDevices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const deviceList = [
    {
      id: 'wifi',
      name: 'Wi-Fi',
      icon: <Wifi className="w-5 h-5 text-white" />,
      bg: 'bg-orange-500',
      bgContainer: 'bg-orange-50',
    },
    {
      id: 'tv',
      name: 'Smart TV',
      icon: <Tv className="w-5 h-5 text-white" />,
      bg: 'bg-purple-500',
      bgContainer: 'bg-purple-50',
    },
    {
      id: 'temp',
      name: 'Temperature',
      icon: <Thermometer className="w-5 h-5 text-white" />,
      bg: 'bg-gray-500',
      bgContainer: 'bg-gray-100',
    },
  ];

  return (
    <div className="bg-white border-gray-100 shadow-xl rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Flashlight className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="text-gray-900 font-semibold text-lg">Device Controls</h3>
        </div>
      </div>

      <div className="space-y-4">
        {deviceList.map((device) => (
          <div
            key={device.id}
            className={`flex items-center justify-between p-4 rounded-2xl ${device.bgContainer}`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${device.bg} rounded-xl flex items-center justify-center`}>
                {device.icon}
              </div>
              <span className="font-medium text-gray-900">{device.name}</span>
            </div>
            <button
              onClick={() => toggleDevice(device.id)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                devices[device.id] ? 'bg-emerald-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  devices[device.id] ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
