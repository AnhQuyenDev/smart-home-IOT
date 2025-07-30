const db = require('../config/db');

const signUp = async (req, res) => {
  try {
    const { fullName, email, phone, password, role, admin_id } = req.body;

    if (!fullName || !email || !phone || !password || !role) {
      return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin' });
    }

    // Kiểm tra email đã tồn tại chưa
    const [existing] = await db.promise().query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (existing.length > 0) {
      return res.status(409).json({ message: 'Email đã được sử dụng' });
    }

    // Chèn người dùng mới
    const [result] = await db.promise().query(
      'INSERT INTO users (full_name, email, phone, password, role, admin_id) VALUES (?, ?, ?, ?, ?, ?)',
      [fullName, email, phone, password, role, admin_id || null]
    );

    const userId = result.insertId;

    // Truy vấn lại thông tin người dùng vừa tạo
    const [userRows] = await db.promise().query(
      'SELECT id, full_name, email, phone, role, admin_id FROM users WHERE id = ?',
      [userId]
    );

    if (userRows.length === 0) {
      return res.status(500).json({ message: 'Không tìm thấy người dùng sau khi tạo' });
    }

    const user = userRows[0];

    res.status(201).json({
      message: 'Đăng ký thành công',
      user,
    });
  } catch (error) {
    console.error('❌ Lỗi khi đăng ký:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi đăng ký' });
  }
};

module.exports = signUp;
