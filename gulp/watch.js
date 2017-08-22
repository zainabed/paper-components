var gulp = require('gulp');
var fileConfig = require('../config/fileConfig.js');
var runSequence = require('run-sequence');
var demoFileConfig = require('../config/demoFileConfig.js');

gulp.task('watch', function(cb) {
   gulp.watch(fileConfig.developentSource, ['package']);
   gulp.watch(fileConfig.developentSource, ['build-docs']);

   gulp.watch(demoFileConfig.script.src,['demo-package']);
});
