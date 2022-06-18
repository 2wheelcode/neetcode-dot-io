/**
 * @param {number[]} prices
 * @return {number}
 */
 const prices = [7,1,5,3,6,4]

/*
Two pointer
1)set buy, sell days, & profit = 0
let maxProfit = 0
let buy = 0
let sell = 1
while loop sell < prices.length
if buy < sell {
    profit = (prices[sell] - prices[buy])
if profit > maxProfit{
    maxProfit = profit
}
}buy = sell
if [sell]<[buy]
sell++
*/

var maxProfit = function(prices) {
let maxProfit = 0;
let buy = [0];
let sell = [1];

while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
        profit = (prices[sell] - prices[buy]);
        console.log('Buy day:', prices[buy], 'Sell day:', prices[sell],'Profit', profit);
    if (profit > maxProfit) {
        maxProfit = profit;
        console.log('Max Profit:', maxProfit);
    }
    } else {
        buy = sell;
    }
    sell++;
}
return maxProfit;
};
console.log(maxProfit(prices));
//211 / 211 test cases passed.
//Runtime: 122 ms, faster than 42.99% of JavaScript online submissions for Best Time to Buy and Sell Stock.
//Memory Usage: 51.2 MB, less than 95.07% of JavaScript online submissions for Best Time to Buy and Sell Stock.


/*
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/