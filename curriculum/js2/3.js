/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const solution = (arr, newarr = [], i = 0) => {
  const checkPrime = (num,i=2) => {
    if (i===num)
      return true;
    if(num===1|| num%i===0)
      return false;
    return checkPrime(num,i+1);
  };

  if(arr.length === i) return newarr;
  if(checkPrime(arr[i]) === false) newarr.push(1);
  else newarr.push(arr[i]);
  return solution(arr, newarr, i + 1);
};

module.exports = {
  solution,
};
