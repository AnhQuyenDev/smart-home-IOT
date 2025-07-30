const db = require('../config/db');

const updateInfor = (req, res) => {
  const { id } = req.params;
  const { full_name, email, phone } = req.body;

  if (!id || !full_name || !email || !phone) {
    return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin.' });
  }

  const sql = 'UPDATE users SET full_name = ?, email = ?, phone = ? WHERE id = ?';

  db.query(sql, [full_name, email, phone, id], (err, result) => {
    if (err) {
      console.error('Lỗi khi cập nhật thông tin:', err);
      return res.status(500).json({ message: 'Lỗi máy chủ khi cập nhật thông tin.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng để cập nhật.' });
    }

    res.status(200).json({ message: 'Cập nhật thông tin thành công.' });
  });
};

module.exports = updateInfor;
