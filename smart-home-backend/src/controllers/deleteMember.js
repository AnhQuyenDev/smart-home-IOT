// controllers/deleteMember.js
const db = require('../config/db');

const deleteMember = async (req, res) => {
  const id = req.params.memberId;

  try {
    const [result] = await db.promise().query('DELETE FROM users WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng để xoá' });
    }

    res.status(200).json({ message: 'Xoá thành viên thành công' });
  } catch (err) {
    console.error('Lỗi xoá user:', err);
    res.status(500).json({ message: 'Lỗi server khi xoá user' });
  }
};

module.exports = deleteMember;
