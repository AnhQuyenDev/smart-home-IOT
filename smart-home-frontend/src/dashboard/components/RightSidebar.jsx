import React from 'react';
import { Users, Bell, DoorOpen } from 'lucide-react';

export default function RightSidebar() {
  const members = [
    { name: 'Lucy', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Anna', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'John', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Mike', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Sarah', avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  const notifications = [
    'Pay electricity bill before 20-03-2025',
    'System update scheduled tonight',
    'New device connected to Kitchen'
  ];

  return (
    <div className="w-full md:w-80 bg-white border-l border-gray-100 p-6 space-y-8 rounded-tr-3xl rounded-br-3xl shadow-lg">
      
      {/* Members */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Members</h3>
          </div>
          <button className="text-sm text-emerald-600 hover:underline">Add</button>
        </div>
        <div className="flex -space-x-2 overflow-hidden">
          {members.map((member, i) => (
            <img 
              key={i}
              src={member.avatar}
              alt={member.name}
              className="w-10 h-10 rounded-full border-2 border-white shadow"
              title={member.name}
            />
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Notifications</h3>
          </div>
          <button className="text-sm text-emerald-600 hover:underline">View all</button>
        </div>
        <ul className="space-y-3">
          {notifications.map((note, i) => (
            <li key={i} className="flex items-start gap-2 bg-yellow-50 rounded-xl p-3 shadow-sm">
              <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center text-yellow-900 font-bold text-sm">⚡</div>
              <p className="text-sm text-gray-700">{note}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Doors */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <DoorOpen className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-gray-900">Doors</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Front Door"
              className="w-full h-24 rounded-xl object-cover"
            />
            <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">Front Door</span>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Back Door"
              className="w-full h-24 rounded-xl object-cover"
            />
            <span className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1 rounded">Back Door</span>
            <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🏠</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
