"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _FormValidate = _interopRequireDefault(require("../middleware/FormValidate"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to AutoMart API v1'
  });
});
router.post('/auth/signup', _FormValidate["default"].validateSignup, _userController["default"].registerUser);
router.post('/auth/signin', _userController["default"].signIn);
var _default = router;
exports["default"] = _default;