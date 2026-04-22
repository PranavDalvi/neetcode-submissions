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
        const paired = nums.map((value, index) => ({value, index}));
        paired.sort((a,b) => (a.value - b.value))

        while (i < j) {

            if ((paired[i].value + paired[j].value) > target){
                j --; // right pointer
            }
            else if ((paired[i].value + paired[j].value) < target){
                i ++; // left pointer
            }

            else{
                return [paired[i].index, paired[j].index]
            }
        }
        return []

    }
}
