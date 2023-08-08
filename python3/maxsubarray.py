class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSub = nums[0]
        currVal = 0
        for n in nums:
            if(currVal < 0):
                currVal = 0
            currVal += n
            maxSub = max(maxSub, currVal)   


        return maxSub    
