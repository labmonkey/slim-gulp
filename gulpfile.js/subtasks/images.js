var imagesTask = function () {
    return gulp.src($.path.join(config.path.from, config.globs.img))
        .pipe($.plumber({errorHandler: onError}))
        .pipe($.changed($.path.join(config.path.to, 'img')))
        .pipe($.imagemin({
            progressive: true,
            optimizationLevel: 3,
            use: [$.imageminPngquant()]
        }))
        .pipe(gulp.dest($.path.join(config.path.to, 'img')))
        .pipe($.browserSync.stream());
};

gulp.task('images', imagesTask);
module.exports = imagesTask;