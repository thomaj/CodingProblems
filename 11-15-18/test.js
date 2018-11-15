const expect = require('chai').expect;
const { Node, serialize } = require('./index');

describe('binary tree', function () {

    describe('serialize', function () {
        it('handles normal case', function () {
            let root = new Node('root', new Node('left', new Node('left.left')), new Node('right'))
            let result = serialize(root);
            expect(result).to.be.a('string');
            expect(result).to.equal('root(left(left.left()())())(right()())');
        });

        
        it('handles sing node', function () {
            let root = new Node('root')
            let result = serialize(root);
            expect(result).to.be.a('string');
            expect(result).to.equal('root()()');
        });
    })
}) 