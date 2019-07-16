"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require('pg'),
    Pool = _require.Pool;

var dotenv = require('dotenv');

dotenv.config();
var _process$env = process.env,
    PRODUCTION_URL = _process$env.PRODUCTION_URL,
    DATABASE_URL = _process$env.DATABASE_URL,
    TEST_URL = _process$env.TEST_URL,
    NODE_ENV = _process$env.NODE_ENV;

var getConnection = function getConnection(env) {
  switch (env) {
    case 'production':
      return PRODUCTION_URL;

    case 'test':
      return TEST_URL;

    default:
      return DATABASE_URL;
  }
};

var pool = new Pool({
  connectionString: getConnection(NODE_ENV)
});
var _default = pool;
exports["default"] = _default;