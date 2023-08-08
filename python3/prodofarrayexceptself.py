class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        arr = []
        pre = []
        post = []
        preVal = 1
        postVal = 1
        for num in nums:
            preVal *= num
            pre.append(preVal)

        for num in reversed(nums):
            postVal *= num
            post.insert(0,postVal)
        
        for i in range(len(nums)):
            if(i == 0):
                arr.append(post[1]) 
            elif(i == len(nums) - 1):
                arr.append(pre[len(nums) - 2]) 
            else:
                arr.append(pre[i-1] * post[i+1])       
        return arr
        

