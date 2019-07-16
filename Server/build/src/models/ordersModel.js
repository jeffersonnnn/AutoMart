"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbQuery = _interopRequireDefault(require("./dbQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Orders =
/*#__PURE__*/
function () {
  function Orders() {
    _classCallCheck(this, Orders);
  }

  _createClass(Orders, null, [{
    key: "findByOrder",
    value: function () {
      var _findByOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id) {
        var sql, params, query;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sql = 'SELECT * FROM orders WHERE id = $1;';
                params = [id];
                query = (0, _dbQuery["default"])(sql, params);
                return _context.abrupt("return", query);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findByOrder(_x) {
        return _findByOrder.apply(this, arguments);
      }

      return findByOrder;
    }()
  }, {
    key: "createOrder",
    value: function () {
      var _createOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(order, buyer) {
        var price_offered, car_id, sql, params, query;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                price_offered = order.price_offered, car_id = order.car_id;
                sql = 'INSERT INTO orders(buyer, car_id, price_offered) VALUES ($1, $2, $3) RETURNING *';
                params = [buyer, car_id, price_offered];
                query = (0, _dbQuery["default"])(sql, params);
                return _context2.abrupt("return", query);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createOrder(_x2, _x3) {
        return _createOrder.apply(this, arguments);
      }

      return createOrder;
    }()
  }, {
    key: "adjustOrderPrice",
    value: function () {
      var _adjustOrderPrice = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id, price_offered) {
        var sql, params, query;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sql = 'UPDATE orders  SET price_offered = $1 WHERE id = $2 RETURNING *';
                params = [price_offered, id];
                query = (0, _dbQuery["default"])(sql, params);
                return _context3.abrupt("return", query);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function adjustOrderPrice(_x4, _x5) {
        return _adjustOrderPrice.apply(this, arguments);
      }

      return adjustOrderPrice;
    }()
  }]);

  return Orders;
}();

var _default = Orders;
exports["default"] = _default;