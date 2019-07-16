"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var verifyAdmin = function verifyAdmin(req, res, next) {
  if (req.authUser.id !== 1) {
    return res.status(401).json({
      status: 401,
      message: 'You are not authorized to perform this action'
    });
  }

  next();
};

var _default = verifyAdmin;
exports["default"] = _default;