/*jslint white: true, nomen: true */
(function () {

    var gulp = require('gulp');
    var rename = require('gulp-rename');
    //var closureCompiler = require('gulp-closure-compiler');
    //var minify = require('gulp-minify');
    var uglify = require("gulp-uglify");
    var clean = require('gulp-clean');
    var cssBase64 = require('gulp-css-base64');
    var tinypng = require('gulp-tinypng');
    // gulp - run 'default' task
    // gulp <task> <othertask>.

    gulp.task('default', function() { // ae
        gulp.run('uglify-js', 'clean');
    });

    gulp.task('default+css', function() { // book
        gulp.run('uglify-js', 'css-base64', 'clean');
    });

    gulp.task('uglify-js', function() {

        return gulp.src('www/js/*.js')
            //.pipe(closureCompiler({
            //    compilerPath: 'bower_components/closure-compiler/compiler.jar',
            //    fileName: 'www/js/all.min.js'
            //}))
            //.pipe(minify())
            .pipe(uglify())
            .pipe(rename('all.min.js'))
            .pipe(gulp.dest('./www/js'));

    });

    gulp.task('css-base64', function() {

        return gulp.src('www/css/main.css')
            .pipe(cssBase64())
            .pipe(gulp.dest('./www/css'));

	});

    gulp.task('clean', function() {

        return gulp.src('www/js/all.js')
            .pipe(clean({force: true}));

	});

    gulp.task('tiny-png', function () {
        gulp.src('tinypng/**/*.png')
            .pipe(tinypng('uY9x_ytUQ0sq9-bB8iTvwGnmiWVci4an')) // web.best.master
            //.pipe(tinypng('RmSQIT1W2KC2_gZf27_KaZ7GWIzpmKJu')) // ae.fan.game 234 * 2 = 468
            .pipe(gulp.dest('dist'));
    });

}());