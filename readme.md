# [gulp-dependency-visualizer](https://www.npmjs.org/package/gulp-dependency-visualizer)

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