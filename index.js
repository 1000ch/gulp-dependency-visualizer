'use strict';

var fs = require('fs');
var path = require('path');
var through = require('through2');
var gutil = require('gulp-util');
var DependencyVisualizer = require('js-dependency-visualizer');

module.exports = function (options) {
  
  var options = options || {};
  var paths = [];

  return through.obj(function (file, encode, callback) {

    if (file.isNull()) {
      this.push(file);
      return callback();
    }
    
    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-dependency-visualizer', 'Streaming not supported'));
      return callback();
    }
    
    paths.push(file.path);
    this.push(file);
    callback();

  }, function (callback) {

    if (paths.length === 0) {
      return callback();
    }

    var dv = new DependencyVisualizer({
      files: paths
    });
    
    dv.analyze();
  });
};