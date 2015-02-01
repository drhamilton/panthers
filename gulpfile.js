var gulp = require('gulp'),
		sass = require('gulp-sass'),
		watch = require('gulp-watch'),
		livereload = require('gulp-livereload');

gulp.task('sass', function(){
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(livereload());
});


gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);