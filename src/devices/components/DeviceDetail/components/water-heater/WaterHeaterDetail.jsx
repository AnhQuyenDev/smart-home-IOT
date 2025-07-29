import React, { useState } from 'react';
import WaterHeaterChart from './WaterHeaterChart';
import { Droplets, Thermometer, Zap, PlugZapIcon, Activity, Gauge, LineChart, ToggleRight } from 'lucide-react'; // icon mẫu

export default function WaterHeaterDetail({ device }) {
    const generateInitialChartData = () => {
        const now = new Date();
        const baseTime = now.getTime() - 1000 * 60 * 5;
        return Array.from({ length: 20 }, (_, i) => {
        const time = new Date(baseTime + i * 15000);
        return {
            time: `${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`,
            temperature: 60 + Math.sin(i / 3) * 1.5,
            power: 1450 + Math.cos(i / 2) * 50,
        };
        });
    };

    const [powerOn, setPowerOn] = useState(true);
    const [temperature, setTemperature] = useState(60);
    const [power, setPower] = useState(1500);
    const [voltage, setVoltage] = useState(220);
    const [current, setCurrent] = useState(6.8);
    const [pressure, setPressure] = useState(1.2);
    const [chartData, setChartData] = useState(() => generateInitialChartData());

    const handleTempChange = (delta) => {
        if (!powerOn) return;
        const newTemp = Math.min(80, Math.max(30, temperature + delta));
        const newPower = +(1450 + Math.random() * 100).toFixed(1);
        const newVoltage = +(220 + (Math.random() * 2 - 1)).toFixed(1);
        const newCurrent = +(newPower / newVoltage).toFixed(2);
        const newPressure = +(1.2 + (Math.random() * 0.1 - 0.05)).toFixed(2);

        setTemperature(newTemp);
        setPower(newPower);
        setVoltage(newVoltage);
        setCurrent(newCurrent);
        setPressure(newPressure);
        updateChartData(newTemp, newPower);
    };

    const updateChartData = (temp, power) => {
        const now = new Date();
        const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        const newEntry = { time, temperature: temp, power };
        setChartData(prev => [...prev.slice(-19), newEntry]);
    };

    const rows = [
        [
            {
                label: 'Nhiệt độ',
                value: `${temperature}°C`,
                icon: Thermometer,
                controls: (
                <div className="flex gap-1 justify-center">
                    <button
                    className="bg-emerald-200 px-2 rounded text-emerald-800 font-bold"
                    onClick={() => handleTempChange(-1)}
                    >
                    -
                    </button>
                    <button
                    className="bg-emerald-200 px-2 rounded text-emerald-800 font-bold"
                    onClick={() => handleTempChange(1)}
                    >
                    +
                    </button>
                </div>
                ),
            },
            { label: 'Công suất', value: `${power} W`, icon: Zap },
        ],
        [
            { label: 'Điện áp', value: `${voltage} V`, icon: PlugZapIcon },
            { label: 'Dòng điện', value: `${current} A`, icon: Activity },
        ],
        [
            { label: 'Áp suất', value: `${pressure} bar`, icon: Gauge },
            {
                label: 'Trạng thái',
                value: powerOn ? 'Đang hoạt động' : 'Tắt',
                icon: ToggleRight,
            },
        ],
    ];

    return (
        <div className="bg-gradient-to-br from-emerald-100 to-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-emerald-900">
            {device.icon ? (
                <device.icon className="w-6 h-6 text-emerald-900" />
            ) : (
                <Droplets className="w-6 h-6 text-emerald-900" />
            )}
            {device.name}
            </h2>
            <button
            onClick={() => setPowerOn(prev => !prev)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold shadow transition-all duration-200 ${
                powerOn
                ? 'bg-red-100 text-red-800 hover:bg-red-200'
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
            >
            {powerOn ? 'Tắt thiết bị' : 'Bật thiết bị'}
            </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
        {rows.map((row, i) => (
            <React.Fragment key={i}>
            {row.map((item, j) => (
                <div
                key={j}
                className="bg-white p-4 rounded-lg shadow flex flex-col justify-between"
                >
                {/* Icon + Label */}
                <div className="flex items-center gap-2 mb-2">
                    {item.icon && <item.icon className="w-5 h-5 text-emerald-500" />}
                    <p className="text-sm text-gray-500">{item.label}</p>
                </div>

                {/* Value + Controls */}
                <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold text-gray-800">{item.value}</p>
                    {item.controls && <div>{item.controls}</div>}
                </div>
                </div>
            ))}
            </React.Fragment>
        ))}
        </div>


        <WaterHeaterChart data={chartData} />
        </div>
    );
}
