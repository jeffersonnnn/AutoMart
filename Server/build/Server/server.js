'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('ci with travis');
});

var server = app.listen(3000, function () {
  console.log('App running on port 3000');
});

module.exports = server;

