'use strict';

const friends = require('./friends');

const doStuff = async () => {
    return await friends.status()
}

module.exports = {
    doStuff,
}
