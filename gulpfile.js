var gulp = require('gulp'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');
    gutil = require('gulp-util');

gulp.task('del', function() {

    del('dist');
});

gulp.task('default', ['del'], function() {

    gulp.src(['src/**/*.js'])
    // .pipe(uglify({
    //     mangle:true,
    //     compress: true
    // }))
    .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    // .pipe(concat('index.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))

    //cb(); //cb() 为任务函数提供的回调 用来通知该任务已经完成
});