var skeletonTask = function () {
    if(!fs.existsSync(config.path.from)) {
        return gulp.src(['./gulpfile.js/skeleton/**/*'])
            .pipe($.plumber({errorHandler: onError}))
            .pipe(gulp.dest(config.path.from));
    }
};

gulp.task('skeleton', skeletonTask);
module.exports = skeletonTask;