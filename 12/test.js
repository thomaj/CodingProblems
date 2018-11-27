const expect = require('chai').expect;
const {staircase1, staircase1_Extension, staircase2} = require('./index');

let staircaseTests = function (staircase) {
    it('should handle 0 steps', function () {
        let result = staircase(0);
        expect(result).to.be.a('number');
        expect(result).to.equal(1);
    });

    it('should handle 1 step', function () {
        let result = staircase(1);
        expect(result).to.be.a('number');
        expect(result).to.equal(1);
    });

    it('should handle 2 steps', function () {
        let result = staircase(2);
        expect(result).to.be.a('number');
        expect(result).to.equal(2);
    });

    it('should handle general number of steps', function () {
        let result = staircase(4);
        expect(result).to.be.a('number');
        expect(result).to.equal(5);
    });
}


describe('staircase problems', function() {

    describe('#staircase1', function () {
        staircaseTests(staircase1);
    });

    describe('#staircase2', function () {
        staircaseTests(staircase2);
    });

    describe('#staircase1_Extension', function () {
        it('should handle 0 steps, 1 stride', function () {
            const STRIDES = [1];
            let result = staircase1_Extension(0, STRIDES);
            expect(result).to.be.a('number');
            expect(result).to.equal(1);
        });

        it('should handle 0 steps, 2 strides', function () {
            const STRIDES = [1, 2];
            let result = staircase1_Extension(0, STRIDES);
            expect(result).to.be.a('number');
            expect(result).to.equal(1);
        });

        it('should handle 2 steps, 1 stride', function () {
            const STRIDES = [1];
            let result = staircase1_Extension(2, STRIDES);
            expect(result).to.be.a('number');
            expect(result).to.equal(1);
        });

        it('should handle many steps, 1 stride', function () {
            const STRIDES = [1];
            let result = staircase1_Extension(10, STRIDES);
            expect(result).to.be.a('number');
            expect(result).to.equal(1);
        });
    });
})