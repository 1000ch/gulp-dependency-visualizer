'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var gutil = require('gulp-util');
var rimraf = require('rimraf');
var DependencyVisualizer = require('../index');

describe('gulp-dependency-visualizer', function () {

  before(function () {
    rimraf.sync('test/visualize');
  });

  it('should visualize dependencies', function (callback) {

    var stream = DependencyVisualizer();

    stream.on('data', function () {});

    stream.on('end', function (error) {
      assert(fs.existsSync('test/visualize'));
      callback();
    });

    var fixturePath = 'test/fixtures'; 
    fs.readdirSync(fixturePath).forEach(function (fixture) {

      var p = path.resolve(fixturePath, fixture);
      var buffer = fs.readFileSync(p);

      stream.write(new gutil.File({
        path: p,
        contents: buffer
      }));

    });

    stream.end();
  });

});