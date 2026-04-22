class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length
        while (low < high){
            let middle = Math.floor(low + (high - low) / 2);
            let value = nums[middle]
            if (value === target) return middle;
            else if (value > target){
                high = middle
            } else {
                low = middle + 1
            }
        }
        return -1
    }
}
