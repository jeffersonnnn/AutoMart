"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _AdValidate = _interopRequireDefault(require("../middleware/AdValidate"));

var _carsController = _interopRequireDefault(require("../controllers/carsController"));

var _verifyAuthToken = _interopRequireDefault(require("../middleware/verifyAuthToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import AdvertController from '../controllers/carsController';
var router = _express["default"].Router();

router.post('/car', _verifyAuthToken["default"], _AdValidate["default"].validatePostAd, _carsController["default"].postAd);
var _default = router;
exports["default"] = _default;