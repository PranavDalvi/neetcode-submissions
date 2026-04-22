class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length // Row
        let n = matrix[0].length // column
        let t = m * n

        let l = 0
        let r = t - 1

        while (l <= r){
            let mid = Math.floor(l + (r - l) / 2)

            let i = Math.floor(mid / n)
            let j = mid % n

            let value = matrix[i][j]

            if (value === target) return true
            else if (value > target){
                r = mid - 1 
            } else {
                l = mid + 1
            }
        }
        return false
    }
}
