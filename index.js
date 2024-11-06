// 시작점
const express = require("express"); // express module 가져오기
const app = express(); // 앱을 만들기
const port = 5001; // 5001번 포트를 사용
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User"); // User 갖고오기

// application/x-www-form-urlencoded 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
// application/json 분석해서 가져올 수 있게 함.
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 섹스조아");
});

app.post("/register", (req, res) => {
  //클라이언트에서 보내주는 회원가입 정보들을 client에서 가져오면
  //그것들을 db에 넣는다.

  const user = new User(req.body); // 정보들이 user모델에 저장됨

  user
    .save()
    .then((userInfo) => res.status(200).json({ success: true }))
    .catch((err) => res.json({ success: false, err }));

  //  user.save()는 더 이상 콜백을 인자로 받지 않게 됨.
  //   user.save((err, doc) => {
  //     if (err) return res.json({ success: false, err });
  //     return res.status(200).json({
  //       success: true,
  //     }); // 성공을 뜻함.
  //   });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
