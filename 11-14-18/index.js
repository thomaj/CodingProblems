/**
 * @summary
 * Using a given integer array, returns a new array whose value at a given index i is equal to
 * the product of each value at all other indicies.  If no other indicies are present (such as in
 * the case when there is only one element), the value for the index is undefined
 * 
 * @param {Integer[]} arr the integer array to perform the algorithm on
 * @returns {Integer[]} the resulting array
 */


/**
 * This algorithm is the simplistic 'brute force' approach where we loop through the
 * array for each index to determine the product of all the other values.
 * 
 * Runtime: Θ(n^2)
 */
let products1 = function(arr) {
    let result = new Array(arr.length);

    for(let i = 0; i < arr.length; i++) {
        let product;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                if (product == undefined) product = arr[j]
                else product *= arr[j];
            }
        }
        result[i] = product;
    }

    return result;
}


/**
 * This alogrithm takes a more intuitve approach and leverages mathmatecal properties or multiplication
 * and division.  This computes the product of all integers in the array and then divides by the number
 * at a particular index to find the value for that index.  However, this can lead to problems when zeros
 * are present in the array since we cannot divide by zero.  Because of this, we must perform some checks
 * to see if zeros are present and deal with them accordingly.
 * 
 * Runtime: Θ(n)
 */
let products2 = function (arr) {
    let result = new Array(arr.length);

    // Need to deal with zeros
    // If one zero, then we know that all values will be 0 except the index of the zero
    // If more than one zero, we know all values will be 0
    let zeros = arr.reduce((acc, number, index) => {
        if (number == 0) acc.push(index);
        return acc;
    }, []);

    if (arr.length == 1) {
        result = [undefined];
    } else if (zeros.length > 1) {
        result.fill(0);
    } else if (zeros.length == 1) {
        result.fill(0);
        result[zeros[0]] = arr.reduce((acc, number, index) => {
            if (index != zeros[0]) acc *= number;
            return acc;
        }, 1);
    } else {
        let totalProduct = arr[0];
        for(let i = 1; i < arr.length; i++) {
            totalProduct *= arr[i];
        }
    
        for(let i = 0; i < arr.length; i++) {
            result[i] = totalProduct / arr[i];
        }
    }


    return result;
}



module.exports = {
    products1,
    products2
}