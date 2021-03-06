var skeletonTask = function () {
    if(config.skeleton && !fs.existsSync(config.path.from)) {
        return gulp.src(['./gulpfile.js/skeleton/**/*'])
            .pipe($.plumber({errorHandler: onError}))
            .pipe(gulp.dest(config.path.from));
    }
};

gulp.task('init:skeleton', skeletonTask);
module.exports = skeletonTask;