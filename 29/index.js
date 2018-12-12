
/**
 * Encodes a provided string using run-length encoding.  The string is not limited
 * to alphanumeric characters and can include digits, whitespace, etc.
 * 
 * @param {String} str the string to encode
 * @returns {String} the encoded string
 */
const encode = function (str) {
    if (!str) return '';

    let encoding = '';
    let startChar = str.charAt(0);
    let count = 1;
    for (let i = 1; i < str.length; i++) {
        let currentChar = str.charAt(i);
        if (currentChar === startChar) {
            count++;
        } else {
            encoding += count + startChar;
            startChar = currentChar;
            count = 1;
        }
    }

    encoding += count + startChar;

    return encoding;
}


/**
 * Decodes a string that has been properly encoded using run-length encoding.
 * 
 * @param {String} str the encoded string
 * @returns {String} the decoded string
 */
const decode = function (str) {
    if (!str) return '';

    let decoding = '';
    for (let i = 0; i < str.length; i += 2) {
        let count = str.charAt(i);
        let character = str.charAt(i + 1);
        for (let j = 0; j < count; j++) {
            decoding += character;
        }
    }

    return decoding;
}


module.exports = {
    encode,
    decode
}