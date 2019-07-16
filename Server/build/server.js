"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./src/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  res.status(301).redirect('/docs');
});
app.get('/docs', function (req, res) {
  res.status(200).sendFile(_path["default"].resolve('output.html'));
});
app.use('/api/v1', _routes["default"]);
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port 3000, yay');
});
app.all('*', function (req, res) {
  res.status(404).json({
    message: 'Wrong endpoint. Such endpoint does not exist'
  });
});
var _default = server;
exports["default"] = _default;