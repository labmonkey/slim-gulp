var defaultTask = function (cb) {
    $.util.log("Use any of the following tasks:");
    return $.taskListing(cb);
};

gulp.task('default', defaultTask);