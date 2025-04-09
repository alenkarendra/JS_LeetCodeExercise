/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return false;

  let minPrice = 0;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice || i === 0) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5 (buy at 1, sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
console.log(maxProfit([2, 4, 1, 10])); // Output: 9

// var maxProfit = function (prices) {
//   if (prices.length === 0) return false;

//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//       continue;
//     }
//     maxProfit = Math.max(maxProfit, prices[i] - minPrice);
//   }

//   return maxProfit;
// };
