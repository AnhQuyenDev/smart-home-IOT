const db = require('../config/db');

const getMembers = async (req, res) => {
  const adminId = req.params.adminId;

  if (!adminId) {
    return res.status(400).json({ message: 'Thiếu admin_id' });
  }

  try {
    const [rows] = await db.promise().query(
      'SELECT id, full_name, email, phone, role FROM users WHERE admin_id = ?',
      [adminId]
    );

    res.status(200).json(rows);
  } catch (err) {
    console.error('Lỗi khi lấy danh sách member:', err);
    res.status(500).json({ message: 'Lỗi server' });
  }
};

module.exports = getMembers;
