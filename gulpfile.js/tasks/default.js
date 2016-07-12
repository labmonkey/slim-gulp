var defaultTask = function (cb) {
    $.sequence(['skeleton'], ['clean'], ['build'])(cb);
};

gulp.task('default', defaultTask);