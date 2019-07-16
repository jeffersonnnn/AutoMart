"use strict";

var _pool = _interopRequireDefault(require("./pool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Create users table
 */
var createUsersTable = function createUsersTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS \n      users(\n        id SERIAL PRIMARY KEY NOT NULL,\n        email VARCHAR(30) UNIQUE NOT NULL,\n        first_name VARCHAR (40) NOT NULL,\n        last_name VARCHAR(40) NOT NULL,\n        password VARCHAR(128) NOT NULL,\n        address VARCHAR(40),\n        is_admin BOOLEAN DEFAULT false\n    )";
  return _pool["default"].connect().then(function (client) {
    return client.query(queryText).then(function (res) {
      /* eslint-disable no-console */
      console.log(res.rows);
      client.end();
    })["catch"](function (err) {
      /* eslint-disable no-console */
      console.log(err);
      client.end();
    });
  });
};
/**
* Create create cars table
*/


var createCarsTable = function createCarsTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS \n      cars(\n        id SERIAL PRIMARY KEY NOT NULL,\n        owner INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,\n        created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),\n        state VARCHAR (40) NOT NULL,\n        status VARCHAR(13) DEFAULT 'available',\n        price FLOAT NOT NULL,\n        manufacturer VARCHAR(255) NOT NULL,\n        model VARCHAR(255) NOT NULL,\n        image_url VARCHAR(200) NOT NULL,\n        body_type VARCHAR (255) NOT NULL\n    )";
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
/**
* Create Order Table
*/


var createOrdersTable = function createOrdersTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS \n      orders(\n        id SERIAL PRIMARY KEY NOT NULL,\n        buyer INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,\n        car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE NOT NULL,\n        created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),\n        price_offered FLOAT NOT NULL,\n        status VARCHAR(13) DEFAULT 'pending' \n    )";
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
/**
* Create create flags table
*/


var createFlagsTable = function createFlagsTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS \n      flags(\n        id SERIAL PRIMARY KEY NOT NULL,\n        car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE NOT NULL,\n        created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),\n        reason VARCHAR(255) NOT NULL,\n        description VARCHAR(255) NOT NULL\n    )";
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
          return createUsersTable();

        case 2:
          _context.next = 4;
          return createCarsTable();

        case 4:
          _context.next = 6;
          return createOrdersTable();

        case 6:
          _context.next = 8;
          return createFlagsTable();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))(); // owner INTEGER REFERENCES users(id),