const expect = require('chai').expect;
const {schedule} = require('./index');

describe('scheduler', function () {
    describe('#schedule', function () {

        it('should call the function', function (done) {
            let called = false;
            let funcToCall = () => { called = true; };
            let result = schedule(funcToCall, 0);
            expect(result).to.be.undefined;

            setTimeout(function () {
                expect(called).to.be.true;
                done();
            }, 200);
        });

        it('should call the function after 500ms', function (done) {
            const WAIT_TIME = 500;
            let calledTime = undefined;
            let funcToCall = () => { calledTime = Date.now() };
            let startTime = Date.now();
            let result = schedule(funcToCall, WAIT_TIME);
            expect(result).to.be.undefined;

            setTimeout(function () {
                expect(calledTime).to.not.be.undefined;
                expect(calledTime - startTime).to.be.greaterThan(WAIT_TIME);
                expect(calledTime - startTime).to.be.lessThan(WAIT_TIME + 10);
                done();
            }, 800);
        });

        it('should keep the same value of this', function (done) {
            const WAIT_TIME = 500;
            let outsideFuncThis = this;
            let insideFuncThis;
            let funcToCall = () => { insideFuncThis = this; };
            let result = schedule(funcToCall, WAIT_TIME);
            expect(result).to.be.undefined;

            setTimeout(function () {
                expect(insideFuncThis).to.not.be.undefined;
                expect(insideFuncThis).to.be.deep.equal(outsideFuncThis);
                done();
            }, 800);
        });

        // it('should keep the same value of this when bound', function (done) {
        //     const WAIT_TIME = 500;
        //     let outsideFuncThis;
        //     let insideFuncThis;
        //     let funcToCall = () => { insideFuncThis = this; };
        //     let result = schedule(funcToCall.bind(outsideFuncThis), WAIT_TIME);
        //     expect(result).to.be.undefined;

        //     setTimeout(function () {
        //         expect(insideFuncThis).to.not.be.undefined;
        //         expect(insideFuncThis).to.be.equal(outsideFuncThis);
        //         done();
        //     }, 800);
        // });
    })
})