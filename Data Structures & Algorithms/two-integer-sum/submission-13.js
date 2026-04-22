class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];
        let i = 0;
        let j = nums.length - 1;

        const paired = nums.map((value, index) => ({value, index}));
        paired.sort((a,b) => (a.value - b.value))

        console.log(paired)

        while (i < j) {
            console.log(paired[i].value , paired[j].value)
            console.log(paired[i].index , paired[j].index)

        if ((paired[i].value + paired[j].value) > target){
            j --;
        }
        if ((paired[i].value + paired[j].value) < target){
            i ++;
        }

        if ((paired[i].value + paired[j].value) == target){
            return [paired[i].index, paired[j].index]
        }
        }
        return []

    }
}
