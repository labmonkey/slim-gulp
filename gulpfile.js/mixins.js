var deepExtend = require('deep-extend');

function onErrorCallback(error) {
    $.notify.onError({
        title: "Error!",
        message: "\r\n<%= error.stack %>",
        sound: "Beep",
        emitError: true
    })(error);
    //$.util.log(error);

    this.emit('end');
}

function loadConfig() {
    var defaultConfig = require('./config');
    var customConfig = fs.existsSync('./gulp.json') ? require('../gulp') : {};

    return deepExtend(defaultConfig, customConfig);
}

function loadParams() {
    return deepExtend(global.config, {"production": !!$.util.env.production});
}

global.onErrorCallback = onErrorCallback;
global.loadConfig = loadConfig;
global.loadParams = loadParams;