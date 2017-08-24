var gulp = require('gulp');
var fileConfig = require('../config/fileConfig.js');
var runSequence = require('run-sequence');

gulp.task('package', function(cb) {
  return runSequence(
    'sass',
    'make',
    'package-component',
  //  'package-index',
    cb
  )
});

gulp.task('package-component', function() {
  return gulp.src(fileConfig.component.src)
    .pipe(gulp.dest(fileConfig.build.path));
});

/*gulp.task('package-index', function() {
  return gulp.src(fileConfig.index.src)
    .pipe(gulp.dest(fileConfig.build.path));
});*/
