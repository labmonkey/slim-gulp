gulp.task('build:scripts:app', function () {
    return gulp.src($.path.join(config.path.from, config.globs.js))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.include())
        .pipe($.concat('app.js'))
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest($.path.join(config.path.to, 'js')))
        .pipe($.browserSync.stream());
});

gulp.task('build:scripts:bower', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.include())
        .pipe($.concat('libs.js'))
        .pipe(config.production ? $.uglify() : $.util.noop())
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest($.path.join(config.path.to, 'js')))
        .pipe($.browserSync.stream());
});

var scriptsTask = function (cb) {
    $.sequence(['build:scripts:bower'], ['build:scripts:app'])(cb);
};

gulp.task('build:scripts', scriptsTask);
module.exports = scriptsTask;