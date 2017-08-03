var gulp = require('gulp');
var fileConfig = require('../config/fileConfig.js');

gulp.task('watch', function(cb){
  return gulp.watch(fileConfig.developentSource,['package']);
});
