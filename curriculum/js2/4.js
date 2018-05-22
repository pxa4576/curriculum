/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (arr, i = 0, sum = 0) => {
  if(arr.length === 0) return '';
  if(arr.length === i) return sum;
  sum = sum + arr[i];
  return solution(arr,i+1, sum);
};


module.exports = {
  solution,
};
