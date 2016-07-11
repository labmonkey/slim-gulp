var fontsTask = function () {
    return gulp.src($.path.join(config.path.from, config.globs.fonts))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.changed($.path.join(config.path.to, 'fonts')))
        .pipe(gulp.dest($.path.join(config.path.to, 'fonts')));
};

gulp.task('fonts', fontsTask);
module.exports = fontsTask;