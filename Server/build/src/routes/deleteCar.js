"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _carsController = _interopRequireDefault(require("../controllers/carsController"));

var _AdValidate = _interopRequireDefault(require("../middleware/AdValidate"));

var _verifyAuthToken = _interopRequireDefault(require("../middleware/verifyAuthToken"));

var _verifyAdmin = _interopRequireDefault(require("../middleware/verifyAdmin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import AdvertController from '../controllers/carController';
var router = _express["default"].Router();

router["delete"]('/car/:carId/', _verifyAuthToken["default"], _AdValidate["default"].validateCarId, _verifyAdmin["default"], _carsController["default"].deleteCar);
var _default = router;
exports["default"] = _default;