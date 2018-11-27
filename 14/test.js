const expect = require('chai').expect;
const { estimatePi } = require('./index');

describe('Esitmate Pi', function () {

    describe('#estimatePi', function () {
        it('should be about pi', function () {
            let result = estimatePi();
            expect(result).to.be.a('number');
            expect(result).to.be.greaterThan(3.1);
            expect(result).to.be.lessThan(3.2);
        });

        it('should have 3 significant digits', function () {
            let result = estimatePi();
            expect(result).to.be.a('number');

            let numSigFigs = result.toString().length - result.toString().indexOf('.') - 1;
            expect(numSigFigs).to.equal(3);
        });
    })
})