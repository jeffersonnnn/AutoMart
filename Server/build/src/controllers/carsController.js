"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _carsModel = _interopRequireDefault(require("../models/carsModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CarsController =
/*#__PURE__*/
function () {
  function CarsController() {
    _classCallCheck(this, CarsController);
  }

  _createClass(CarsController, null, [{
    key: "postAd",
    value: function () {
      var _postAd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _postAd2, _req$body, manufacturer, model, price, state, image_url;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _carsModel["default"].postCars(req.body, req.authUser.id);

              case 3:
                _postAd2 = _context.sent;
                _req$body = req.body, manufacturer = _req$body.manufacturer, model = _req$body.model, price = _req$body.price, state = _req$body.state, image_url = _req$body.image_url;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  data: {
                    id: _postAd2[0].id,
                    email: req.authUser.email,
                    created_on: _postAd2[0].created_on,
                    manufacturer: manufacturer,
                    model: model,
                    price: price,
                    state: state,
                    image_url: image_url,
                    status: _postAd2[0].status
                  }
                }));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context.t0.message
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function postAd(_x, _x2) {
        return _postAd.apply(this, arguments);
      }

      return postAd;
    }()
  }, {
    key: "adjustCarStatus",
    value: function () {
      var _adjustCarStatus = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var foundCar, updatedStatus, _foundCar$, id, created_on, manufacturer, model, price, state, image_url;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _carsModel["default"].findById(parseInt(req.params.carId, 10));

              case 3:
                foundCar = _context2.sent;

                if (foundCar.length) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  status: 404,
                  message: 'sorry, this car does not exist'
                }));

              case 6:
                _context2.next = 8;
                return _carsModel["default"].adjustCarStatus(parseInt(req.params.carId, 10), req.body.status);

              case 8:
                updatedStatus = _context2.sent;
                _foundCar$ = foundCar[0], id = _foundCar$.id, created_on = _foundCar$.created_on, manufacturer = _foundCar$.manufacturer, model = _foundCar$.model, price = _foundCar$.price, state = _foundCar$.state, image_url = _foundCar$.image_url;
                return _context2.abrupt("return", res.status(201).json({
                  status: 201,
                  data: {
                    id: id,
                    email: req.authUser.email,
                    created_on: created_on,
                    manufacturer: manufacturer,
                    model: model,
                    price: price,
                    state: state,
                    image_url: image_url,
                    status: updatedStatus[0].status
                  }
                }));

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context2.t0.message
                }));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }));

      function adjustCarStatus(_x3, _x4) {
        return _adjustCarStatus.apply(this, arguments);
      }

      return adjustCarStatus;
    }()
  }, {
    key: "adjustCarPrice",
    value: function () {
      var _adjustCarPrice = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var foundAd, updatedAdPrice, _foundAd$, id, created_on, manufacturer, model, state, image_url;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _carsModel["default"].findById(parseInt(req.params.carId, 10));

              case 3:
                foundAd = _context3.sent;
                _context3.next = 6;
                return _carsModel["default"].adjustCarPrice(parseInt(req.params.carId, 10), req.body.price);

              case 6:
                updatedAdPrice = _context3.sent;
                _foundAd$ = foundAd[0], id = _foundAd$.id, created_on = _foundAd$.created_on, manufacturer = _foundAd$.manufacturer, model = _foundAd$.model, state = _foundAd$.state, image_url = _foundAd$.image_url;
                return _context3.abrupt("return", res.status(201).json({
                  status: 201,
                  data: {
                    id: id,
                    email: req.authUser.email,
                    created_on: created_on,
                    manufacturer: manufacturer,
                    model: model,
                    price: updatedAdPrice[0].price,
                    state: state,
                    image_url: image_url,
                    status: foundAd[0].status
                  }
                }));

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context3.t0.message
                }));

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function adjustCarPrice(_x5, _x6) {
        return _adjustCarPrice.apply(this, arguments);
      }

      return adjustCarPrice;
    }()
  }, {
    key: "getSpecificCar",
    value: function () {
      var _getSpecificCar = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res) {
        var findCar, _findCar$, id, owner, created_on, state, price, status, manufacturer, model, body_type, image_url;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _carsModel["default"].findById(parseInt(req.params.carId, 10));

              case 3:
                findCar = _context4.sent;
                _findCar$ = findCar[0], id = _findCar$.id, owner = _findCar$.owner, created_on = _findCar$.created_on, state = _findCar$.state, price = _findCar$.price, status = _findCar$.status, manufacturer = _findCar$.manufacturer, model = _findCar$.model, body_type = _findCar$.body_type, image_url = _findCar$.image_url;

                if (findCar) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  status: 400,
                  message: 'sorry, this car does not exist'
                }));

              case 7:
                return _context4.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    id: id,
                    owner: owner,
                    created_on: created_on,
                    state: state,
                    status: status,
                    price: price,
                    manufacturer: manufacturer,
                    model: model,
                    image_url: image_url,
                    body_type: body_type
                  }
                }));

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context4.t0.message
                }));

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10]]);
      }));

      function getSpecificCar(_x7, _x8) {
        return _getSpecificCar.apply(this, arguments);
      }

      return getSpecificCar;
    }()
  }, {
    key: "getAllAvailableCars",
    value: function () {
      var _getAllAvailableCars = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(req, res) {
        var getCars;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _carsModel["default"].getCarsWithinRange(req.query.status, req.query.min_price, req.query.max_price);

              case 3:
                getCars = _context5.sent;

                if (getCars.length) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", res.status(400).json({
                  status: 400,
                  message: 'sorry, all cars are sold'
                }));

              case 6:
                return _context5.abrupt("return", res.status(200).json({
                  status: 200,
                  data: getCars
                }));

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context5.t0.message
                }));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function getAllAvailableCars(_x9, _x10) {
        return _getAllAvailableCars.apply(this, arguments);
      }

      return getAllAvailableCars;
    }()
  }, {
    key: "deleteCar",
    value: function () {
      var _deleteCar = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(req, res) {
        var findCar;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _carsModel["default"].findById(req.params.carId);

              case 3:
                findCar = _context6.sent;
                _context6.next = 6;
                return _carsModel["default"].deleteCars(req.params.carId);

              case 6:
                if (findCar.length) {
                  _context6.next = 8;
                  break;
                }

                return _context6.abrupt("return", res.status(404).json({
                  status: 404,
                  message: 'Car does not exist'
                }));

              case 8:
                return _context6.abrupt("return", res.status(200).json({
                  status: 200,
                  message: 'Ad deleted successfully'
                }));

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", res.status(500).json({
                  sucess: false,
                  error: 'Server error',
                  message: process.env.NODE_ENV === 'production' ? 'Server down. Please try again later' : _context6.t0.message
                }));

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 11]]);
      }));

      function deleteCar(_x11, _x12) {
        return _deleteCar.apply(this, arguments);
      }

      return deleteCar;
    }()
  }]);

  return CarsController;
}();

var _default = CarsController;
exports["default"] = _default;