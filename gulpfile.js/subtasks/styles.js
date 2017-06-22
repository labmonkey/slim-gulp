var stylesTask = function () {
    return gulp.src($.path.join(config.path.from, config.globs.css))
        .pipe($.plumber({errorHandler: onError}))
        .pipe(!config.production ? $.sourcemaps.init() : $.uril.noop())
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
        .pipe(config.production ? $.cleanCss({
            compatibility: 'ie9',
            processImport: false
        }) : $.util.noop())
        .pipe($.rename({
            extname: '.min.css'
        }))
        .pipe(!config.production ? $.sourcemaps.write('.') : $.util.noop())
        .pipe(gulp.dest($.path.join(config.path.to, 'css')))
        .pipe($.browserSync.stream());
};

gulp.task('styles', stylesTask);
module.exports = stylesTask;