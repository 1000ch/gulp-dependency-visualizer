var gulp = require('gulp');
var DependencyVisualizer = require('../');

gulp.task('DependencyVisualizer', function () {
  gulp.src('./fixtures/*.js')
    .pipe(DependencyVisualizer());
});

gulp.task('default', ['DependencyVisualizer']);