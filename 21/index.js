

const numRoomsNeeded1 = function (classes) {
    let result = 0;
    for (let i = 0; i < classes.length; i++) {
        let start1 = classes[i][0];
        let end1 = classes[i][1];
        for (let j = i+1; j < classes.length; j++) {
            let start2 = classes[j][0];
            let end2 = classes[j][1];
            if (start1 < start2 && end1 >= start2 || start2 < start1 && end2 >= start2) {
                result++;
            }
        }
    }
    return result
}

console.log(numRoomsNeeded1([[30, 75], [0, 50], [60, 150]]));
console.log(numRoomsNeeded1([[0, 30], [1, 31], [2, 32]]));