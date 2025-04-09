/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // Output: True
console.log(containsDuplicate([1, 2, 3, 4])); // Output: False
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: True
