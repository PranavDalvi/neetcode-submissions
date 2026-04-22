class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /**
         * Define an empty array / hashtable
         * If element "i" is not present in the array append it with value of 1 [1: 1] / {1: 1}
         * check if value of elements in hash table is more than 1 or to make it effecient we will break and return true is any one element is present in the hash map.
         */

        let tracker = []
        for (let i = 0; i < nums.length; i++){
            console.log(nums[i])
            if (!tracker.includes(nums[i])){
                tracker.push(nums[i])
            } else if (tracker.includes(nums[i]))
            return true
        }
        return false
    }
}
