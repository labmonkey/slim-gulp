var cleanTask = function () {
    return $.del([
        $.path.join(config.path.to, '*')
    ], {force: true});
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;