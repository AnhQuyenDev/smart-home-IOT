import React from "react";
import { Phone, Video, MoreVertical, Circle } from "lucide-react";

export default function MessageHeader({ user }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow rounded-t-xl border-b">
      {/* Left: Avatar + Name */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover border"
          />
          {user.online && (
            <Circle className="w-3 h-3 text-emerald-500 absolute bottom-0 right-0 bg-white rounded-full" />
          )}
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-800">{user.name}</h2>
          <p className="text-xs text-gray-500">{user.online ? "Online" : "Offline"}</p>
        </div>
      </div>

      {/* Right: Action Icons */}
      <div className="flex items-center gap-4 text-gray-600">
        <button className="hover:text-emerald-600 transition">
          <Phone className="w-5 h-5" />
        </button>
        <button className="hover:text-emerald-600 transition">
          <Video className="w-5 h-5" />
        </button>
        <button className="hover:text-emerald-600 transition">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
