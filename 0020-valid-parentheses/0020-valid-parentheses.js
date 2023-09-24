/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const corres = {'(': ')', '{': '}', '[': ']'};
    const starts = [];

    for (let i = 0; i < s.length; i++) {
        if (Object.keys(corres).includes(s.charAt(i))) {
            starts.push(s.charAt(i));
        } else {
            if (s.charAt(i) !== corres[starts[starts.length - 1]]) {
                return false;
            } else starts.pop();
        }
    }

    if (starts.length !== 0) return false;

    return true;
};