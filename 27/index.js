

/**
 * Analyzes a given string and determined if the brackets are correctly balanced.
 * Brackets analyzed are '{', '(', and '['
 * 
 * @param {String} str the string to analyze
 * @returns {Boolean} true if the brackets are well-formed; false otherwise
 */
const wellFormedBrackets = function (str) {
    let counts = [0, 0, 0]; // round, curly, square
    
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        let pos = ch == '(' || ch == ')' ? 0 : ch == '{' || ch == '}' ? 1 : ch == '[' || ch == ']' ? 2 : -1;
        let increase  = ch == '(' || ch == '{' || ch == '[';

        if (pos >= 0) {
            counts[pos] = increase ? counts[pos] + 1 : counts[pos] - 1;
        }
    }
    return counts.every(value => value == 0);
}


module.exports = {
    wellFormedBrackets
}