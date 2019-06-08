"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var verifyAuthToken = function verifyAuthToken(req, res, next) {
  var authHeader = req.headers.authorization;

  if (typeof authHeader === 'undefined') {
    res.status(401).json({
      err: 'Unauthorised - Header Not Set'
    });
    return;
  }

  var token = authHeader.split(' ')[1];

  _jsonwebtoken["default"].verify(authHeader, process.env.SECRET_KEY, function (err, decodedToken) {
    if (err) {
      res.status(401).json({
        error: 'Unauthorised - Invalid Authencation Token',
        err: err
      });
      return;
    }

    req.authUser = decodedToken;
    next();
  });
};

var _default = verifyAuthToken;
exports["default"] = _default;