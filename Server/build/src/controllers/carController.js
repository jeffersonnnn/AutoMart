"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _carModel = _interopRequireDefault(require("../models/carModel"));

var _orderModel = _interopRequireDefault(require("../models/orderModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class CarController
 * @description Specifies which method handles a given request for a specific endpoint
 * @exports CarController
 * @param {req} : The request object sent in the body
 * @param {res} : The reponse object sent by the server to the user
 */
var AdvertController =
/*#__PURE__*/
function () {
  function AdvertController() {
    _classCallCheck(this, AdvertController);
  }

  _createClass(AdvertController, null, [{
    key: "postAd",

    /**
     * @method postAd : Adds a new car advert to the collection
     */
    value: function postAd(req, res) {
      var _req$body = req.body,
          manufacturer = _req$body.manufacturer,
          model = _req$body.model,
          price = _req$body.price,
          state = _req$body.state,
          status = _req$body.status;
      console.log('==', req.authUser);
      var id = _carModel["default"].length + 1;
      var carData = {
        id: id,
        created_on: new Date(),
        manufacturer: manufacturer,
        model: model,
        price: price,
        state: state,
        status: status || 'available'
      };

      _carModel["default"].push(carData);

      res.status(201).json({
        status: 201,
        data: carData
      });
    }
  }, {
    key: "postOrder",
    value: function postOrder(req, res) {
      var _req$body2 = req.body,
          carId = _req$body2.carId,
          priceOffered = _req$body2.priceOffered;

      var exactCar = _carModel["default"].find(function (car) {
        return car.id === carId;
      });

      if (!exactCar) {
        res.status(404).json({
          status: 404,
          message: 'Car does not exist'
        });
        return;
      }

      var id = _orderModel["default"].length + 1;
      var purchaseData = {
        id: id,
        carId: carId,
        created_on: new Date(),
        price: exactCar.price,
        priceOffered: priceOffered || 'pending'
      };

      _orderModel["default"].push(purchaseData);

      res.status(201).json({
        status: 201,
        data: purchaseData
      });
    }
  }, {
    key: "adjustOrder",
    value: function adjustOrder(req, res) {
      var amount = req.body.amount;

      var adjustPrice = _orderModel["default"].find(function (adjust) {
        return adjust.id === Number(req.params.orderId);
      });

      var newPrice = Object.assign({}, adjustPrice, {
        amount: amount
      });

      if (!adjustPrice) {
        res.status(400).json({
          status: 400,
          message: 'sorry, this order does not exist'
        });
        return;
      }

      if (adjustPrice.status !== 'pending') {
        res.status(400).json({
          status: 400,
          message: 'offer processed already'
        });
        return;
      }

      res.status(200).json({
        status: 200,
        data: {
          id: adjustPrice.id,
          car_id: adjustPrice.carId,
          status: adjustPrice.status,
          oldPriceOffered: adjustPrice.amount,
          newPriceOffered: Number(newPrice.amount)
        }
      });
    }
  }, {
    key: "adjustCarStatus",
    value: function adjustCarStatus(req, res) {
      var status = req.body.status;

      var adjustStatus = _carModel["default"].find(function (adjust) {
        return adjust.id === Number(req.params.carId);
      });

      if (!adjustStatus) {
        res.status(400).json({
          status: 400,
          message: 'sorry, this car does not exist'
        });
        return;
      }

      var newStatus = Object.assign({}, adjustStatus, {
        status: status
      });
      res.status(200).json({
        status: 200,
        data: {
          id: adjustStatus.id,
          email: adjustStatus.email,
          created_on: adjustStatus.createdOn,
          manufacturer: adjustStatus.manufacturer,
          model: adjustStatus.model,
          price: adjustStatus.price,
          state: adjustStatus.state,
          status: newStatus.status
        }
      });
    }
  }, {
    key: "adjustCarPrice",
    value: function adjustCarPrice(req, res) {
      var price = req.body.price;

      var adjustPrice = _carModel["default"].find(function (adjust) {
        return adjust.id === Number(req.params.carId);
      });

      var newPrice = Object.assign({}, adjustPrice, {
        price: price
      });
      res.status(200).json({
        status: 200,
        data: {
          id: adjustPrice.id,
          email: adjustPrice.email,
          created_on: adjustPrice.createdOn,
          manufacturer: adjustPrice.manufacturer,
          model: adjustPrice.model,
          price: Number(newPrice.price),
          state: adjustPrice.state,
          status: adjustPrice.status
        }
      });
    }
  }, {
    key: "getCarById",
    value: function getCarById(req, res) {
      var carId = req.params.carId;

      var getCar = _carModel["default"].find(function (search) {
        return search.id === Number(carId);
      });

      if (!getCar) {
        res.status(400).json({
          status: 400,
          message: 'sorry, this car does not exist'
        });
        return;
      }

      res.status(200).json({
        status: 200,
        data: {
          id: getCar.id,
          owner: getCar.owner,
          createdOn: getCar.createdOn,
          state: getCar.state,
          status: getCar.status,
          price: getCar.price,
          manufacturer: getCar.manufacturer,
          model: getCar.model,
          bodyType: getCar.bodyType
        }
      });
    }
  }, {
    key: "getAvailableCars",
    value: function getAvailableCars(req, res) {
      var _req$query = req.query,
          status = _req$query.status,
          minPrice = _req$query.minPrice,
          maxPrice = _req$query.maxPrice;

      var getCars = _carModel["default"].filter(function (car) {
        return car.status === status;
      });

      var getCarsWithinRange = _carModel["default"].filter(function (car) {
        return car.price >= Number(minPrice) && car.price <= Number(maxPrice);
      });

      if (!status) {
        res.status(200).json({
          status: 200,
          data: _carModel["default"]
        });
        return;
      }

      if (status && minPrice && maxPrice) {
        res.status(200).json({
          status: 200,
          data: getCarsWithinRange
        });
        return;
      }

      if (status !== 'available') {
        res.status(400).json({
          status: 400,
          message: 'sorry, all cars are sold'
        });
        return;
      }

      res.status(200).json({
        status: 200,
        data: getCars
      });
    }
  }, {
    key: "deleteSpecificCar",
    value: function deleteSpecificCar(req, res) {
      var carId = req.params.carId;

      var carExists = _carModel["default"].find(function (car) {
        return car.id === Number(carId);
      });

      if (!carExists) {
        res.status(400).json({
          status: 400,
          message: 'This car does not exist'
        });
        return;
      }

      _carModel["default"].filter(function (car) {
        return car.id !== Number(carId);
      });

      res.status(200).json({
        status: 'Car Ad successfully deleted'
      });
    }
  }]);

  return AdvertController;
}();

var _default = AdvertController;
exports["default"] = _default;