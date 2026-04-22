class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * min(heights[left], heights[right]) * (right - left)
     */
    maxArea(heights) {
        let highest = 0;
        let result
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            result = Math.min(heights[left], heights[right]) * (right - left)
            if (highest < result) highest = result
            if (heights[left] < heights[right]){
                left ++
            }
            else{
                right --
            }
        }
        return highest
    }
}
