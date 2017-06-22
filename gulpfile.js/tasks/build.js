var buildTask = function (cb) {
    $.sequence(['build:styles', 'build:scripts', 'build:fonts'], ['build:images', 'build:svg'])(cb);
};

gulp.task('build', buildTask);