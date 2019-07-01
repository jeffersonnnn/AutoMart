"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _generateToken = _interopRequireDefault(require("../utils/generateToken"));

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
        var foundUser, newUser, _newUser$, id, firstname, lastname, email, token;

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
                _newUser$ = newUser[0], id = _newUser$.id, firstname = _newUser$.firstname, lastname = _newUser$.lastname, email = _newUser$.email;
                token = (0, _generateToken["default"])({
                  id: id,
                  firstname: firstname,
                  lastname: lastname,
                  email: email
                });
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  data: {
                    token: token,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
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
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;