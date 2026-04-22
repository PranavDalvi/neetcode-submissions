class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length;
        let l = 0;
        let r = n -1;
        
        while (l < r){
            let mid = Math.floor(l + (r-l) /2);

            if (nums[mid] > nums[r]){
                l = mid  + 1;
            } else {
                r = mid;
            }
        }

        let mid_i = l;
        
        if(mid_i === 0) { 
            l = 0;
            r = n-1;
        } else if (target >= nums[0] && target <= nums[mid_i-1]){
            l = 0
            r = mid_i-1;
        } else {
            l = mid_i;
            r = n - 1;
        }

        while (l <= r){
            let mid = Math.floor(l + (r-l) /2);
            if (nums[mid] === target) return mid;
            else if (nums[mid] < target){
                l = mid + 1
            }
            else {
                r = mid - 1
            }
        }
        return -1 
    }
}
