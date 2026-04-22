class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length -1

        while (left < right){
            console.log("while running")
            if ((numbers[left] + numbers[right]) < target){
                console.log(numbers[left] + numbers[right])
                left ++
            } 
            if ((numbers[left] + numbers[right]) > target){
                console.log(numbers[left] + numbers[right])
                right --
            }
            if ((numbers[left] + numbers[right]) === target){
                return [left + 1, right + 1]
            }
        }
    }
}
