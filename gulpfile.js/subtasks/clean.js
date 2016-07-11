var cleanTask = function () {
    return $.del([
        $.path.join(config.path.to, 'css/*'),
        $.path.join(config.path.to, 'js/*'),
        $.path.join(config.path.to, 'fonts/*'),
        $.path.join(config.path.to, 'img/*'),
        $.path.join(config.path.to, 'svg/*')
    ], {force: true});
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;