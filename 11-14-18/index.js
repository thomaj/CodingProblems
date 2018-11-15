
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