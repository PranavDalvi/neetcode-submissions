class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        let l = 0;
        let r = n - 1;
        let mid = 0

        while (l < r){
            mid = Math.floor(l + (r - l) /2);

            if (nums[mid] > nums[n - 1]){
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        const mid_num = l;
        
        if (mid_num === 0) {
            l = 0;
            r = n - 1;
        } else if (target >= nums[0] && target <= nums[mid_num - 1]){
            l = 0;
            r = mid_num - 1;
        } else {
            l = mid_num;
            r = n - 1;
        }

        while (l <= r){
            mid = Math.floor(l + (r - l) /2);
            if (target === nums[mid]) return mid;
            else if (target > nums[mid]){
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return -1
    }
}
