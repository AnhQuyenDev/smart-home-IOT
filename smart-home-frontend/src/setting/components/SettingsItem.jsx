import { useRef, useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SettingsItem({ title, icon, children, gradient, isOpen, onToggle }) {
  const Icon = icon;
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, children]);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md transition-all duration-300">
      {/* Header */}
      <div
        className={`flex items-center justify-between px-5 py-4 cursor-pointer text-white bg-gradient-to-r ${gradient} hover:opacity-90 transition-all`}
        onClick={onToggle}
      >
        <div className="flex items-center gap-3 text-lg font-semibold">
          <Icon className="w-6 h-6" />
          {title}
        </div>
        <div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>

      {/* Nội dung xổ xuống */}
      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out bg-white overflow-hidden"
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          padding: isOpen ? "16px" : "0px 16px",
        }}
      >
        <div className="opacity-100">{children}</div>
      </div>
    </div>
  );
}
