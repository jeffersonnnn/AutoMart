"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _usersModel = _interopRequireDefault(require("../models/usersModel"));

var _generateToken = _interopRequireDefault(require("../utils/generateToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "registerUser",
    value: function registerUser(req, res) {
      var _req$body = req.body,
          firstName = _req$body.firstName,
          lastName = _req$body.lastName,
          password = _req$body.password,
          email = _req$body.email,
          address = _req$body.address;
      var id = _usersModel["default"].length + 1;
      var userData = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        address: address
      };

      _usersModel["default"].push(userData);

      return res.status(201).json({
        status: 201,
        data: {
          token: (0, _generateToken["default"])({
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email
          }),
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email
        }
      });
    }
  }, {
    key: "signIn",
    value: function signIn(req, res) {
      var _req$body2 = req.body,
          email = _req$body2.email,
          password = _req$body2.password;

      var data = _usersModel["default"].find(function (user) {
        return user.email === email && user.password === password;
      });

      if (!data) {
        return res.status(400).json({
          status: 400,
          message: 'Email or password does not exist'
        });
      }

      var id = data.id,
          firstName = data.firstName,
          lastName = data.lastName;
      return res.status(200).json({
        status: 200,
        data: {
          token: (0, _generateToken["default"])({
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email
          }),
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email
        }
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;