var defaultTask = function (cb) {
    $.sequence(['clean'], ['build'])(cb);
};

gulp.task('default', defaultTask);