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

var Cars =
/*#__PURE__*/
function () {
  function Cars() {
    _classCallCheck(this, Cars);
  }

  _createClass(Cars, null, [{
    key: "findById",
    value: function () {
      var _findById = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id) {
        var sql, params, query;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sql = 'SELECT * FROM cars WHERE id = $1;';
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

      function findById(_x) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "postCars",
    value: function () {
      var _postCars = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(newAd, owner) {
        var manufacturer, model, price, state, body_type, image_url, sql, params, query;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                manufacturer = newAd.manufacturer, model = newAd.model, price = newAd.price, state = newAd.state, body_type = newAd.body_type, image_url = newAd.image_url;
                sql = 'INSERT INTO cars(owner, state, price, manufacturer, model, body_type, image_url) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
                params = [owner, state, price, manufacturer, model, body_type, image_url];
                query = (0, _dbQuery["default"])(sql, params);
                return _context2.abrupt("return", query);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function postCars(_x2, _x3) {
        return _postCars.apply(this, arguments);
      }

      return postCars;
    }()
  }, {
    key: "adjustCarStatus",
    value: function () {
      var _adjustCarStatus = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id, status) {
        var sql, params, query;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sql = 'UPDATE cars SET status = $1 WHERE id = $2 RETURNING *';
                params = [status, id];
                query = (0, _dbQuery["default"])(sql, params);
                return _context3.abrupt("return", query);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function adjustCarStatus(_x4, _x5) {
        return _adjustCarStatus.apply(this, arguments);
      }

      return adjustCarStatus;
    }()
  }, {
    key: "adjustCarPrice",
    value: function () {
      var _adjustCarPrice = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id, price) {
        var sql, params, query;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                sql = 'UPDATE cars SET price = $1 WHERE id = $2 RETURNING *';
                params = [price, id];
                query = (0, _dbQuery["default"])(sql, params);
                return _context4.abrupt("return", query);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function adjustCarPrice(_x6, _x7) {
        return _adjustCarPrice.apply(this, arguments);
      }

      return adjustCarPrice;
    }()
  }, {
    key: "getCarsWithinRange",
    value: function () {
      var _getCarsWithinRange = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(status, from, to) {
        var sql, params, query;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (typeof from === "undefined" || typeof to === "undefined") {
                  sql = 'SELECT * FROM cars WHERE status = $1;';
                  params = [status];
                } else {
                  sql = 'SELECT * FROM cars WHERE status = $1 AND price BETWEEN $2 AND $3;';
                  params = [status, from, to];
                }

                query = (0, _dbQuery["default"])(sql, params);
                return _context5.abrupt("return", query);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getCarsWithinRange(_x8, _x9, _x10) {
        return _getCarsWithinRange.apply(this, arguments);
      }

      return getCarsWithinRange;
    }()
  }, {
    key: "deleteCars",
    value: function () {
      var _deleteCars = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(id) {
        var sql, params, query;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                sql = 'DELETE FROM cars WHERE id = $1 RETURNING *';
                params = [id];
                query = (0, _dbQuery["default"])(sql, params);
                return _context6.abrupt("return", query);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteCars(_x11) {
        return _deleteCars.apply(this, arguments);
      }

      return deleteCars;
    }()
  }]);

  return Cars;
}();

var _default = Cars;
exports["default"] = _default;