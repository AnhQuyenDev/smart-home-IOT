// Lấy thông tin người dùng từ localStorage
export const getCurrentUser = () => {
  try {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data).user : null; // .user vì response trả về dạng { message, user }
  } catch (error) {
    console.error('Lỗi khi đọc user từ localStorage:', error);
    return null;
  }
};

// Lưu thông tin người dùng vào localStorage
export const saveUserToLocalStorage = (userData) => {
  try {
    localStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    console.error('Không thể lưu user vào localStorage:', error);
  }
};

// Xoá thông tin người dùng khỏi localStorage (dùng khi logout)
export const removeUserFromLocalStorage = () => {
  try {
    localStorage.removeItem('userData');
  } catch (error) {
    console.error('Không thể xoá user khỏi localStorage:', error);
  }
};

// Cập nhật thông tin người dùng
export const updateUser = (newData) => {
  const currentData = JSON.parse(localStorage.getItem('userData'));
  const updatedUser = {
    ...currentData.user,
    ...newData,
  };
  localStorage.setItem('userData', JSON.stringify({ user: updatedUser }));
};
