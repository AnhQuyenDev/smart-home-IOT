// dashboard/index.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import PowerChart from './components/PowerChart';
import DeviceControls from './components/DeviceControls';
import CameraFeeds from './components/CameraFeeds';
import RightSidebar from './components/RightSidebar';

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Left Sidebar */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={activeItem} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Weather Card */}
            <WeatherCard />

            {/* Charts and Controls Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PowerChart />
              <DeviceControls />
            </div>

            {/* Camera Feeds */}
            <CameraFeeds />
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
