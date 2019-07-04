"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../controllers/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import FormValidate from '../middleware/FormValidate';
var router = _express["default"].Router();

router.get("/", function (req, res) {
  res.status(200).json({
    message: "Welcome to AutoMart API v1"
  });
}); // router.post('/auth/signup', FormValidate.validateSignup, UserController.registerUser);

router.post("/auth/signup", _users["default"].registerUser); // router.post('/auth/signin', UserController.signIn);

var _default = router;
exports["default"] = _default;