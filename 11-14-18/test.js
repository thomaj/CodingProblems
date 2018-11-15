const assert = require('assert');
const {products1, products2 } = require('./index');


let sharedTests = function (products) {
    it('should be true', function () {
        assert.equal(true, true);
    });

    it('empty array', function () {
        let result = this.products([]);
        assert.deepEqual(result, []);
    });

    it('one element, not 0', function () {
        let result = this.products([2]);
        assert.deepEqual(result, [undefined]);
    });

    it('one element, 0', function () {
        let result = this.products([0]);
        assert.deepEqual(result, [undefined]);
    });

    it('multiple elements, no zeros', function () {
        let result = this.products([1,2,3]);
        assert.deepEqual(result, [6,3,2]);
    });

    it('multiple elements, one zero', function () {
        let result = this.products([1,0,3]);
        assert.deepEqual(result, [0,3,0]);
    });

    it('multiple elements, two zeros', function () {
        let result = this.products([0,0,3]);
        assert.deepEqual(result, [0,0,0]);
    });

    it('general', function () {
        let result = this.products([1,2,3,4,5]);
        assert.deepEqual(result, [120,60,40,30,24]);
    });

    it('larger, one zero', function () {
        let result = this.products([1,2,3,4,0]);
        assert.deepEqual(result, [0,0,0,0,24]);
    });
}


describe('products', function () {

    describe('#products1()', function () {
        this.beforeEach(function () {
            this.products = products1;
        })
        sharedTests();
    });

    describe('#products2()', function () {
        this.beforeEach(function () {
            this.products = products2;
        })
        sharedTests();
    });
})