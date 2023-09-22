/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let output = 0;
  const arr = [...s];
  let index = 0;
  const irregulars = ["I", "X", "C"];
  const irregularsNext = [
    ["V", "X"],
    ["L", "C"],
    ["D", "M"],
  ];
  let irrIndex;
  let irrNextIndex;
  let nextChar;

  while (index < arr.length) {
    irrIndex = irregulars.findIndex((e) => e === arr[index]);

    if (index + 1 < arr.length && irrIndex !== -1) {
      nextChar = arr[index + 1];
      irrNextIndex = irregularsNext[irrIndex].findIndex((e) => e === nextChar);

      if (irrNextIndex !== -1) {
        if (irrIndex === 0) {
          if (irrNextIndex === 0) {
            output += 4;
          } else {
            output += 9;
          }
        } else if (irrIndex === 1) {
          if (irrNextIndex === 0) {
            output += 40;
          } else {
            output += 90;
          }
        } else {
          if (irrNextIndex === 0) {
            output += 400;
          } else {
            output += 900;
          }
        }

        index += 2;
        continue;
      }
    }

    switch (arr[index]) {
      case "I":
        output += 1;
        break;
      case "V":
        output += 5;
        break;
      case "X":
        output += 10;
        break;
      case "L":
        output += 50;
        break;
      case "C":
        output += 100;
        break;
      case "D":
        output += 500;
        break;
      default:
        output += 1000;
    }

    index++;
  }

  return output;
};
