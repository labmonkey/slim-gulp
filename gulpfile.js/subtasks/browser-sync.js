var browserSyncTask = function () {
    if (config.server) {
        var options = {
            server: {
                ui: false,
                baseDir: config.path.to,
                directory: true
            }
        };
        if (typeof(config.server) === 'string') {
            options = {
                files: [
                    $.path.join(config.path.to, 'css/*.css'),
                    $.path.join(config.path.to, 'js/*.js')
                ],
                ui: false,
                proxy: config.server,
                serveStatic: ['.', config.path.to],
                open: 'external'
            };
        }

        return $.browserSync.init(options);
    }
    return true;
};

gulp.task('browser-sync', browserSyncTask);
module.exports = browserSyncTask;