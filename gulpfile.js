var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
requireDir('gulp');


gulp.task('build', function(cb){
  return runSequence(
  //  'clean',
  //  'compile',
  //  'test',
    'package',
    'demo-package',
  //  'verify',

    'run',
    'watch',
    cb
  );
});
