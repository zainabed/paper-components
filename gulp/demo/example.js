var gulp = require('gulp');
var demoFileConfig = require('../../config/demoFileConfig.js');

gulp.task('build-examples', function(){
  return gulp.src(demoFileConfig.example.src)
    .pipe(gulp.dest(demoFileConfig.example.dest));
});
