'use strict';

var winston = require('winston');

winston.emitErrs = true;

module.exports = function(config) {
    if (config == null) {
        config = {logDir: '.'};
    }

    if (config.logDir == null)
        config.logDir = '.';

    if (config.fileName == null)
        config.fileName = 'logger.log';

    var logTransport = [
        new winston.transports.File({
            level: 'debug',
            filename: config.logDir + '/' + config.fileName,
            handleExceptions: true,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: true
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ];

    var logger = new winston.Logger({
        transports: logTransport,
        exitOnError: false
    });

    return logger;
};
