/**
 * @summary
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
 * For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
 * You can assume that the messages are decodable. For example, '001' is not allowed.
 */



/**
 * Determines the number of valid ways the given message can be decoded.  It assumes that
 * an empty message can be decoded one way
 * 
 * @param {String} message a correctly formatted message that can be decoded
 * @returns {Number} the number of ways to decode the message
 */
const decodeWays1 = function (message) {
    let numberOfWays = 1;
    if (message.length > 1) {
        let rest = message.slice(1);
        numberOfWays = decodeWays1(rest);
        if (message.length > 1 && parseInt(message.slice(0, 2)) <= 26) {
            rest = message.slice(2);
            numberOfWays += decodeWays1(rest);
        }
    }

    return numberOfWays;
}

module.exports = {
    decodeWays1
}