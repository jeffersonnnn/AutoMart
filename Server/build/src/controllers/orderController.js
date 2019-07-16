"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ordersModel = _interopRequireDefault(require("../models/ordersModel"));

var _carsModel = _interopRequireDefault(require("../models/carsModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrderController =
/*#__PURE__*/
function () {
  function OrderController() {
    _classCallCheck(this, OrderController);
  }

  _createClass(OrderController, null, [{
    key: "postOrder",
    value: function () {
      var _postOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _postOrder2, _req$body, price_offered, car_id, foundCar;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _ordersModel["default"].createOrder(req.body, req.authUser.id);

              case 3:
                _postOrder2 = _context.sent;
                _req$body = req.body, price_offered = _req$body.price_offered, car_id = _req$body.car_id;
                _context.next = 7;
                return _carsModel["default"].findById(car_id);

              case 7:
                foundCar = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  data: {
                    id: _postOrder2[0].id,
                    car_id: car_id,
                    created_on: _postOrder2[0].created_on,
                    status: foundCar[0].status,
                    price: foundCar[0].price,
                    price_offered: price_offered
                  }
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context.t0.message
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      function postOrder(_x, _x2) {
        return _postOrder.apply(this, arguments);
      }

      return postOrder;
    }()
  }, {
    key: "adjustOrder",
    value: function () {
      var _adjustOrder = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var foundOrder, updatedPrice, _foundOrder$, id, car_id, status, price_offered;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _ordersModel["default"].findByOrder(req.params.orderId);

              case 3:
                foundOrder = _context2.sent;
                console.log(foundOrder);
                _context2.next = 7;
                return _ordersModel["default"].adjustOrderPrice(parseInt(req.params.orderId, 10), req.body.price_offered);

              case 7:
                updatedPrice = _context2.sent;
                _foundOrder$ = foundOrder[0], id = _foundOrder$.id, car_id = _foundOrder$.car_id, status = _foundOrder$.status, price_offered = _foundOrder$.price_offered;

                if (!(foundOrder[0].status !== 'pending')) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  status: 400,
                  message: 'offer processed already'
                }));

              case 11:
                return _context2.abrupt("return", res.status(201).json({
                  status: 201,
                  data: {
                    id: id,
                    car_id: car_id,
                    status: status,
                    old_price_offered: foundOrder[0].price_offered,
                    new_price_offered: updatedPrice[0].price_offered
                  }
                }));

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context2.t0.message
                }));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 14]]);
      }));

      function adjustOrder(_x3, _x4) {
        return _adjustOrder.apply(this, arguments);
      }

      return adjustOrder;
    }()
  }]);

  return OrderController;
}();

var _default = OrderController;
exports["default"] = _default;