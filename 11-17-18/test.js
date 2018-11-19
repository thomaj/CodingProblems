const expect = require('chai').expect;
const {cons, car, cdr} = require('./index');


describe('Pair', function () {
    describe('#cons', function () {
        it('should create a pair function', function () {
            let result = cons('first', 'last');
            expect(result).to.be.a('function');
        })
    })

    describe('#car', function () {
        it('should return the first element in pair', function () {
            let result = car(cons('first', 'last'));
            expect(result).to.be.a('string');
            expect(result).to.equal('first');
        });

        it('should return the first element in pair - nested', function () {
            let result = car(cons('first', cons('second', 'last')));
            expect(result).to.be.a('string');
            expect(result).to.equal('first');
        });
    });

    describe('#cdr', function () {
        it('should return the last element in pair', function () {
            let result = cdr(cons('first', 'last'));
            expect(result).to.be.a('string');
            expect(result).to.equal('last');
        });

        it('should return the last element in pair - nested', function () {
            let result = cdr(cdr(cons('first', cons('second', 'last'))));
            expect(result).to.be.a('string');
            expect(result).to.equal('last');
        })
    });
})