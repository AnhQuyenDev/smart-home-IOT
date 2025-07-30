import React, { useState } from 'react';
import { Lightbulb, Sun, Zap, ToggleRight, Gauge } from 'lucide-react';
import CeilingLightChart from './CeilingLightChart';

export default function CeilingLightDetail({ device }) {
  const generateInitialChartData = () => {
    const now = new Date();
    const baseTime = now.getTime() - 1000 * 60 * 5;
    return Array.from({ length: 20 }, (_, i) => {
      const time = new Date(baseTime + i * 15000);
      return {
        time: `${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`,
        brightness: 50 + Math.sin(i / 3) * 20,
      };
    });
  };

  const [powerOn, setPowerOn] = useState(true);
  const [brightness, setBrightness] = useState(60);
  const [voltage, setVoltage] = useState(220);
  const [power, setPower] = useState(12);
  const [chartData, setChartData] = useState(() => generateInitialChartData());

  const updateBrightness = (value) => {
    if (!powerOn) return;
    const newBrightness = parseInt(value);
    const newPower = +(5 + newBrightness / 10).toFixed(1);
    const newVoltage = +(220 + Math.random() * 1).toFixed(1);

    setBrightness(newBrightness);
    setPower(newPower);
    setVoltage(newVoltage);
    updateChartData(newBrightness);
  };

  const updateChartData = (brightness) => {
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    const newEntry = { time, brightness };
    setChartData((prev) => [...prev.slice(-19), newEntry]);
  };

  const rows = [
    [
      {
        label: 'Độ sáng',
        value: `${brightness}%`,
        icon: Sun,
        controls: (
          <input
            type="range"
            min={0}
            max={100}
            value={brightness}
            onChange={(e) => updateBrightness(e.target.value)}
            className="w-full mt-2 cursor-pointer accent-emerald-500"
          />
        ),
      },
      {
        label: 'Công suất',
        value: `${power} W`,
        icon: Zap,
      },
    ],
    [
      {
        label: 'Điện áp',
        value: `${voltage} V`,
        icon: Gauge,
      },
      {
        label: 'Trạng thái',
        value: powerOn ? 'Đang hoạt động' : 'Tắt',
        icon: ToggleRight,
      },
    ],
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-100 to-white p-6 rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-emerald-900">
          {device.icon ? (
            <device.icon className="w-6 h-6 text-emerald-900" />
          ) : (
            <Lightbulb className="w-6 h-6 text-emerald-900" />
          )}
          {device.name}
        </h2>
        <button
          onClick={() => setPowerOn((prev) => !prev)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold shadow transition-all duration-200 ${
            powerOn
              ? 'bg-red-100 text-red-800 hover:bg-red-200'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          {powerOn ? 'Tắt thiết bị' : 'Bật thiết bị'}
        </button>
      </div>

      {/* Bóng đèn sáng dần theo độ sáng */}
      <div className="flex justify-center mb-6">
        <div
            className={`w-28 h-28 rounded-full shadow-lg border border-yellow-300 transition-all duration-300`}
            style={{
            background: `radial-gradient(circle at center, rgba(253, 239, 178, ${0.4 + brightness / 150}), transparent 60%)`,
            boxShadow: `0 0 ${brightness / 2}px ${brightness / 4}px rgba(255, 223, 100, ${brightness / 100})`,
            }}
        />
        </div>



      {/* Thông số */}
      <div className="grid grid-cols-2 gap-4">
        {rows.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((item, j) => (
              <div
                key={j}
                className="bg-white p-4 rounded-lg shadow flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg text-emerald-500">
                    {item.icon && <item.icon className="w-5 h-5" />}
                  </span>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </div>
                <p className="text-xl font-semibold text-gray-800 text-left">
                  {item.value}
                </p>
                {item.controls && item.controls}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Biểu đồ */}
      <CeilingLightChart data={chartData} />
    </div>
  );
}
