'use strict';
var through = require('through2');

module.exports = function () {
  return through.obj(function(file){
    console.log(file.path);
  })
};
