const gulp = require('gulp')
const sass = require('gulp-sass')
const minify = require('gulp-clean-css')
sass.compiler = require('node-sass')

gulp.task('sass', () => {
	return gulp
		.src('./styles/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./styles'))
})

gulp.task('sass:watch', () => {
	gulp.watch('./styles/sass/**/*.scss', ['sass'])
})

gulp.task('minify-css', () => {
	return gulp
		.src('./styles/*.css')
		.pipe(minify({ compatibility: 'ie8' }))
		.pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
	console.log('Watching Files')
	return gulp.watch('./styles/sass', ['sass'])
})
gulp.task('default', ['sass', 'sass:watch'])
