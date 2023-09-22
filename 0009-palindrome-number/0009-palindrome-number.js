/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = [...x.toString()];
    return [...arr].reverse().every((e, i) => e === arr[i]);
};