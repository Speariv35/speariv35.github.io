'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
 
gulp.task('img', () => {
  gulp.src('img/src/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('img/'));
});

gulp.task('css', function () {
gulp.src('css/src/*.css')
.pipe(concatCss("style.main.min.css"))
.pipe(minifyCss({compatibility: 'ie8'}))
.pipe(gulp.dest('css/'));
});

gulp.task('js', function() {
  gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(uglify())
    .pipe(rename('script.main.min.js'))
    .pipe(gulp.dest('js/'));
});

// Default
gulp.task('default', [ 'css','js', 'img']);

 