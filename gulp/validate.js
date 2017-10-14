var gulp = require('gulp');
var eslint = require('gulp-eslint');
var fileConfig = require('../config/fileConfig.js');

gulp.task('validate', function(){
	console.log(fileConfig.component.srcTemplate);
	return gulp.src(fileConfig.component.srcTemplate)
		.pipe(eslint())
		.pipe(eslint.format())
        .pipe(eslint.failAfterError());
});