/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
 */


const fakeBin = x => x.replace(/\d/g, d => (d >= 5 ? 1 : 0))

module.exports = fakeBin