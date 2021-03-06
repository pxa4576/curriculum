/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (num,i=2) => {
  if (i===num)
    return true;
  if(num===1|| num%i===0)
    return false;
  return solution(num,i+1);
};

module.exports = {
  solution,
};
