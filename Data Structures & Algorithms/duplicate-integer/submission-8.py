class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        result = set()
        for i in range (len(nums)):
            if (nums[i] in result):
                return True
            result.add(nums[i])
        return False