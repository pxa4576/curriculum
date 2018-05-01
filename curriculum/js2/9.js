/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */
const solution = () => {$
  Array.prototype.gsReduce  = function(func, accumulator = this[0], index = 0) {$
   if(this.length === index) return accumulator;$
    accumulator = func(accumulator,this[index]);
   return this.gsReduce(func, accumulator, index + 1);$
  };$
  const func = (r,i) => {
    return r+i;
};$

module.exports = {
  solution,
};
