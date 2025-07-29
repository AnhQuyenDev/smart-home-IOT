import React from 'react';
import { User, Mail, Smartphone, Pencil, Lock } from 'lucide-react';

export default function AccountSettings() {
  const userInfo = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@gmail.com',
    phone: '0123 456 789',
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-emerald-700 flex items-center gap-2">
          <User className="w-5 h-5" />
          Thông tin tài khoản
        </h3>
      </div>

      {/* Nội dung thông tin */}
      <div className="space-y-4 text-gray-700 text-sm">
        <InfoRow icon={<User className="w-4 h-4 text-emerald-500" />} label="Họ và tên" value={userInfo.name} />
        <InfoRow icon={<Mail className="w-4 h-4 text-emerald-500" />} label="Email" value={userInfo.email} />
        <InfoRow icon={<Smartphone className="w-4 h-4 text-emerald-500" />} label="Điện thoại" value={userInfo.phone} />
      </div>
      {/* Nút cập nhật */}
        <div className="flex items-center justify-center gap-2">
          <button className="flex items-center gap-1 text-sm text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-md transition">
            <Pencil className="w-4 h-4" />
            Cập nhật thông tin
          </button>
          <button className="flex items-center gap-1 text-sm text-emerald-600 border border-emerald-600 hover:bg-emerald-50 px-3 py-1.5 rounded-md transition">
            <Lock className="w-4 h-4" />
            Đổi mật khẩu
          </button>
        </div>
    </div>
  );
}

// Component nhỏ tái sử dụng từng dòng thông tin
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2 border-b pb-2 last:border-none">
      <div className="w-5">{icon}</div>
      <span className="min-w-[100px]">{label}:</span>
      <span className="ml-auto font-medium text-right">{value}</span>
    </div>
  );
}
