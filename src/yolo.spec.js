const assert = require('node:assert');
const { describe, it } = require('node:test');
const { doStuff } = require('./yolo');

describe('yolo', () => {
    it('works', async () => {
        const res = await doStuff();
        assert.equal(res, 'it\'s complicated');
    });
});
