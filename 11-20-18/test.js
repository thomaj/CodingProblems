const expect = require('chai').expect;
const {Node, univalTreeCount} = require('./index');

describe('Count Unival Trees', function () {
    describe('univalTreesCount', function () {
        it('should handle single node tree', function () {
            let tree = new Node(1);
            let result = univalTreeCount(tree);
            expect(result).to.be.a('number');
            expect(result).that.equal(1);
        });

        it('should handle one left child unival', function () {
            let tree = new Node(1, new Node(1));
            let result = univalTreeCount(tree);
            expect(result).to.be.a('number');
            expect(result).that.equal(2);
        });

        it('should handle one left child not unival', function () {
            let tree = new Node(1, new Node(2));
            let result = univalTreeCount(tree);
            expect(result).to.be.a('number');
            expect(result).that.equal(1);
        });

        it('should handle one right child unival', function () {
            let tree = new Node(1, undefined, new Node(1));
            let result = univalTreeCount(tree);
            expect(result).to.be.a('number');
            expect(result).that.equal(2);
        });

        it('should handle one right child not unival', function () {
            let tree = new Node(1, undefined, new Node(2));
            let result = univalTreeCount(tree);
            expect(result).to.be.a('number');
            expect(result).that.equal(1);
        });

        it('should handle both children unival', function () {
            let tree = new Node(1, new Node(1), new Node(1));
            let result = univalTreeCount(tree);
            expect(result).to.be.a('number');
            expect(result).that.equal(3);
        });

        it('should handle both children not unival', function () {
            let tree = new Node(1, new Node(2), new Node(2));
            let result = univalTreeCount(tree);
            expect(result).to.be.a('number');
            expect(result).that.equal(2);
        });

        it('should handle general', function () {
            let tree = new Node(0, new Node(1), new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0)));
            let result = univalTreeCount(tree);
            expect(result).to.be.a('number');
            expect(result).that.equal(5);
        });
    })
})