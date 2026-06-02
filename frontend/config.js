// Nếu web đang chạy trên máy ông (localhost), nó sẽ gọi tới Backend localhost:3000
// Nếu web đang chạy trên Vercel, nó sẽ tự động gọi tới Backend Render
const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:3000'
    : 'https://projectb-test-deploy-xxxx.onrender.com'; // ⚠️ Nhớ thay link Render thật của ông vào đây nhé!

// Xuất biến này ra để các file khác dùng
window.API_BASE_URL = API_BASE_URL;