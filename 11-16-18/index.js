/**
 * @summary
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array. The array can 
 * contain duplicates and negative numbers as well.
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 *
 * You can modify the input array in-place.
 */



 /**
  * 
  * @param {Integer[]} arr The integer array to perform the algorithm on
  * @returns {Integer} the lowest positive integer that does not exist in the array
  */
const findMissingInteger1 = function (arr) {
    
    // Move all non-positive integers to the front of the array
    let startPositives = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            let temp = arr[startPositives];
            arr[startPositives] = arr[i];
            arr[i] = temp;
            startPositives++;
        }
    }


    // Now go through starting where positive integers start and
    // for each integer found, set the positive integer index to a negative number.
    for(let i = startPositives; i < arr.length; i++) {
        let value = Math.abs(arr[i]);
        let index = startPositives + value - 1;
        if (index < arr.length && arr[index] > 0) {
            arr[index] = -arr[index];
        }
    }

    let answer = arr.length - startPositives + 1;

    // Now go through and find the first value that is positive.
    // The index of this value subtracted by the start of the positive numbers plus one
    // is the lowest missing value
    for(let i = startPositives; i < arr.length; i++) {
        if (arr[i] > 0) {
            // found the answer!
            answer = i - startPositives + 1;
            break;
        }
    }

    return answer;
}

let result = findMissingInteger1([1]);


module.exports = {
    findMissingInteger1
}