import React, { useState, useEffect } from 'react';
import { Thermometer, Zap, Droplet, DoorOpen, AlertTriangle } from 'lucide-react';
import RefrigeratorTempChart from './RefrigeratorTempChart';

const temperatureData = [
  { time: '08:00', fridge: 4, freezer: -18 },
  { time: '09:00', fridge: 5, freezer: -17 },
  { time: '10:00', fridge: 4, freezer: -19 },
  { time: '11:00', fridge: 6, freezer: -16 },
  { time: '12:00', fridge: 4, freezer: -18 },
  { time: '13:00', fridge: 5, freezer: -17 },
];

export default function RefrigeratorDetail({ device }) {
  const [fridgeTemp, setFridgeTemp] = useState(4); // °C
  const [freezerTemp, setFreezerTemp] = useState(-18); // °C
  const [powerUsage, setPowerUsage] = useState(120); // W
  const [voltage, setVoltage] = useState(220); // V
  const [current, setCurrent] = useState(0.55); // A
  const [humidity, setHumidity] = useState(45); // %
  const [doorOpen, setDoorOpen] = useState(false);
  const [compressorActive, setCompressorActive] = useState(true);

  const tempWarning = fridgeTemp > 8 || freezerTemp > -10;

  useEffect(() => {
  const interval = setInterval(() => {
    setFridgeTemp(prev => parseFloat((prev + (Math.random() - 0.5)).toFixed(1)));
    setFreezerTemp(prev => parseFloat((prev + (Math.random() - 0.5)).toFixed(1)));
    setPowerUsage(prev => parseFloat((prev + (Math.random() * 5 - 2.5)).toFixed(1)));
    setVoltage(parseFloat((220 + (Math.random() * 2 - 1)).toFixed(1)));
    setCurrent(parseFloat((0.5 + (Math.random() * 0.1)).toFixed(2)));
    setHumidity(Math.max(30, Math.min(60, 45 + Math.floor(Math.random() * 5 - 2))));
    setDoorOpen(Math.random() > 0.95);
    setCompressorActive(Math.random() > 0.2);
  }, 5000);

  return () => clearInterval(interval);
}, []);



  return (
    <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-emerald-200 via-white to-emerald-100 text-gray-800">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-emerald-900">
        {device.icon && <device.icon className="w-6 h-6 text-emerald-900" />}
        {device.name}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Nhiệt độ */}
        <InfoCard
          icon={<Thermometer className="text-blue-500" />}
          label="Ngăn mát"
          value={`${fridgeTemp}°C`}
        />
        <InfoCard
          icon={<Thermometer className="text-cyan-600" />}
          label="Ngăn đá"
          value={`${freezerTemp}°C`}
        />

        {/* Điện năng */}
        <InfoCard
          icon={<Zap className="text-yellow-500" />}
          label="Công suất"
          value={`${powerUsage} W`}
        />
        <InfoCard
          icon={<Zap className="text-purple-500" />}
          label="Điện áp"
          value={`${voltage} V`}
        />
        <InfoCard
          icon={<Zap className="text-red-500" />}
          label="Dòng điện"
          value={`${current} A`}
        />

        {/* Độ ẩm và cửa */}
        <InfoCard
          icon={<Droplet className="text-blue-400" />}
          label="Độ ẩm"
          value={`${humidity}%`}
        />
        <InfoCard
          icon={<DoorOpen className="text-orange-500" />}
          label="Cửa tủ"
          value={doorOpen ? 'Mở' : 'Đóng'}
        />

        {/* Máy nén */}
        <InfoCard
          icon={<Zap className="text-green-500" />}
          label="Compressor"
          value={compressorActive ? 'Đang chạy' : 'Dừng'}
        />
      </div>

      {/* Cảnh báo nếu nhiệt độ bất thường */}
      {tempWarning && (
        <div className="mt-6 flex items-center gap-2 p-4 bg-red-100 text-red-800 rounded-xl border border-red-300">
          <AlertTriangle />
          <p>Nhiệt độ vượt ngưỡng! Kiểm tra thiết bị làm lạnh.</p>
        </div>
      )}

        <RefrigeratorTempChart data={temperatureData} />
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
      <div className="bg-emerald-100 p-2 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}
