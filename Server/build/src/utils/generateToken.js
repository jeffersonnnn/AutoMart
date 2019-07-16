"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var generateToken = function generateToken(user) {
  var payload = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    address: user.address
  };

  var token = _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY, {
    expiresIn: 3600
  });

  return token;
};

var _default = generateToken;
exports["default"] = _default;