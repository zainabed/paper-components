var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('demo-package', function(cb) {
  return runSequence(
    'build-demo-script-lib',
    'build-demo-script',
    'build-demo-template',
    'build-demo-index',
    cb
  )
});
