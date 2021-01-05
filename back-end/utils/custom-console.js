const colors = require('colors');

colors.setTheme({
    debug: 'white',
    info: 'green',
    warn: 'yellow',
    error: 'red'
});

const debug = (text) => {
    console.log(colors.debug(text));
};

const debugFormat = (textFormat, value) => {
    console.log(colors.debug(textFormat, value));
};

const info = (text) => {
    console.log(colors.info(text));
};

const infoFormat = (textFormat, value) => {
    console.log(colors.info(textFormat, value));
};

const warn = (text) => {
    console.log(colors.warn(text));
};

const warnFormat = (textFormat, value) => {
    console.log(colors.warn(textFormat, value));
};

const error = (text) => {
    console.log(colors.error(text));
};

const errorFormat = (textFormat, value) => {
    console.log(colors.error(textFormat, value));
};

module.exports = {
    debug,
    debugFormat,
    info,
    infoFormat,
    warn,
    warnFormat,
    error,
    errorFormat
};
