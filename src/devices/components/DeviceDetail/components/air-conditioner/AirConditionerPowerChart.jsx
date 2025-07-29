// AirConditionerPowerChart.jsx
import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function AirConditionerPowerChart({ data }) {
  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Biểu đồ công suất & dòng điện</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="power" stroke="#10b981" name="Công suất (kWh)" />
          <Line type="monotone" dataKey="current" stroke="#3b82f6" name="Dòng điện (A)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
