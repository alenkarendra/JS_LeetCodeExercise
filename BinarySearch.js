function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // found it!
    } else if (arr[mid] < target) {
      left = mid + 1; // search right half
    } else {
      right = mid - 1; // search left half
    }
  }

  return -1; // not found
}

const nums = [1, 3, 5, 7, 9, 12, 15];
const target = 9;

const result = binarySearch(nums, target);
console.log(result); // Output: 4 (because nums[4] = 9)
