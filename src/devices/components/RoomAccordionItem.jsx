// RoomList/RoomAccordionItem.jsx
import { useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function RoomAccordionItem({ roomData, isExpanded, onToggle, onSelectDevice }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isExpanded) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isExpanded]);

  return (
    <div className="bg-white rounded-2xl shadow border border-gray-100">
      {/* Header */}
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-lg"
        onClick={onToggle}
      >
        <h2 className="text-base font-semibold">{roomData.room}</h2>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </div>

      {/* Expandable content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: "0px" }}
      >
        <div className="p-3 space-y-2">
          {roomData.devices.map((device) => {
            const Icon = device.icon;
            return (
              <div
                key={device.id}
                onClick={() => onSelectDevice(device)}
                className="flex items-center gap-3 p-2 rounded-lg border hover:shadow hover:bg-white transition duration-300 cursor-pointer bg-gray-50"
              >
                <div className="p-2 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full">
                  <Icon className="w-4 h-4 text-emerald-700" />
                </div>
                <span className="text-sm text-gray-800">{device.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
