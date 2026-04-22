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
        let arr = Array.from(freq.entries());
        let sortedFreq = arr.sort((a,b) => b[1] - a[1])

        for (let i = 0; i < k; i++){
            result.push(sortedFreq[i][0])
        }
        return(result)
    }
}
