"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var postAdValidate = {
  id: /^[1-9]{1,}/,
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  manufacturer: /^[a-zA-Z]+$/,
  model: /^([a-zA-Z0-9 _-]+)$/,
  price: /^-?\d*(\.\d+)?$/,
  state: /^[a-zA-Z]+$/,
  status: /^[a-zA-Z]+$/,
  price_offered: /^-?\d*(\.\d+)?$/,
  new_price_offered: /^-?\d*(\.\d+)?$/
};
var _default = postAdValidate;
exports["default"] = _default;