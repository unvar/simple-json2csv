"use strict";
var expect = require('expect.js'),
    SimpleJson2Csv = require('..'),
    fs = require('fs'),
    path = require('path');

describe('simple-json2csv', function() {
  it('should print csv for simple strings', function(done) {
    var json2Csv = new SimpleJson2Csv(require('./fixtures/simple.json'));    
    collect(json2Csv, function(csv) {
      expect(csv).to.equal(fs.readFileSync(path.join(__dirname, './fixtures/simple.csv')).toString());
      done();
    });
  });
});

/**
 * Simple collector to collect a readable stream into a string
 */
function collect(readable, cb) {
  var data = '';
  readable.on('data', function(chunk) {
    data += chunk;
  });
  readable.on('end', function() {
    cb(data);
  });
}
