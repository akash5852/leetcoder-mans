/**
 * @param {number[]} prices
 * @return {number}
 */
//first we intiialize the profit to 0 and then min to Infinity, then make a for loop that stores a min value and then checks profit with all available values.

var maxProfit = function(prices) {
    let profit = 0;
    let min = Infinity;
              
    for(let i = 0; i < prices.length - 1; i++){
        min = Math.min(min,prices[i]);
        profit = Math.max(profit,prices[i+1] - min);
    }
    
    return profit;
};
