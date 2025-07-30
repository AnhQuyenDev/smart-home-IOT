const db = require('../config/db'); // file kết nối MySQL

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Vui lòng nhập đầy đủ Email và Mật khẩu.' });
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Lỗi truy vấn:', err);
      return res.status(500).json({ message: 'Đã xảy ra lỗi server.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng.' });
    }

    // Nếu đúng, trả về dữ liệu user trừ password
    const user = results[0];
    delete user.password;

    return res.status(200).json({
      message: 'Đăng nhập thành công.',
      user,
    });
  });
};

module.exports = login ;
