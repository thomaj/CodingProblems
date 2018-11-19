/**
 * @summary
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
 * Given this implementation of cons:
 *
 * def cons(a, b):
 *   def pair(f):
 *     return f(a, b)
 *   return pair
 *
 * Implement car and cdr.
 */


/**
 * Combines two elements together to create a Pair
 * 
 * @param {Object} a the first element of the pair
 * @param {Object} b the second element of the pair
 * @returns {Function} a function to be used to get each element of the Pair
 */
const cons = function (a, b) {
    return function (f) {
        return f(a,b);
    }
}


/**
 * Returns the first element in the pair
 * 
 * @param {Function} pair the pair
 * @returns {Object} the last element of the pair
 */
const car = function (pair) {
    return pair((a, b) => a);
}

/**
 * Returns the last element of the pair
 * 
 * @param {Function} pair the pair
 * @returns {Object} the last element of the pair
 */
const cdr = function (pair) {
    return pair((a, b) => b);
}


module.exports = {
    cons,
    car,
    cdr
}