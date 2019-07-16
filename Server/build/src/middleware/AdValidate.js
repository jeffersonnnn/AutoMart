"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AdValidation = _interopRequireDefault(require("../utils/AdValidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValidateAd =
/*#__PURE__*/
function () {
  function ValidateAd() {
    _classCallCheck(this, ValidateAd);
  }

  _createClass(ValidateAd, null, [{
    key: "validatePostAd",
    value: function validatePostAd(req, res, next) {
      var _req$body = req.body,
          manufacturer = _req$body.manufacturer,
          model = _req$body.model,
          price = _req$body.price,
          state = _req$body.state;
      var errors = [];

      if (!manufacturer) {
        errors.push('Please insert manufacturer');
      }

      if (!_AdValidation["default"].manufacturer.test(manufacturer)) {
        errors.push('Insert alphabets only');
      }

      if (!model) {
        errors.push('Please insert model');
      }

      if (!price) {
        errors.push('Please insert price');
      }

      if (!_AdValidation["default"].price.test(price)) {
        errors.push('Insert numbers only');
      }

      if (!state) {
        errors.push('Please insert state of vehicle');
      }

      if (!_AdValidation["default"].state.test(state)) {
        errors.push('Insert alphabets only');
      }

      if (errors.length) {
        return res.status(406).json({
          status: 406,
          error: errors
        });
      }

      return next();
    }
  }, {
    key: "postOrder",
    value: function postOrder(req, res, next) {
      var _req$body2 = req.body,
          carId = _req$body2.carId,
          price_offered = _req$body2.price_offered;
      var errors = [];

      if (!carId) {
        errors.push('Please select car');
      }

      if (!price_offered) {
        errors.push('Please insert figure');
      }

      if (!_AdValidation["default"].price_offered.test(price_offered)) {
        errors.push('Please enter numbers only');
      }

      if (errors.length) {
        return res.status(406).json({
          status: 422,
          error: errors
        });
      }

      return next();
    }
  }, {
    key: "adjustOrder",
    value: function adjustOrder(req, res, next) {
      var price_offered = req.body.price_offered;

      if (price_offered === undefined) {
        return res.status(406).json({
          status: 406,
          error: 'please input value'
        });
      }

      if (!_AdValidation["default"].price_offered.test(price_offered)) {
        return res.status(406).json({
          status: 406,
          error: 'please insert numbers only'
        });
      }

      return next();
    }
  }, {
    key: "adjustPrice",
    value: function adjustPrice(req, res, next) {
      var price = req.body.price;

      if (!_AdValidation["default"].price.test(price)) {
        return res.status(406).json({
          status: 406,
          error: 'please insert numbers only'
        });
      }

      if (!Number(price)) {
        return res.status(406).json({
          status: 406,
          error: 'parameter must be a number'
        });
      }

      return next();
    }
  }, {
    key: "validateOrderId",
    value: function validateOrderId(req, res, next) {
      var orderId = req.params.orderId;

      if (!Number(orderId)) {
        return res.status(406).json({
          status: 406,
          error: 'parameter must be a number'
        });
      }

      return next();
    }
  }, {
    key: "validateCarId",
    value: function validateCarId(req, res, next) {
      var carId = req.params.carId;

      if (!Number(carId)) {
        return res.status(406).json({
          status: 406,
          error: 'parameter must be a number'
        });
      }

      return next();
    }
  }]);

  return ValidateAd;
}();

var _default = ValidateAd;
exports["default"] = _default;