### Trong smart-home-backend
# Cấu hình file .env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=smart_home
DB_PORT=3306
PORT=5000

# Cơ sở dữ liệu
create database smart_home;
use smart_home;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('member', 'admin') DEFAULT 'admin',
  admin_id INT DEFAULT NULL,
  FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE SET NULL
);

# npm install

# npm run dev
