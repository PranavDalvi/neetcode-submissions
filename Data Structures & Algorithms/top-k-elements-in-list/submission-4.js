class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = []
        let freq = new Map();
        for(let i = 0; i < nums.length; i++){
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
        }
        return Array.from(freq.entries())
        .sort((a,b) => b[1] - a[1])
        .slice(0,k)
        .map(el => el[0])
    }
}
