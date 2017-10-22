const gulp = require('gulp');
const fileConfig = require('../config/fileConfig.js');
const runSequence = require('run-sequence');

gulp.task('compile', function(cb) {
  return runSequence(
    
   // 'eslint',
   // 'webpack',
    cb
  )
});