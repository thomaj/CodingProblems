/**
 * @summary
 * Given a list of numbers and a number k, returns whether any two numbers from the list add up to the number k
 * 
 * @param {Number[]} arr the array of numbers to use
 * @param {Number} k the value the sum of two numbers needs to be
 */


 /**
  * This implements the basic implementation with some optimization.  Instead of looping through the whole
  * array for each number, we only have to search the array starting at index i for each index i.  This is
  * because addition is associative and we are only using two numbers, meaning 'arr[5] + arr[2]' is the same
  * as 'arr[2] + arr[5]' whcih we have already checked when i=5.
  * 
  * Runtime: Θ(n^2)
  */
let sumTo1 = function (arr, k) {
    let exists = false;

    for(let i = 0; i < arr.length; i++) {
        let firstNumber = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            let secondNumber = arr[j];
            if (firstNumber + secondNumber == k) {
                exists = true;
                break;
            }
        }
    }

    return exists;
}

/**
 * This is a one pass implementation, meaning we do not loop through the array for each index in the array
 * such as above.  We do this by determining the difference of our current value and k because this difference is
 * the other value needed to sum to k.  We keep a cache of these differences and then for each value in the array,
 * we can see if this value is one of the needed values to produce k.  If it is not, then we add this difference
 * to our cache and continue on.
 * 
 * The implementation of the indexOf (used as a find method) can be done using an optimized structure such as a
 * hash table or a set as our cache.  This means lookup time would be constant when performing the find operation.
 * 
 * Runtime: Θ(n)
 */
let sumTo2 = function (arr, k) {
    let exists = false;

    let numbersNeeded = [];
    for (let i = 0; i < arr.length; i++) {
        if (numbersNeeded.indexOf(arr[i]) >= 0) {
            exists = true;
            break;
        } else {
            let difference = k - arr[i];
            numbersNeeded.push(difference);
        }
    }

    return exists;
}


module.exports = {
    sumTo1,
    sumTo2
}