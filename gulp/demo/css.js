var gulp = require('gulp');
var demoFileConfig = require('../../config/demoFileConfig.js');

gulp.task('build-demo-css', function(cb) {
  return gulp.src(demoFileConfig.css.src)
    .pipe(gulp.dest(demoFileConfig.css.dest));
});

gulp.task('build-demo-font', function(cb) {
  return gulp.src(demoFileConfig.font.src)
    .pipe(gulp.dest(demoFileConfig.font.dest));
});
