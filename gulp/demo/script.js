var gulp = require('gulp');
var concat = require('gulp-concat');
var filesort = require('gulp-angular-filesort');
var demoFileConfig = require('../../config/demoFileConfig.js');


gulp.task('build-demo-script', function() {
  return gulp.src(demoFileConfig.script.src)
    .pipe(filesort())
    .pipe(concat('demo-script.js'))
    .pipe(gulp.dest(demoFileConfig.script.dest));
});


gulp.task('build-demo-script-lib', function() {
  return gulp.src(demoFileConfig.script.lib)
    .pipe(concat('demo-lib-script.js'))
    .pipe(gulp.dest(demoFileConfig.script.dest));
});
