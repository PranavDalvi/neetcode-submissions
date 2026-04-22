class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        thisDict = dict()
        if len(nums) < 1:
            return False
        for i,v in enumerate(nums):
            if v in thisDict.keys():
                thisDict[v] += 1
                return True
            else:
                thisDict[v] = 1
        return False
         