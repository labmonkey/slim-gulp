var defaultTask = function (cb) {
    $.sequence(['init:skeleton'], ['init:clean'], ['build'])(cb);
};

gulp.task('default', defaultTask);