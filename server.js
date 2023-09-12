const app = require("./src/app");

// khai bao port và khởi động sv
const PORT = 3005;

const server = app.listen(PORT, () => {
  console.log(`WSV start with port: ${PORT}`);
});

// ctrl + c
process.on('SIGINT', () => {
  server.close(() => {
    console.log(`Exit server express`);
    // có thể call gửi mail báo rằng sv bị tắt hay gì đó.
  });
});
