var gulp = require('gulp');
var webpack = require('webpack-stream');
var rename = require("gulp-rename");

gulp.task('compile', function () {
    return gulp.src('src/app.js')
        .pipe(webpack({
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel' }
                ]
            }
        }))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy', function () {
    gulp.src('./src/views/*')
        .pipe(gulp.dest('./build/views'));

    gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('default', ['compile', 'copy']);
