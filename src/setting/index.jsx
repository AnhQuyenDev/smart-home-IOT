import { useState } from "react";
import Sidebar from "../dashboard/components/Sidebar";
import Header from "../dashboard/components/Header";
import AccountSettings from "./components/AccountSettings";
import AppearanceSettings from "./components/AppearanceSettings";
import NotificationSettings from "./components/NotificationSettings";
import DeviceSettings from "./components/DeviceSettings";
import LanguageSettings from "./components/LanguageSettings";
import UserManagement from "./components/UserManagement";
import SettingsItem from "./components/SettingsItem";

import {
  UserCog,
  Users2,
  Paintbrush,
  Bell,
  MonitorSmartphone,
  LogOut,
  Languages,
} from "lucide-react";

export default function SettingsPage() {
  const [activeItem, setActiveItem] = useState("settings");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Bấm lại để đóng
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Settings" />

        <main className="px-4 py-6 space-y-4 min-w-4xl mx-auto">
          <SettingsItem
            title="Cài đặt tài khoản"
            icon={UserCog}
            gradient="from-green-400 to-indigo-600"
            isOpen={activeIndex === 0}
            onToggle={() => toggleSection(0)}
          >
            <AccountSettings />
          </SettingsItem>

          <SettingsItem
            title="Quản lí người dùng"
            icon={Users2}
            gradient="from-green-400 to-indigo-600"
            isOpen={activeIndex === 1}
            onToggle={() => toggleSection(1)}
          >
            <UserManagement />
          </SettingsItem>

          <SettingsItem
            title="Giao diện"
            icon={Paintbrush}
            gradient="from-green-400 to-indigo-600"
            isOpen={activeIndex === 2}
            onToggle={() => toggleSection(2)}
          >
            <AppearanceSettings />
          </SettingsItem>

          <SettingsItem
            title="Thông báo"
            icon={Bell}
            gradient="from-green-400 to-indigo-600"
            isOpen={activeIndex === 3}
            onToggle={() => toggleSection(3)}
          >
            <NotificationSettings />
          </SettingsItem>

          <SettingsItem
            title="Thiết bị"
            icon={MonitorSmartphone}
            gradient="from-green-400 to-indigo-600"
            isOpen={activeIndex === 4}
            onToggle={() => toggleSection(4)}
          >
            <DeviceSettings />
          </SettingsItem>

          <SettingsItem
            title="Ngôn ngữ"
            icon={Languages}
            gradient="from-green-400 to-indigo-600"
            isOpen={activeIndex === 5}
            onToggle={() => toggleSection(5)}
          >
            <LanguageSettings />
          </SettingsItem>

          <div
            className="flex items-center justify-between px-5 py-4 rounded-xl text-white bg-gradient-to-r from-red-600 to-red-400 shadow cursor-pointer hover:opacity-90 transition-all"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            <div className="flex items-center gap-3 text-lg font-medium">
              <LogOut className="w-6 h-6" />
              Đăng xuất
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
