class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[left];
        let rightMax = height[right];

        while (left < right){
            if (leftMax < rightMax){
                left ++
                leftMax = Math.max(leftMax, height[left])
                result += (leftMax - height[left])
                console.log("Left part",left, leftMax, result)
            } else{
                right --
                rightMax = Math.max(rightMax, height[right])
                result += (rightMax - height[right])
                console.log("Right part",right, rightMax, result)
            }
        }
        return result
    }
}
