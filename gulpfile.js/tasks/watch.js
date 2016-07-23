var watchTask = function () {
    gulp.watch($.path.join(config.path.from, config.globs.css), ['styles', $.browserSync.reload]);
    gulp.watch($.path.join(config.path.from, config.globs.js), ['scripts', $.browserSync.reload]);
    gulp.watch($.path.join(config.path.from, config.globs.img), ['images', $.browserSync.reload]);
    gulp.watch($.path.join(config.path.from, config.globs.svg), ['svg', $.browserSync.reload]);
    gulp.watch($.path.join(config.path.from, config.globs.fonts), ['fonts', $.browserSync.reload]);
};

gulp.task('watch', ['browser-sync'], watchTask);
module.exports = watchTask;