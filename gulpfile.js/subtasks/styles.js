var stylesTask = function () {
    return gulp.src($.path.join(config.path.from, config.globs.css))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.sourcemaps.init())
        .pipe($.include())
        .pipe($.sass({
            includePaths: ['sass'],
            outputStyle: 'compressed'
        }))
        .pipe($.flatten())
        .pipe($.shorthand())
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie 8']
        }))
        .pipe($.cleanCss({
            compatibility: 'ie9'
        }))
        .pipe($.rename({
            extname: '.min.css'
        }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest($.path.join(config.path.to, 'css')));
};

gulp.task('styles', stylesTask);
module.exports = stylesTask;