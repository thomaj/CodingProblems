const expect = require('chai').expect;
const { Node, serialize, deserialize} = require('./index');

describe('binary tree', function () {

    describe('serialize', function () {
        it('handles normal case', function () {
            let root = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
            let result = serialize(root);
            expect(result).to.be.a('string');
            expect(result).to.equal('root(left(left.left()())())(right()())');
        });

        
        it('handles single node', function () {
            let root = new Node('root')
            let result = serialize(root);
            expect(result).to.be.a('string');
            expect(result).to.equal('root()()');
        });

        it('handles empty', function () {
            let root = undefined
            let result = serialize(root);
            expect(result).to.be.a('string');
            expect(result).to.equal('');
        });
    })


    describe('deserialize', function () {
        it('handles normal case', function () {
            let strRep = 'root(left(left.left()())())(right()())';
            let result = deserialize(strRep);
            expect(result).to.be.a('object');
            expect(result.val).to.equal('root');
            expect(result.right.val).to.equal('right');
        })

        it('handles single root', function () {
            let strRep = 'root()()';
            let result = deserialize(strRep);
            expect(result).to.be.a('object');
            expect(result.val).to.equal('root');
            expect(result.left).to.be.undefined;
            expect(result.right).to.be.undefined;
        });

        it('handles empty string', function () {
            let strRep = '';
            let result = deserialize(strRep);
            expect(result).to.be.undefined;
        });
    });

    
    describe('serialize and deserialize', function () {
        it('handles normal case', function () {
            let root = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
            let result = deserialize(serialize(root));
            expect(result).to.be.a('object');
            expect(result.val).to.equal('root');
            expect(result.left.left.val).to.equal('left.left');
        });

        it('handles single node ', function () {
            let root = new Node('root');
            let result = deserialize(serialize(root));
            expect(result).to.be.a('object');
            expect(result.val).to.equal('root');
            expect(result.left).to.be.undefined;
        });
    })
    
}) 