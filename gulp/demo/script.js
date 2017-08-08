var gulp = require('gulp');
var concat = require('gulp-concat');
var demoFileConfig = require('../../config/demoFileConfig.js');


gulp.task('build-demo-script', funciton() {
  return gulp.src(demoFileConfig.script.src)
    .pipe(concat())
    .pipe(gulp.dest(demoFileConfig.script.dest));
});
