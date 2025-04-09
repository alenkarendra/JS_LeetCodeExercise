/** https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const pairIndex = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (target - num in pairIndex) {
      return [i, pairIndex[target - num]];
    }

    pairIndex[num] = i;
  }
};
