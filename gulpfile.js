
const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('html', function () {
    gulp.src('example/**/*.html')
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch('example/**/*.html', ['html']);
    gulp.watch('example/**/*.js', ['html']);
});

gulp.task('default', ['html', 'watch', 'connect']);