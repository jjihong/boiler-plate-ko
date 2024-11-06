// 시작점
const express = require("express"); // express module 가져오기
const app = express(); // 앱을 만들기
const port = 5001; // 5001번 포트를 사용

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hongs7803:ItIycxt8l6P5VY6s@cluster0.lfn0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 섹스");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
