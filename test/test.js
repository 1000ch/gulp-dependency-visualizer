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

    stream.on('data', function (chunk) {
      //console.log(chunk);
    });

    var fixturePath = 'test/fixtures'; 
    fs.readdirSync(fixturePath).forEach(function (fixture) {

      var p = path.resolve(fixturePath, fixture);
      var buffer = fs.readFileSync(p, {
        encoding: 'utf8'
      });

      stream.write(new gutil.File({
        path: p,
        contents: new Buffer(buffer)
      }));

    });

    stream.end();

    assert(fs.existsSync('visualize'));
    rimraf.sync('visualize');
    callback();
  });

});
