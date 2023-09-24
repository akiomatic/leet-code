/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    const first = strs[0];
    for (let i = 0; i < first.length; i++) {
        if (strs.every(e => e.charAt(i) === first[i])) {
            prefix += first[i];
        } else return prefix;
    }
    return prefix;
};