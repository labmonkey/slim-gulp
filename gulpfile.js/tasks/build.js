var buildTask = function (cb) {
    $.sequence(['styles', 'scripts', 'fonts'], ['images', 'svg'])(cb);
};

gulp.task('build', buildTask);