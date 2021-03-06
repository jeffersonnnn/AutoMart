"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var formValidate = {
  id: /^[1-9]{1,}/,
  carId: /^[1-9]{1,}/,
  first_name: /^[a-zA-Z]+$/,
  last_name: /^[a-zA-Z]+$/,
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  address: /^([0-9]+)[.]([0-9]+)$/,
  price_offered: /^-?\d*(\.\d+)?$/
};
var _default = formValidate;
exports["default"] = _default;