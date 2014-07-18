# [gulp-dependency-visualizer](https://www.npmjs.org/package/gulp-dependency-visualizer)

## About

[![Build Status](https://travis-ci.org/1000ch/gulp-dependency-visualizer.svg?branch=master)](https://travis-ci.org/1000ch/gulp-dependency-visualizer)
[![NPM version](https://badge.fury.io/js/gulp-dependency-visualizer.svg)](http://badge.fury.io/js/gulp-dependency-visualizer)
[![Dependency Status](https://david-dm.org/1000ch/gulp-dependency-visualizer.svg)](https://david-dm.org/1000ch/gulp-dependency-visualizer)
[![devDependency Status](https://david-dm.org/1000ch/gulp-dependency-visualizer/dev-status.svg)](https://david-dm.org/1000ch/gulp-dependency-visualizer#info=devDependencies)

## Install

```sh
$ npm install --save-dev gulp-dependency-visualizer
```

## Usage

Example `gulpfile.js`.

```js
var gulp = require('gulp');
var Visualizer = require('gulp-dependency-visualizer');

gulp.task('visualizer', function () {
  gulp.src('./fixtures/*.js')
    .pipe(Visualizer());
});

gulp.task('default', ['visualizer']);
```

You have to add dependency definition to target JavaScript files such as following.

```
//@depend baz.js
```

## License

MIT