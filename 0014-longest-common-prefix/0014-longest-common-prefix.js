/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    const first = strs[0];

    for (const i in first) {
        if (strs.filter(e => e.startsWith(prefix + first[i])).length === strs.length) {
            prefix += first[i];
        } else return prefix;
    }

    return prefix;
};