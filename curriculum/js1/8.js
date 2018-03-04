/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a,b,gcd=1,div=1) => {
  if (div>a || div>b) return gcd;
   if (a%div===0 && b%div===0) gcd=div;
return solution(a,b,gcd,div+1);

};

module.exports = {
  solution,
};
