const expect = require('chai').expect;
const {findMissingInteger1} = require('./index');

describe('lowest missing positive integer', function () {
    describe('findMissingInteger1', function () {

        it('empty case', function () {
            let result = findMissingInteger1([]);
            expect(result).to.equal(1);
        })

        it('should handle standard case small', function () {
            let result = findMissingInteger1([3, 4, -1, 1]);
            expect(result).to.equal(2);
        })

        it('should handle standard case large', function () {
            let result = findMissingInteger1([10, 3, 15, 1, 8, 2, 4]);
            expect(result).to.equal(5);
        })


        it('length of one and result is not 1', function () {
            let result = findMissingInteger1([1]);
            expect(result).to.equal(2);
        });

        it('length of one and result is 1', function () {
            let result = findMissingInteger1([2]);
            expect(result).to.equal(1);
        });

        it('length of one and negative number', function () {
            let result = findMissingInteger1([-10]);
            expect(result).to.equal(1);
        });

        it('duplicates in array', function () {
            let result = findMissingInteger1([20, 30, 30, 30, 1]);
            expect(result).to.equal(2);
        });

        it('array is sorted in order', function () {
            let result = findMissingInteger1([1, 2, 3, 4, 5, 6, 7, 8]);
            expect(result).to.equal(9);
        });

        it('array is reverse sorted order', function () {
            let result = findMissingInteger1([8, 7, 6, 5, 4, 3, 2, 1]);
            expect(result).to.equal(9);
        });

    })
})