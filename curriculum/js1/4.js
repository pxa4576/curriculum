/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (num,input,result="") => {
  if(num===0)
    return result;
  return solution(num-1,input,result+input);
};

module.exports = {
  solution,
};
