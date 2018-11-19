const expect = require('chai').expect;
const {decodeWays1} = require('./index');

let sharedTests = function () {
    it('should handle empty string', function () {
        let result = this.func('');
        console.log(result);
        expect(result).to.be.a('number');
        expect(result).to.equal(1);
    });

    it('should handle 1', function () {
        let result = this.func('1');
        expect(result).to.be.a('number');
        expect(result).to.equal(1);
    });

    it('should handle 111', function () {
        let result = this.func('111');
        expect(result).to.be.a('number');
        expect(result).to.equal(3);
    });

    it('should handle 1111', function () {
        let result = this.func('1111');
        expect(result).to.be.a('number');
        expect(result).to.equal(5);
    });

    it('should handle 181', function () {
        let result = this.func('181');
        expect(result).to.be.a('number');
        expect(result).to.equal(2);
    });
}

describe('decodeWays', function () {
    describe('#decodeWays1', function () {
        this.beforeAll(function () {
            this.func = decodeWays1;
        });
        sharedTests();
    })
})