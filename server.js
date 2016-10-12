var express = require('express');
var app = express();

app.get('/Login', function (req, res) {
res.sendFile(__dirname +"/Loginpage.html");
});

app.get('/Dashboard', function (req, res) {
res.sendFile(__dirname +"/Dashboard.html");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});