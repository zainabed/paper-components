var gulp = require('gulp');
var Dgeni = require('dgeni');
var runSequence = require('run-sequence');

gulp.task('process-docs', function(cb) {
	var dgeni = new Dgeni([require('../docs/config')]);
	return dgeni.generate();
});

gulp.task('build-docs', function(cb){
	return runSequence(
 		'process-docs',
 		cb
	);
});
