'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concatCss = require('gulp-concat-css');

gulp.task('default', function() {
  gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(uglify())
    .pipe(rename('script.main.min.js'))
    .pipe(gulp.dest('js/'));

    
    return gulp.src('assets/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('out/'));
});




 