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
         * To make it more effecient lets try with Sets and replace i iteration
         */

        const seen = new Set()
        for (let i of nums){
            if(seen.has(i)) return true
            seen.add(i)
        }
        return false
    }
}
