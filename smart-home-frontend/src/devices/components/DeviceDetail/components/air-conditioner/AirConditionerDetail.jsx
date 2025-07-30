import React, { useState, useEffect } from 'react';
import {
  Thermometer,
  Wind,
  Zap,
  Power,
  GaugeCircle,
  Plus,
  MinusIcon
} from 'lucide-react';
import AirConditionerPowerChart from './AirConditionerPowerChart';

export default function AirConditionerDetail({ device }) {
  const [temperature, setTemperature] = useState(24);
  const [fanSpeed, setFanSpeed] = useState('Medium');
  const [powerConsumption, setPowerConsumption] = useState(1.2);
  const [current, setCurrent] = useState(5.0);
  const [status, setStatus] = useState('on');

  const increaseTemp = () => setTemperature((t) => Math.min(t + 1, 30));
  const decreaseTemp = () => setTemperature((t) => Math.max(t - 16, 16));

  useEffect(() => {
    switch (fanSpeed) {
      case 'Low':
        setPowerConsumption(0.8);
        setCurrent(3.5);
        break;
      case 'Medium':
        setPowerConsumption(1.2);
        setCurrent(5.0);
        break;
      case 'High':
        setPowerConsumption(1.8);
        setCurrent(6.7);
        break;
    }
  }, [fanSpeed]);

  const toggleStatus = () => {
    setStatus((s) => (s === 'on' ? 'off' : 'on'));
  };

  const chartData = [
    { time: '00:00', power: 1.0, current: 4.5 },
    { time: '01:00', power: 1.2, current: 5.0 },
    { time: '02:00', power: 1.3, current: 5.2 },
    { time: '03:00', power: 1.1, current: 4.8 },
    { time: '04:00', power: 1.5, current: 5.5 },
    { time: '05:00', power: 1.2, current: 5.0 },
  ];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: { size: 14, weight: '500' },
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: { color: '#333' },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#333' },
        grid: { color: '#ddd' },
      },
    },
  };

  const infoBox = (Icon, label, value, unit, children = null) => (
    <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
      <Icon className="w-6 h-6 text-emerald-500" />
      <div className="flex-1">
        <p className="text-sm text-gray-500">{label}</p>
        <div className="text-lg font-bold flex items-center gap-2">
          <span>{value}</span>
          {unit && <span>{unit}</span>}
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 rounded-2xl shadow-lg text-gray-800 bg-gradient-to-br from-emerald-400 via-teal-300 to-green-200">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-emerald-900">
        {device.icon && <device.icon className="w-6 h-6 text-emerald-900" />}
        {device.name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Nhiệt độ */}
        {infoBox(
          Thermometer,
          'Nhiệt độ',
          `${temperature}°C`,
          '',
          <div className="ml-auto flex gap-1">
            <button
              onClick={decreaseTemp}
              className="w-6 h-6 flex items-center justify-center rounded bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
            >
              <MinusIcon className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>
            <button
              onClick={increaseTemp}
              className="w-6 h-6 flex items-center justify-center rounded bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>
          </div>
        )}

        {/* Tốc độ quạt */}
        {infoBox(
          Wind,
          'Tốc độ quạt',
          fanSpeed,
          '',
          <select
            className="ml-auto text-sm border border-emerald-900 rounded px-2 py-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-400 transition"
            value={fanSpeed}
            onChange={(e) => setFanSpeed(e.target.value)}
          >
            <option value="Low">Thấp</option>
            <option value="Medium">Trung bình</option>
            <option value="High">Cao</option>
          </select>
        )}

        {/* Công suất */}
        {infoBox(Zap, 'Công suất tiêu thụ', powerConsumption, 'kWh')}

        {/* Dòng điện */}
        {infoBox(Power, 'Dòng điện', current, 'A')}

        {/* Trạng thái */}
        <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 md:col-span-2">
          <GaugeCircle className="w-6 h-6 text-green-600" />
          <div className="flex-1">
            <p className="text-sm text-gray-500">Trạng thái</p>
            <p
              className={`text-lg font-bold transition-all duration-300 ${
                status === 'on' ? 'text-green-700' : 'text-red-700'
              }`}
            >
              {status === 'on' ? 'Đang bật' : 'Đang tắt'}
            </p>
          </div>
          <button
            onClick={toggleStatus}
            className={`ml-auto px-4 py-1 rounded-full shadow text-sm font-medium transition-all duration-300 ${
              status === 'on'
                ? 'bg-red-100 text-red-800 hover:bg-red-200'
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            {status === 'on' ? 'Tắt' : 'Bật'}
          </button>
        </div>
      </div>

      {/* Biểu đồ */}
      <div className="bg-white rounded-xl shadow p-4">
        <AirConditionerPowerChart data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
