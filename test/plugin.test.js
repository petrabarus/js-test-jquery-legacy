let expect = require('chai').expect;
let path = require('path');
let $ = require('jquery');

require('../src/plugin.js');

describe('plugin', () => {
    it('should return okay', () => {
        expect(true).to.be.true;
    });
});
