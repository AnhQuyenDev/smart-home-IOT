import React from 'react';
import { Camera, Settings } from 'lucide-react';

const cameraList = [
  {
    id: 1,
    name: 'Bedroom',
    status: 'online',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'Kitchen',
    status: 'offline',
    image:
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    name: 'Parking',
    status: 'online',
    image:
      'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

function CameraCard({ camera }) {
  return (
    <div className="relative group">
      <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-md">
        <img
          src={camera.image}
          alt={camera.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Status + ID */}
        <div className="absolute top-3 left-3 flex items-center space-x-2 z-10">
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              camera.status === 'online' ? 'bg-emerald-500' : 'bg-red-500'
            }`}
          />
          <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">
            Camera {camera.id}
          </span>
        </div>

        {/* Overlay for offline */}
        {camera.status === 'offline' && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
            <span className="text-white font-semibold text-sm">Not Working</span>
          </div>
        )}
      </div>
      <p className="text-center text-sm font-medium text-gray-700 mt-2">{camera.name}</p>
    </div>
  );
}

export default function CameraFeeds() {
  return (
    <div className="bg-white border-gray-100 shadow-xl rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Camera className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-gray-900 font-semibold text-lg">Camera Feeds</h3>
        </div>
        <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cameraList.map((cam) => (
          <CameraCard key={cam.id} camera={cam} />
        ))}
      </div>
    </div>
  );
}
