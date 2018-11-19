const expect = require('chai').expect;
const {sumTo1, sumTo2 } = require('./index');


let sharedTests = function () {

    it('empty', function () {
        let result = this.func([], 10);
        expect(result).to.be.a('boolean');
        expect(result).to.be.false;
    });

    it('one element in array', function () {
        let result = this.func([8], 10);
        expect(result).to.be.a('boolean');
        expect(result).to.be.false;
    });

    it('sum exists in array', function () {
        let result = this.func([10, 15, 3, 7], 17);
        expect(result).to.be.a('boolean');
        expect(result).to.be.true;
    });

    it('sum exists in array', function () {
        let result = this.func([10, 15, 3, 7], 25);
        expect(result).to.be.a('boolean');
        expect(result).to.be.true;
    });

    it('sum does not exist in array', function () {
        let result = this.func([10, 15, 3, 7], 100);
        expect(result).to.be.a('boolean');
        expect(result).to.be.false;
    });

    it('number exists in array but sum does not', function () {
        let result = this.func([10, 15, 3, 7], 7);
        expect(result).to.be.a('boolean');
        expect(result).to.be.false;
    });

    it('all numbers are the same', function () {
        let result = this.func([10, 10], 10);
        expect(result).to.be.a('boolean');
        expect(result).to.be.false;
    });


}


describe('sumTo', function () {

    describe('#sumTo1()', function () {
        this.beforeEach(function () {
            this.func = sumTo1;
        })
        sharedTests();
    });

    describe('#sumTo2()', function () {
        this.beforeEach(function () {
            this.func = sumTo2;
        })
        sharedTests();
    });
})