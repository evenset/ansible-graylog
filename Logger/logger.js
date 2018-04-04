const winston = require('winston');
var WinstonGraylog2 = require('winston-graylog2');

const options = {
    name: 'testTransport',
    level: 'debug',
    graylog: {
        servers: [{ host: '192.168.20.20', port: 12201 }],
        hostname: 'testwinston',
        facility: 'testwinstonfacility',
        bufferSize: 1350,
    },
    staticMeta: { env: 'test' },
};

const grayLoggerTransport = new(WinstonGraylog2)(options);

const logLevels = {
    emerg: 0,
    alert: 1,
    crit: 3,
    error: 3,
    warn: 4,
    notice: 5,
    info: 6,
    debug: 7,
    test: 8,
};

const logColours = {
    emerg: 'bold underline redBG white',
    alert: 'redBG white',
    crit: 'redBG black',
    error: 'red',
    warn: 'yellow',
    notice: 'blue',
    info: 'green',
    debug: 'grey',
    test: 'white',
};

const logger = winston.createLogger({
    level: 'debug',
    levels: logLevels,
    format: winston.format.json(),
    transports: [
        grayLoggerTransport,
    ],
});

winston.addColors(logColours);

const dev = true;
if (dev) {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.colorize(),
            winston.format.prettyPrint(),
            winston.format.simple()
        ),
        level: 'test',
    }));
}

// This is working!

console.log('Started');
const version = 13;
logger.test('Test'+ version);
logger.debug('Test Debug Message ' + version);
logger.info('Test Default Logger Message ' + version);
logger.notice('notice' + version);
logger.warn('Test Warn Message ' + version);
logger.error('Test Error Message ' + version);
logger.alert('alert'+ version);
logger.emerg('emergercy'+ version);
logger.crit('critical'+ version);


logger.close();
console.log('Done');

