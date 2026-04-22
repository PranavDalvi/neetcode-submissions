class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // initializing 2 pointers
        let i = 0;
        let j = nums.length - 1;

        // Sorting an array in decending order
        const sorted = nums.map((value, index) => ({value, index}));
        sorted.sort((a,b) => (a.value - b.value))

        while (i < j) {

            if ((sorted[i].value + sorted[j].value) > target){
                j --; // right pointer
            }
            else if ((sorted[i].value + sorted[j].value) < target){
                i ++; // left pointer
            }

            else {
                return [sorted[i].index, sorted[j].index]
            }
        }
        return []

    }
}
