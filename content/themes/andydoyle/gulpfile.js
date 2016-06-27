var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    zip = require('gulp-zip');;
	
gulp.task('bundle-minify-js', function () {
  return gulp.src(['assets/js/*.js', '!assets/js/app.min.js'])
    .pipe(uglify())
	.pipe(concat('app.min.js'))
    .pipe(gulp.dest('assets/js'))
});

gulp.task('styles-build', function() {
  return gulp.src(['assets/css/*.css', '!assets/css/main.min.css'])
	.pipe(cssmin())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('assets/css'));
})

gulp.task('zip', function() {
   return gulp.src(['./**/*', '!node_modules/**/*', '!dist/**/*', '!gulpfile.js', '!package.json'])
    .pipe(zip('codesmart.zip'))
    .pipe(gulp.dest('dist')); 
});

gulp.task('default', ['bundle-minify-js', 'styles-build', 'zip']);