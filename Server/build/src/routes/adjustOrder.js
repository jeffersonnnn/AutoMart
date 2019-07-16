"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _AdValidate = _interopRequireDefault(require("../middleware/AdValidate"));

var _orderController = _interopRequireDefault(require("../controllers/orderController"));

var _verifyAuthToken = _interopRequireDefault(require("../middleware/verifyAuthToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.patch('/order/:orderId/price', _verifyAuthToken["default"], _AdValidate["default"].adjustOrder, _AdValidate["default"].validateOrderId, _orderController["default"].adjustOrder);
var _default = router;
exports["default"] = _default;