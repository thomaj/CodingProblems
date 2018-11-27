
/**
 * Given the number of steps of a stair case, computes the number of ways to climb
 * the staircase when allowed to either climb up 1 or 2 steps at a time.  Returns 
 * this result
 * 
 * @param {Integer} steps the number of steps 
 * @returns {Integer} the number of ways to climb the staircase
 */
const staircase1 = function (steps) {
    let variations = 1;
    if (steps > 1) {
        variations = staircase1(steps - 1) + staircase1(steps - 2);
    }
    return variations;
}

/**
 * Given the number of steps in a stair case and the different size strides you can use,
 * determines the number of different ways to climb the staircase.
 * 
 * @param {Integer} steps the number of steps
 * @param {Integer[]} strides A set of strides you can take
 * @return {Integer} the number of ways to take the stairs with the specified strides
 */
const staircase1_Extension = function (steps, strides) {
    if (steps < 0 || !strides) return 0;

    let variations = 1;
    if (steps > 1) {
        variations = 0;
        strides.forEach(stride => {
            if (stride <= 0) return;
            variations += staircase1_Extension(steps - stride, strides);
        })
    }
    return variations;
}



/**
 * @implements stairCase1
 * NOTE: This uses dynamic programming to cache previously computed results
 */
const staircase2 = function (steps) {
    let cache = {};
    
    // Inner funtion so we can store the cache for all recursive function calls
    let inner = function (steps_inner) {
        let variations = 1;
        if (steps_inner >= 0) {
            if (cache[steps_inner]) {
                variations = cache[steps_inner];
            } else {
                if (steps_inner > 1) {
                    variations = inner(steps_inner - 1) + inner(steps_inner - 2);
                }
                cache[steps_inner] = variations;
            }
        }
        return variations;
    }
    return inner(steps);
}

module.exports = {
    staircase1,
    staircase1_Extension,
    staircase2
}