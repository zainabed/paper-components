/*const webpack = require('gulp-webpack');
const gulp = require('gulp');
const path = require('path');

gulp.task('webpack', () => {
	return gulp.src('webpack.config.js')
		.pipe(webpack({
			  context: path.resolve(__dirname, '../src'),
			  entry: {
			 //   button: 'src/main/js/component/button/button.js',
			    icon: './main/js/component/icon/PaperIcon.js'
			  }
		}))
		.pipe(gulp.dest('dist'));
});*/