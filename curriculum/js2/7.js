/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (arr, num, result = 0, i = 0) => {
  if(arr.length === i) return result;
  if(arr[i] === num) result = result + 1;
    return solution(arr, num, result, i + 1);
};

module.exports = {
  solution,
};
