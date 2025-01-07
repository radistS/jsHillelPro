const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
gulp.task('scripts', function() {
  return gulp.src('./src/*.js')
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', gulp.series('scripts'));
});

