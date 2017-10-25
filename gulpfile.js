var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
requireDir('gulp', { recurse: true });


gulp.task('build', function (cb) {
  return runSequence(
    //'clean',
    //   'compile',
    //  'test',
    'build-docs',
    'package',

    cb
  );
});

gulp.task('site', function (cb) {
  return runSequence(
    'package-component',
    'demo-package',
    'run',
    'watch',
    cb
  );
});
