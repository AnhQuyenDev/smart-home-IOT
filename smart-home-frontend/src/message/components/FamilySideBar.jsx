import React from 'react';
import { UserCircle } from 'lucide-react';

export default function FamilySidebar({ users, onSelectUser }) {
  return (
    <div className="w-64 bg-white rounded-xl shadow p-4 overflow-y-auto">
      <h2 className="text-sm font-semibold text-gray-600 mb-3">Thành viên gia đình</h2>
      <ul className="space-y-3">
        {users.map((user, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 cursor-pointer hover:bg-emerald-50 p-2 rounded-md transition"
            onClick={() => onSelectUser(user)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-400">
                {user.online ? 'Đang hoạt động' : 'Ngoại tuyến'}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
