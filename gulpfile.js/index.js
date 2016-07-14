var requireDir = require('require-dir');

global.gulp = require('gulp');
global.fs = require('fs');
global.config = Object.assign(require('./config'), fs.existsSync('./gulp.json') ? require('../gulp') : {});
global.$ = require('gulp-load-plugins')({pattern: config.plugins['gulp-load-plugins'].pattern});
global.onError = function (error) {
    $.notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        sound: "Beep"
    })(error);

    $.util.log(error);

    this.emit('end');
};

requireDir('./tasks');
requireDir('./subtasks');