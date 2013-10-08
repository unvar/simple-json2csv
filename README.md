# simple-json2csv

A simple json to csv converter nodejs module

[![build status](https://secure.travis-ci.org/unvar/simple-json2csv.png)](http://travis-ci.org/unvar/simple-json2csv)

## Installation

This module is installed via npm:

``` bash
$ npm install simple-json2csv
```

## Example Usage

``` js
var SimpleJson2Csv = require('simple-json2csv');
var json2Csv = new SimpleJson2Csv(require('./fixtures/simple.json'));
json2Csv.pipe(fs.createWriteStream(<path>));

// hint: listen for finish on your writable stream
```
