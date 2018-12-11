const expect = require('chai').expect;
const {wellFormedBrackets} = require('./index');

describe('Brackets well formed', function () {
    describe('#wellFormedBrackets', function () {

        it('should return boolean', function () {
            const str = '()';
            const result = wellFormedBrackets(str);
            expect(result).to.be.a('Boolean');
        });

        it('should handle empty string', function () {
            const str = '';
            const result = wellFormedBrackets(str);
            expect(result).to.be.true;
        });

        it('should handle round brackets balanced', function () {
            const str = '()';
            const result = wellFormedBrackets(str);
            expect(result).to.be.true;
        });

        it('should handle round brackets unbalanced', function () {
            const str = '(';
            const result = wellFormedBrackets(str);
            expect(result).to.be.false;
        });

        it('should handle curly brackets balanced', function () {
            const str = '{}';
            const result = wellFormedBrackets(str);
            expect(result).to.be.true;
        });

        it('should handle curly brackets unbalanced', function () {
            const str = '{';
            const result = wellFormedBrackets(str);
            expect(result).to.be.false;
        });

        it('should handle square brackets balanced', function () {
            const str = '[]';
            const result = wellFormedBrackets(str);
            expect(result).to.be.true;
        });

        it('should handle square brackets unbalanced', function () {
            const str = '[';
            const result = wellFormedBrackets(str);
            expect(result).to.be.false;
        });

        it('should handle combination balanced', function () {
            const str = '[[{{(())]]}}';
            const result = wellFormedBrackets(str);
            expect(result).to.be.true;
        });

        it('should handle combination unbalanced', function () {
            const str = '[[{())))}';
            const result = wellFormedBrackets(str);
            expect(result).to.be.false;
        });
    })
})
