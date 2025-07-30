import React, { useState } from 'react';
import { getCurrentUser, updateUser } from '../../utils/auth';

export default function UpdateInforForm({ user, onClose }) {
  const [formData, setFormData] = useState({
    full_name: user.full_name,
    email: user.email,
    phone: user.phone,
  });
  const currentUser = getCurrentUser();
  const userId = currentUser?.id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting updated info:', formData);

    try {

      if (!userId) {
        console.log(getCurrentUser())
        alert('Không tìm thấy thông tin người dùng.');
        return;
      }

      const response = await fetch(`http://localhost:5000/api/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Lỗi từ server:', result.message);
        alert('Cập nhật thất bại: ' + result.message);
        return;
      }

      // Cập nhật localStorage
      console.log(localStorage);
      updateUser(formData);

      alert('Cập nhật thông tin thành công!');
      onClose(); // Đóng modal
    } catch (error) {
      console.error('Lỗi kết nối:', error);
      alert('Có lỗi xảy ra khi cập nhật.', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md space-y-4 relative">
        <h2 className="text-lg font-semibold text-emerald-700">Cập nhật thông tin</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Họ và tên</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-200"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-200"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-200"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-sm border rounded-md text-gray-600 hover:bg-gray-100"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-sm bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
