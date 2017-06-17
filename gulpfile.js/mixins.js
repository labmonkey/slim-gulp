var deepExtend = require('deep-extend');

function onErrorCallback(error) {
    $.notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        sound: "Beep"
    })(error);

    $.util.log(error);

    this.emit('end');
}

function getConfig() {
    var defaultConfig = require('./config');
    var customConfig = fs.existsSync('./gulp.json') ? require('../gulp') : {};

    return deepExtend(defaultConfig, customConfig);
}

global.onError = onErrorCallback;
global.getConfig = getConfig;