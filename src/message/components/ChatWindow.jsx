import React from "react";
import MessageInput from "./MessageInput";

export default function ChatWindow({ messages, onSendMessage }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow p-4">
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs px-4 py-2 rounded-lg text-sm shadow-sm w-fit ${
              msg.from === "me"
                ? "ml-auto bg-emerald-100 text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <MessageInput onSend={onSendMessage} />
    </div>
  );
}
