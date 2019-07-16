"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _generateToken = _interopRequireDefault(require("../utils/generateToken"));

var _password = _interopRequireDefault(require("../utils/password"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    value: function () {
      var _registerUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var foundUser, newUser, _newUser$, id, first_name, last_name, email, token;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _userModel["default"].findByEmail(req.body.email);

              case 3:
                foundUser = _context.sent;

                if (!foundUser.length) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  success: false,
                  message: 'Your account exists, please sign in'
                }));

              case 6:
                _context.next = 8;
                return _userModel["default"].createUser(req.body);

              case 8:
                newUser = _context.sent;
                _newUser$ = newUser[0], id = _newUser$.id, first_name = _newUser$.first_name, last_name = _newUser$.last_name, email = _newUser$.email;
                token = (0, _generateToken["default"])({
                  id: id,
                  first_name: first_name,
                  last_name: last_name,
                  email: email
                });
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: 'Hey there, Welcome!',
                  data: {
                    token: token,
                    id: newUser[0].id,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    address: req.body.address,
                    email: req.body.email
                  }
                }));

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context.t0.message
                }));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));

      function registerUser(_x, _x2) {
        return _registerUser.apply(this, arguments);
      }

      return registerUser;
    }()
  }, {
    key: "signIn",
    value: function () {
      var _signIn = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var foundUser, isPasswordValid, _foundUser$, id, first_name, last_name, email, token;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _userModel["default"].findByEmail(req.body.email);

              case 3:
                foundUser = _context2.sent;

                if (foundUser.length) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  success: false,
                  message: 'Email or Password incorrect'
                }));

              case 6:
                _context2.next = 8;
                return _password["default"].comparePassword(req.body.password, foundUser[0].password);

              case 8:
                isPasswordValid = _context2.sent;

                if (isPasswordValid) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  success: false,
                  message: 'Email or Password incorrect'
                }));

              case 11:
                _foundUser$ = foundUser[0], id = _foundUser$.id, first_name = _foundUser$.first_name, last_name = _foundUser$.last_name, email = _foundUser$.email;
                token = (0, _generateToken["default"])({
                  id: id,
                  first_name: first_name,
                  last_name: last_name,
                  email: email
                });
                return _context2.abrupt("return", res.status(200).json({
                  status: 200,
                  message: 'Welcome back!',
                  data: {
                    token: token,
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    email: email
                  }
                }));

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context2.t0.message
                }));

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 16]]);
      }));

      function signIn(_x3, _x4) {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }()
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;