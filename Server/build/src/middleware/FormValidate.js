"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _formValidation = _interopRequireDefault(require("../utils/formValidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValidateForm =
/*#__PURE__*/
function () {
  function ValidateForm() {
    _classCallCheck(this, ValidateForm);
  }

  _createClass(ValidateForm, null, [{
    key: "validateSignup",
    value: function validateSignup(req, res, next) {
      var _req$body = req.body,
          firstName = _req$body.firstName,
          lastName = _req$body.lastName,
          email = _req$body.email,
          password = _req$body.password;

      if (firstName === undefined || firstName === '') {
        return res.status(406).json({
          status: 406,
          error: 'First name is required!'
        });
      }

      if (!_formValidation["default"].firstName.test(firstName)) {
        return res.status(406).json({
          status: 406,
          error: 'Please input alphabets only'
        });
      }

      if (lastName === undefined || lastName === '') {
        return res.status(406).json({
          status: 406,
          error: 'Last name is required!'
        });
      }

      if (!_formValidation["default"].lastName.test(lastName)) {
        return res.status(406).json({
          status: 406,
          error: 'Please input alphabets only'
        });
      }

      if (email === undefined || email === '') {
        return res.status(406).json({
          status: 406,
          error: 'Email is required!'
        });
      }

      if (!_formValidation["default"].email.test(email)) {
        return res.status(406).json({
          status: 406,
          error: 'invalid email'
        });
      }

      if (password === undefined || password === '') {
        return res.status(406).json({
          status: 406,
          error: 'please insert password'
        });
      }

      return next();
    }
  }]);

  return ValidateForm;
}();

var _default = ValidateForm;
exports["default"] = _default;