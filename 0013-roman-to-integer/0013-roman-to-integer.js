/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let output = 0;
  const arr = [...s];
  let nextChar;

  for (let i = 0; i < arr.length; i++) {
      nextChar = arr[i + 1];

      switch (arr[i]) {
      case "I":
        if (nextChar === "V" || nextChar === "X") {
            output += nextChar === "V" ? 4 : 9;
            i++;
            continue;
        }
        output += 1;
        break;
      case "V":
        output += 5;
        break;
      case "X":
        if (nextChar === "L" || nextChar === "C") {
            output += nextChar === "L" ? 40 : 90;
            i++;
            continue;
        }
        output += 10;
        break;
      case "L":
        output += 50;
        break;
      case "C":
        if (nextChar === "D" || nextChar === "M") {
            output += nextChar === "D" ? 400 : 900;
            i++;
            continue;
        }
        output += 100;
        break;
      case "D":
        output += 500;
        break;
      default:
        output += 1000;
    }
  }

  return output;
};
