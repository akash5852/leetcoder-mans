class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        mind = inf
        for i in range(len(prices) - 1):
            mind = min(mind, prices[i])
            profit = max(profit, prices[i+1] - mind)

        return profit    
