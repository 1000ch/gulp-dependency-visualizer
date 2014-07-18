'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var gutil = require('gulp-util');
var rimraf = require('rimraf');
var DependencyVisualizer = require('../index');

describe('gulp-dependency-visualizer', function () {

  before(function () {
    rimraf.sync('visualize');
  });

  it('should visualize dependencies', function (callback) {

    var stream = DependencyVisualizer();

    stream.on('data', function () {});

    stream.on('end', function (error) {
      assert(fs.existsSync('visualize'));
      callback();
    });

    stream.write(new gutil.File({
      path: 'index.js',
      contents: new Buffer('')
    }));

    stream.end();
  });

});