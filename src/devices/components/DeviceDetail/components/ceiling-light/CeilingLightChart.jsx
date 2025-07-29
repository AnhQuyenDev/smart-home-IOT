// CeilingLightChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const CeilingLightChart = ({ data }) => {
  return (
    <div className="w-full h-64 p-4 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Biểu đồ hoạt động đèn</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#4B5563" />
          <YAxis stroke="#4B5563" domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="brightness" stroke="#10B981" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CeilingLightChart;
