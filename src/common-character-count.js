const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstString = new Map();
  const secondString = new Map();
  let sum = 0;
  
  for (let i = 0; i < s1.length; i ++) {
    if (firstString.has(s1[i])) firstString.set(s1[i],firstString.get(s1[i]) + 1);
    else firstString.set(s1[i], 1);
  }

  for (let i = 0; i < s2.length; i ++) {
    if (secondString.has(s2[i])) secondString.set(s2[i],secondString.get(s2[i]) + 1);
    else secondString.set(s2[i], 1);
  }

  firstString.forEach(function(value, key) {
    if (secondString.has(key)) {
      sum += Math.min(value, secondString.get(key));
    }
  })
  return sum
}


getCommonCharacterCount('aa', 'bb');

module.exports = {
  getCommonCharacterCount
};
