require('./mixins.js');

global.requireDir = require('require-dir');
global.gulp = require('gulp');
global.fs = require('fs');
global.config = getConfig();
global.$ = require('gulp-load-plugins')({pattern: config.plugins['gulp-load-plugins'].pattern});

requireDir('./tasks');
requireDir('./subtasks');