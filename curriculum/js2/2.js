/**
 * Given an array, return an array of the same length
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (arr, newarr = [], i = 0) => {
  if(arr.length === i) return newarr;
  if((arr[i]) % 2 === 0) newarr.push(arr[i]);
    else newarr.push(0);
  return solution(arr, newarr, i+1);
};

module.exports = {
  solution,
};
