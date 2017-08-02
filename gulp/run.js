var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fileConfig = require('../config/fileConfig.js');

gulp.task('run', function() {
  return gulp.src(fileConfig.build.src)
    .pipe(webserver({
      host: '127.0.0.1',
      port: 8083,
      livereload: true,
    
    }));
});
