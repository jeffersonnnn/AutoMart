"use strict";

var _pool = _interopRequireDefault(require("./pool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dropUsersTable = function dropUsersTable() {
  var queryText = "DROP TABLE IF EXISTS users CASCADE;\n                    DROP TABLE IF EXISTS orders CASCADE;\n                    DROP TABLE IF EXISTS cars CASCADE;\n                    DROP TABLE IF EXISTS flags CASCADE;";
  return _pool["default"].connect().then(function (client) {
    return client.query(queryText).then(function (res) {
      console.log(res.rows);
      client.end();
    })["catch"](function (err) {
      console.log(err);
      client.end();
    });
  });
};

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return dropUsersTable();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();