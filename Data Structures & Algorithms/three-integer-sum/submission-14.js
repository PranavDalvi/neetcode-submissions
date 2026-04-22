class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        /**
         * Sort the array in ascending order
         * take k as the first element and then use 2 sums to find if sum = 0 and make sure left and right is not equal and left !== k and right !== k if yes then skip to next
         * give output 
         * (how I can give 2 arrays)
         */

        let result = []
        const sortedNums = nums.sort((a,b) => a-b);
        for (let k = 0; k < sortedNums.length -2; k ++){
            let left = k + 1
            let right = sortedNums.length -1

            if (k > 0 && sortedNums[k] === sortedNums[k - 1]) continue;

            while (left < right){
                if ((sortedNums[k] + sortedNums[left] + sortedNums[right]) < 0){
                    left ++
                }
                else if ((sortedNums[k] + sortedNums[left] + sortedNums[right]) > 0){
                    right --
                }
                else {
                    result.push([sortedNums[k], sortedNums[left], sortedNums[right]])
                    left ++
                    right --
                    while (left < right && sortedNums[left] === sortedNums[left - 1]){
                        left ++
                    }
                }
            }
        }
        return result
    }
}
