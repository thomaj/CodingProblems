
/**
 * Calls the specified function after n milliseconds
 * 
 * @param {Function} f the function to call after the wit time
 * @param {Number} n the number of milliseconds to wait 
 */
const schedule = function (f, n) {
    setTimeout(f, n);
}

module.exports = {
    schedule
}