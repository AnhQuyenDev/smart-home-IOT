import React, { useState } from 'react';
import { Users, Shield, Key, PlusCircle, Trash2, Pencil } from 'lucide-react';

const initialUsers = [
  { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com', role: 'Admin' },
  { id: 2, name: 'Trần Thị B', email: 'b@gmail.com', role: 'Người dùng' },
];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Người dùng' });
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return;
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
    setNewUser({ name: '', email: '', role: 'Người dùng' });
    setShowModal(false);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-4 py-2 text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center gap-2"
      >
        <PlusCircle className="w-4 h-4" />
        Thêm người dùng
      </button>

      <table className="w-full text-left border-t border-gray-200">
        <thead className="bg-gray-50 text-gray-600 text-sm">
          <tr>
            <th className="py-2 px-3">Họ tên</th>
            <th className="py-2 px-3">Email</th>
            <th className="py-2 px-3">Vai trò</th>
            <th className="py-2 px-3 text-right">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-3">{u.name}</td>
              <td className="py-2 px-3">{u.email}</td>
              <td className="py-2 px-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    u.role === 'Admin' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {u.role}
                </span>
              </td>
              <td className="py-2 px-3 text-right space-x-2">
                <button className="text-sm text-blue-500 hover:text-blue-700">
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteUser(u.id)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Thêm người dùng */}
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
              <select
                className="w-full border rounded-md p-2"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="Người dùng">Người dùng</option>
                <option value="Admin">Admin</option>
              </select>
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
