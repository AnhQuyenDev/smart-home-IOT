const db = require('../config/db');

const addMember = async (req, res) => {
  try {
    const { fullName, email, phone, password, admin_id } = req.body;

    // Kiểm tra đầu vào
    if (!fullName || !email || !phone || !password || !admin_id) {
      return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin member' });
    }

    // Kiểm tra email đã tồn tại chưa
    const [existing] = await db.promise().query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    if (existing.length > 0) {
      return res.status(409).json({ message: 'Email đã được sử dụng' });
    }

    // Chèn member mới
    const [result] = await db.promise().query(
      'INSERT INTO users (full_name, email, phone, password, role, admin_id) VALUES (?, ?, ?, ?, ?, ?)',
      [fullName, email, phone, password, 'member', admin_id]
    );

    const [userRows] = await db.promise().query(
      'SELECT id, full_name, email, phone, role, admin_id FROM users WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({
      message: 'Thêm thành viên thành công',
      user: userRows[0],
    });
  } catch (error) {
    console.error('❌ Lỗi khi thêm thành viên:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm thành viên' });
  }
};

module.exports = addMember;
