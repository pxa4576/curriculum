/**
*  * Given an array, return an array of numbers larger than 5
  *   * @param {array} a
  *    * @returns {array}
  *     */
const solution = (a) => {
  return  a.filter((element, index) => a[index] > 5)
};

module.exports = {
  solution,
};
