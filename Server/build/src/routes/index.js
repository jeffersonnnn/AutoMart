"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _postAdRouter = _interopRequireDefault(require("./postAdRouter"));

var _signinRouter = _interopRequireDefault(require("./signinRouter"));

var _postOrderRouter = _interopRequireDefault(require("./postOrderRouter"));

var _adjustOrder = _interopRequireDefault(require("./adjustOrder"));

var _adjustStatus = _interopRequireDefault(require("./adjustStatus"));

var _adjustPrice = _interopRequireDefault(require("./adjustPrice"));

var _getCar = _interopRequireDefault(require("./getCar"));

var _deleteCar = _interopRequireDefault(require("./deleteCar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use(_signinRouter["default"], _postAdRouter["default"], _postOrderRouter["default"], _adjustOrder["default"], _adjustStatus["default"], _adjustPrice["default"], _getCar["default"], _deleteCar["default"]);
var _default = router;
exports["default"] = _default;