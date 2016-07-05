var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('sass/demo.sass')
    .pipe(sass({
      includePaths: [
        'bower_components/foundation-sites/assets'
      ]}
    ))
    .pipe(gulp.dest('demo/css'))
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('demo/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('copy:jquery', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
  ])
    .pipe(gulp.dest('demo/js'));
});

gulp.task('copy:fancybox', function() {
  return gulp.src([
    'bower_components/fancybox/source/*.+(gif|png)',
    'bower_components/fancybox/source/jquery.fancybox.js',
    'bower_components/fancybox/source/jquery.fancybox.css',
    'bower_components/fancybox/source/helpers/jquery.fancybox-media.js',
  ])
    .pipe(gulp.dest('demo/fancybox'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'demo'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('sass/**/*.sass', ['sass']);
  gulp.watch('demo/*.html', browserSync.reload);
});

gulp.task('build', ['sass', 'copy:jquery', 'copy:fancybox']);
gulp.task('default', ['build', 'watch']);

