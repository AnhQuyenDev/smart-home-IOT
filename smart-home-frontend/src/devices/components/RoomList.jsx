// RoomList/RoomList.jsx
import { useState } from "react";
import { List, Lightbulb, Tv, Fan, Snowflake, Refrigerator, ShowerHead } from "lucide-react";
import RoomAccordionItem from "./RoomAccordionItem";

const sampleData = [
  {
    room: 'Living Room',
    devices: [
      { id: 1, name: 'Ceiling Light', type: 'light', icon: Lightbulb },
      { id: 3, name: 'Air Conditioner', type: 'air_conditioner', icon: Snowflake },
    ],
  },
  {
    room: 'Bedroom',
    devices: [
      { id: 4, name: 'Bedside Lamp', type: 'light', icon: Lightbulb },
      { id: 6, name: 'Mini Fridge', type: 'refrigerator', icon: Refrigerator },
    ],
  },
  {
    room: 'Bathroom',
    devices: [
      { id: 7, name: 'Water Heater', type: 'water_heater', icon: ShowerHead },
    ],
  },
];

export default function RoomList({ onSelectDevice }) {
  const [expandedRoom, setExpandedRoom] = useState(null);

  const toggleRoom = (room) => {
    setExpandedRoom((prev) => (prev === room ? null : room));
  };

  return (
    <div className="space-y-6 pr-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full shadow">
          <List className="text-white w-5 h-5" />
        </div>
        <h2 className="text-xl font-semibold text-emerald-800 tracking-wide">Room List</h2>
      </div>

      {sampleData.map((roomData, idx) => (
        <RoomAccordionItem
          key={idx}
          roomData={roomData}
          isExpanded={expandedRoom === roomData.room}
          onToggle={() => toggleRoom(roomData.room)}
          onSelectDevice={onSelectDevice}
        />
      ))}
    </div>
  );
}
