"use strict";

var _require = require('chai'),
    expect = _require.expect;

var server = require('../../../Server/server.js');

describe('test', function () {
  it('should return a string', function () {
    expect('ci with travis').to.equal('ci with travis');
  });
});