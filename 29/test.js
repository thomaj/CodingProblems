const expect = require('chai').expect;
const {encode, decode} = require('./index');

describe('Run-length Encoding and Decoding', function () {
    describe('#encode', function () {

        it('should return a string', function () {
            const str = 'AA';
            const result = encode(str);
            expect(result).to.be.a('String');
        });

        it('should handle empty string', function () {
            const str = '';
            const result = encode(str);
            expect(result).to.equal('');
        });

        it('should handle standard string', function () {
            const str = 'AAAABBBCCDAA';
            const result = encode(str);
            expect(result).to.equal('4A3B2C1D2A');
        });
    });


    describe('#decode', function () {

        it('should return a string', function () {
            const str = '2A';
            const result = decode(str);
            expect(result).to.be.a('String');
        });

        it('should handle empty string', function () {
            const str = '';
            const result = decode(str);
            expect(result).to.equal('');
        });

        it('should handle standard string', function () {
            const str = '4A3B2C1D2A';
            const result = decode(str);
            expect(result).to.equal('AAAABBBCCDAA');
        });
    });
});
