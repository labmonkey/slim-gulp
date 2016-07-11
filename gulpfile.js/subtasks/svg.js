gulp.task('svg:png', function () {
    return gulp.src($.path.join(config.path.from, config.globs.svg))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.changed($.path.join(config.path.to, 'img', 'fallback')))
        .pipe($.svg2png())
        .pipe(gulp.dest($.path.join(config.path.to, 'img', 'fallback')));
});

gulp.task('svg:minify', function () {
    return gulp.src($.path.join(config.path.from, config.globs.svg))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.changed($.path.join(config.path.to, 'svg')))
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [
                {removeViewBox: false}
            ],
            use: [$.imagemin.svgo()]
        }))
        .pipe(gulp.dest($.path.join(config.path.to, 'svg')));
});

var svgTask = function (cb) {
    $.sequence(['svg:minify'], ['svg:png'])(cb);
};

gulp.task('svg', svgTask);
module.exports = svgTask;