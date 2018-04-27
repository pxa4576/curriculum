/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (arr, newarr = [], i = 0) => {
  if (arr.length === i) return newarr;
  if (arr[i] <= 5) newarr.push(0);
    else newarr.push(arr[i]);
  return solution(arr, newarr, i+1);
};

module.exports = {
  solution,
};
