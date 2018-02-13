/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (num,input,result="",i=0) => {
  if(num===i)
    return result;
  return solution(num,input,result+input,i+1);
};

module.exports = {
  solution,
};
