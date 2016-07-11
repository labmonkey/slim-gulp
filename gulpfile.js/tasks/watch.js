var watchTask = function () {
    gulp.watch($.path.join(config.path.from, config.globs.css), ['styles']);
    gulp.watch($.path.join(config.path.from, config.globs.js), ['scripts']);
    gulp.watch($.path.join(config.path.from, config.globs.img), ['images']);
    gulp.watch($.path.join(config.path.from, config.globs.svg), ['svg']);
    gulp.watch($.path.join(config.path.from, config.globs.fonts), ['fonts']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;