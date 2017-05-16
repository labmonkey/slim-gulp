var initTask = function (cb) {
    $.sequence(['init:skeleton'], ['init:clean'], ['build'])(cb);
};

gulp.task('init', initTask);