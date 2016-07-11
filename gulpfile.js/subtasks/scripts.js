gulp.task('scripts:app', function () {
    return gulp.src($.path.join(config.path.from, config.globs.js))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.include())
        .pipe($.concat('app.js'))
        .pipe($.uglify())
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest($.path.join(config.path.to, 'js')));
});

gulp.task('scripts:bower', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.include())
        .pipe($.concat('libs.js'))
        .pipe($.uglify())
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest($.path.join(config.path.to, 'js')));
});

var scriptsTask = function (cb) {
    $.sequence(['scripts:bower'], ['scripts:app'])(cb);
};

gulp.task('scripts', scriptsTask);
module.exports = scriptsTask;