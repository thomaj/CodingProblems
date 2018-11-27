
/**
 * Performs the Monte Carlo estimation of pi
 * 
 * @returns {Number} the estimation of pi
 */
const estimatePi = function () {
    const ITERATIONS = 10000;
    let numInCircle = 0;

    let x, y;
    for (var i = 0; i < ITERATIONS; i++) {
        x = (Math.random() * 2) - 1;
        y = (Math.random() * 2) - 1;

        if (Math.pow(x, 2) + Math.pow(y, 2) <= 1) {
            numInCircle++;
        }
    }

    return Number.parseFloat((4 * numInCircle / ITERATIONS).toFixed(3));
}


module.exports = {
    estimatePi
}