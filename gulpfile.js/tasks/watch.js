var watchTask = function () {
    gulp.watch($.path.join(config.path.from, config.globs.css), ['build:styles', $.browserSync.reload]);
    gulp.watch($.path.join(config.path.from, config.globs.js), ['build:scripts', $.browserSync.reload]);
    gulp.watch($.path.join(config.path.from, config.globs.img), ['build:images', $.browserSync.reload]);
    gulp.watch($.path.join(config.path.from, config.globs.svg), ['build:svg', $.browserSync.reload]);
    gulp.watch($.path.join(config.path.from, config.globs.fonts), ['build:fonts', $.browserSync.reload]);
};

gulp.task('watch', ['watch:browser-sync'], watchTask);
module.exports = watchTask;