var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/users/login', function (req, res) {
  res.send('You are about to login');
});

app.get('/users/1/profile', function (req, res) {
  res.send('Norbert\'s profile');
});


app.listen(3000);
