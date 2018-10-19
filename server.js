var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("dist"));

app.get("/index.html", function(req, res) {
  //  res.send('Hello Express');
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/login", function(req, res) {
  console.log("/login 响应 get 请求");
  res.sendFile(__dirname + "/" + "login.html");
});

//  POST 请求
app.post("/login", urlencodedParser, function(req, res) {
  // 输出 JSON 格式
  var response = {
    account: req.body.account,
    password: req.body.password
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(8888, function() {
  console.log("server is start: 8888");
});
