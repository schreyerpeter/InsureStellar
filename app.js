var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res, next) {
  res.sendStatus(200);
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var PORT = process.env.PORT || 8080;
app.listen(PORT);