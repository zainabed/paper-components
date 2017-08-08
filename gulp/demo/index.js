var gulp = require('gulp');
var inject = require('gulp-inject');
var filesort = require('gulp-angular-filesort');
var demoFileConfig = require('../../config/demoFileConfig.js');


gulp.task('build-demo-index', function() {
  var index = gulp.src(demoFileConfig.index.src);
  var resource = gulp.src(demoFileConfig.index.resource);
  return index.pipe(inject(resource,{
    ignorePath: ['target']
  }))
    .pipe(gulp.dest(demoFileConfig.index.dest));
});
