"use strict";

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, errors, prettyPrint } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp} - ${level}]: ${JSON.stringify(message, null, 4)}`;
});

const errorStackFormat = format(info => {
  if (info instanceof Error) {
    return Object.assign({}, info, {
      stack: info.stack,
      message: info.message,
    });
  }
  return info;
});

const logger = createLogger({
  format: combine(
    errors({ stack: true }),
    format.colorize(),
    timestamp(),
    prettyPrint(),
    myFormat
  ),
  transports: [new transports.Console()],
});

logger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = { logger };
