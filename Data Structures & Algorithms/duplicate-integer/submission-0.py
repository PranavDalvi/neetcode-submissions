class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        unique_set = set(nums)
        if len(nums) > len(unique_set):
            return True
        else:
            return False
         