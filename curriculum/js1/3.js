/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a,result="",i=0) => {
  if(a===i)
    return result;
  else
  return solution(a,result+"hello",i+1)
};

module.exports = {
  solution,
};
