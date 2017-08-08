var gulp = require('gulp');
var demoFileConfig = require('../../config/demoFileConfig.js');

gulp.task('watch-demo', function(cb){
  return gulp.watch(demoFileConfig.script.src,['demo-package']);
});
