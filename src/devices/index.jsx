import React, { useState } from 'react';
import Sidebar from '../dashboard/components/Sidebar';
import Header from '../dashboard/components/Header';
import RoomList from './components/RoomList';
import DeviceDetail from './components/DeviceDetail';

export default function Devices() {
  const [activeItem, setActiveItem] = useState('devices');
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div className="flex h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Devices" />

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden p-6">
          <div className="flex h-full space-x-4">
            {/* Room List - 3 phần */}
            <div className="w-full lg:basis-3/12 overflow-y-auto">
              <RoomList onSelectDevice={setSelectedDevice} />
            </div>

            {/* Device Detail - 7 phần */}
            <div className="w-full lg:basis-9/12 overflow-y-auto">
              {selectedDevice ? (
                <DeviceDetail device={selectedDevice} />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 italic">
                  Chọn thiết bị để xem chi tiết
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
