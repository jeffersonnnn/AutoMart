"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _chai = require("chai");

var _server = _interopRequireDefault(require("../../../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('User test', function () {
  it('Sign up as admin', function (done) {
    (0, _supertest["default"])(_server["default"]).post('/api/v1/auth/signup').send({
      email: 'admin@gmail.com',
      first_name: 'admin',
      last_name: 'user',
      password: 'password',
      address: 'admin block'
    }).end(function (err, res) {
      (0, _chai.expect)(res.status).to.equal(201);
      (0, _chai.expect)(res.body.message).to.equal('Hey there, Welcome!');
      (0, _chai.expect)(res.body.data.email).to.equal('admin@gmail.com');
      (0, _chai.expect)(res.body.data.address).to.equal('admin block');
      done();
    });
  });
});