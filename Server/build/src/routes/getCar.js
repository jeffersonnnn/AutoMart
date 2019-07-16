"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _carsController = _interopRequireDefault(require("../controllers/carsController"));

var _verifyAuthToken = _interopRequireDefault(require("../middleware/verifyAuthToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import AdValidate from '../middleware/AdValidate';
var router = _express["default"].Router();

router.get('/car/:carId/', _verifyAuthToken["default"], _carsController["default"].getSpecificCar);
router.get('/car', _carsController["default"].getAllAvailableCars);
var _default = router;
exports["default"] = _default;