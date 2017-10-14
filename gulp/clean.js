var gulp = require('gulp');
var clean = require('gulp-clean');
var fileConfig = require('../config/fileConfig.js');

gulp.task('clean', function(){
  return gulp.src(fileConfig.clean.path)
  .pipe(clean());
})
