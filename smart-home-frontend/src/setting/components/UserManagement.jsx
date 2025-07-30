// UserManagement.jsx
import React, { useState, useEffect } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import DataTable from 'react-data-table-component';
import { getCurrentUser } from '../../utils/auth';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', role: 'Người dùng' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      const admin = getCurrentUser();
      if (!admin?.id) return;

      try {
        const res = await fetch(`http://localhost:5000/api/members/${admin.id}`);
        const data = await res.json();
        if (res.ok) {
          const mapped = data.map(user => ({
            id: user.id,
            name: user.full_name,
            email: user.email,
            phone: user.phone,
            role: user.role === 'member' ? 'Người dùng' : user.role,
          }));
          setUsers(mapped);
        } else {
          console.error('Lỗi khi tải danh sách:', data.message);
        }
      } catch (err) {
        console.error('Lỗi kết nối:', err);
      }
    };

    fetchMembers();
  }, []);

  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email) return;

    const admin = getCurrentUser();
    if (!admin?.id) {
      alert('Không xác định được admin hiện tại.');
      return;
    }

    const payload = {
      fullName: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      password: '123456',
      role: 'member',
      admin_id: admin.id,
    };

    try {
      const res = await fetch('http://localhost:5000/api/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) {
        console.error('Lỗi khi thêm member:', result.message);
        alert('Thêm thành viên thất bại: ' + result.message);
        return;
      }

      setNewUser({ name: '', email: '', phone: '', role: 'Người dùng' });
      setShowModal(false);
      alert('Thêm thành viên thành công!');
    } catch (err) {
      console.error('Lỗi kết nối khi thêm member:', err);
      alert('Đã xảy ra lỗi khi thêm thành viên');
    }
  };

  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xoá thành viên này không?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/delete/${id}`, {
        method: 'DELETE',
      });

      const result = await res.json();
      if (res.ok) {
        setUsers(users.filter(u => u.id !== id));
        alert('Xoá thành viên thành công!');
      } else {
        console.error('Lỗi xoá:', result.message);
        alert('Không thể xoá thành viên: ' + result.message);
      }
    } catch (err) {
      console.error('Lỗi kết nối khi xoá:', err);
      alert('Đã xảy ra lỗi khi kết nối tới máy chủ.');
    }
  };

  const columns = [
    { name: 'Họ tên', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'SĐT', selector: row => row.phone, sortable: true },
    {
      name: 'Vai trò',
      cell: row => (
        <span className={`px-2 py-1 rounded text-xs font-medium ${row.role === 'Admin'
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-gray-100 text-gray-700'
          }`}>
          {row.role}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Hành động',
      cell: row => (
        <button onClick={() => handleDeleteUser(row.id)} className="text-sm text-red-500 hover:text-red-700">
          <Trash2 className="w-4 h-4" />
        </button>
      ),
      right: true,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center gap-2"
      >
        <PlusCircle className="w-4 h-4" />
        Thêm người dùng
      </button>

      <DataTable
        pagination
        columns={columns}
        data={users}
        highlightOnHover
        striped
        noHeader
      />

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Thêm người dùng mới</h4>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Họ tên"
                className="w-full border rounded-md p-2"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md p-2"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full border rounded-md p-2"
                value={newUser.phone}
                onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Huỷ
              </button>
              <button
                onClick={handleAddUser}
                className="px-4 py-2 text-sm rounded-md bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
