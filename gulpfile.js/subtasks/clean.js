var cleanTask = function () {
    return $.del([
        $.path.join(config.path.to, '*')
    ], {force: true});
};

gulp.task('init:clean', cleanTask);
module.exports = cleanTask;