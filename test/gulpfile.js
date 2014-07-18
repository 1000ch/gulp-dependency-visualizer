var gulp = require('gulp');
var DependencyVisualizer = require('../');

gulp.task('visualizer', function () {
  gulp.src('./fixtures/*.js')
    .pipe(DependencyVisualizer());
});

gulp.task('default', ['visualizer']);