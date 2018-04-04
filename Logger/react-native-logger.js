const Request = require('superagent');


const url = 'http://192.168.0.1:12201/gelf';

function graylogger(msg) {

    /**
     * timestamp
     * level
     * facility
     * host/device identifier
     * message
     * error object
     * line number/file name
     * environment
     *
     */

    return Request(url)
}
