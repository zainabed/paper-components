var gulp = require('gulp');
var templatecache = require('gulp-angular-templatecache');
var demoFileConfig = require('../../config/demoFileConfig.js');


gulp.task('build-demo-template', function() {
  return gulp.src(demoFileConfig.template.src)
    .pipe(templatecache({
      module: 'paper-component'
    }))
    .pipe(gulp.dest(demoFileConfig.template.dest));
});
