const fs = require('fs');
const mkdirp = require('mkdirp');

const fileSizeLimit = 10485760;
const allowedMimeType = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/bmp',
    'image/webp'
];

const checkDirectorySync = (directory) => {
    try {
        fs.statSync(directory);
    } catch (e) {
        try {
            fs.mkdirSync(directory);
        } catch (err) {
            mkdirp.sync(directory);// error : directory & sub directories to be newly created
        }
    }
};

module.exports = {
    fileSizeLimit,
    allowedMimeType,
    checkDirectorySync
};
