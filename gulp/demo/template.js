var gulp = require('gulp');
var templatecache = require('gulp-angular-templatecache');
var demoFileConfig = require('../../config/demoFileConfig.js');


gulp.task('build-demo-template', funciton() {
  return gulp.src(demoFileConfig.template.src)
    .pipe(templatecache())
    .pipe(gulp.dest(demoFileConfig.template.dest));
});
