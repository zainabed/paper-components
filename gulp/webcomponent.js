var gulp = require('gulp');
var fileConfig = require('../config/fileConfig.js');
var component = require('./component.js');

gulp.task('build-component', function(){
  return gulp.src(fileConfig.component.srcTemplate)
  .pipe(component());
})
