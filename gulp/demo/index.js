var gulp = require('gulp');
var inject = require('gulp-inject');
var demoFileConfig = require('../../config/demoFileConfig.js');


gulp.task('build-demo-index', funciton() {
  var index = gulp.src(demoFileConfig.index.src);
  var resource = gulp.src(demoFileConfig.index.resource);
  return index.pipe(inject(resource))
    .pipe(gulp.dest(demoFileConfig.index.dest));
});
