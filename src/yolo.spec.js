const assert = require('node:assert');
const { describe, it } = require('node:test');
const { doStuff } = require('./yolo');
const { mock } = require("node:test");
const friends = require('./friends');

mock.method(friends, 'status', async () => {
    return Promise.resolve('fake')
});

describe('yolo', () => {
    it('works with top-level fake', async () => {
        const res = await doStuff();
        assert.equal(res, 'fake');
    });
    it('works with nested fake', async () => {
        mock.method(friends, 'status', async () => {
            return Promise.resolve('nested fake')
        });
        const res = await doStuff();
        assert.equal(res, 'nested fake');
    });
});
