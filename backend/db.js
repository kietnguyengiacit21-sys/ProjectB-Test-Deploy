const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,        // 🔥 THÊM DÒNG NÀY ĐỂ GỌI ĐÚNG CỔNG 27024
    user: process.env.DB_USER,
    password: process.env.DB_PASS,    // 🔥 ĐỔI LẠI THÀNH DB_PASS CHO KHỚP VỚI .ENV
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;