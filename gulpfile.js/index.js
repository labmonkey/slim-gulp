require('./mixins.js');

global.requireDir = require('require-dir');
global.gulp = require('gulp');
global.fs = require('fs');
global.config = loadConfig();
global.$ = require('gulp-load-plugins')({pattern: config.plugins['gulp-load-plugins'].pattern});
global.onError = onErrorCallback;
global.config = loadParams();

requireDir('./tasks');
requireDir('./subtasks');

console.log(global.config);