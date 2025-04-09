/**
 * https://leetcode.com/problems/defuse-the-bomb/?envType=daily-question&envId=2025-04-08
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */

var decrypt = function (code, k) {
  const n = code.length;
  let res = new Array(n).fill(0);

  if (k === 0) {
    return res;
  }

  for (let i = 0; i < n; i++) {
    let sum = 0;
    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % n];
      }
    } else if (k < 0) {
      for (let j = 1; j <= Math.abs(k); j++) {
        sum += code[(i - j + n) % n]; // tambahkan n agar hasilnya positif
      }
    }
    res[i] = sum;
  }

  return res;
};

console.log(decrypt([5, 7, 1, 4], 3)); // Example output: [12, 10, 16, 13]
console.log(decrypt([1, 2, 3, 4], 0)); // Example output: [0,0,0,0]
console.log(decrypt([2, 4, 9, 3], -2)); // Example output: [12, 10, 16, 13]
