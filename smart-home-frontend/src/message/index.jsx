// message/index.jsx
import React, { useState } from 'react';
import Sidebar from '../dashboard/components/Sidebar';
import Header from '../dashboard/components/Header';
import MessageHeader from './components/MessageHeader';
import ChatWindow from './components/ChatWindow';
import FamilySidebar from './components/FamilySideBar';
// Fake user data (sau này có thể thay bằng context hoặc API)
const mockUser = {
  name: "Trần Thị Bích Ngọc",
  avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  online: true,
};



export default function MessagePage() {
  const [activeItem, setActiveItem] = useState('message');
  const [selectedUser, setSelectedUser] = useState(mockUser); // Người đang trò chuyện

    const userList = [
    {
        name: "Nguyễn Văn A",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        online: true,
    },
    {
        name: "Trần Thị B",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        online: false,
    },
    {
        name: "Lê Thị C",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        online: true,
    },
    ];

   const [messages, setMessages] = useState([
    { from: "user", text: "Chào bạn!" },
    { from: "me", text: "Chào bạn, cần hỗ trợ gì không?" },
  ]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    setMessages([...messages, { from: "me", text }]);
  };

    return (
        <div className="flex h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-100">
            {/* Sidebar bên trái */}
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            {/* Khu vực chính */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title="message" />

                {/* Phần chính chia làm 2: Chat và Family */}
                <main className="flex flex-1 px-6 pb-4 gap-4 overflow-hidden">
                    {/* Vùng Chat */}
                    <div className="flex flex-col flex-1 h-full bg-white rounded-xl shadow p-4">
                        <MessageHeader user={selectedUser} />
                        <div className="flex-1 overflow-y-auto">
                            <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
                        </div>
                    </div>

                    {/* Danh sách thành viên */}
                    <div className="w-64 flex-shrink-0">
                    <FamilySidebar users={userList} onSelectUser={(u) => setSelectedUser(u)} />
                    </div>
                </main>
            </div>
        </div>
    );

}
