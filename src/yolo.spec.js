const assert = require('node:assert');
const { describe, it } = require('node:test');
const { doStuff } = require('./yolo');

describe('yolo', () => {
    it('works', () => {
        const res = doStuff();
        assert.equal(res, 'Hello');
    });
});
