class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let left = 0
        let right = 0
        let maxLen = 0

        while (right < s.length){
            while (set.has(s[right])){
                set.delete(s[left]);
                left ++;
            }
            set.add(s[right])
            maxLen = Math.max(maxLen, (right - left) + 1)
            right ++;
        }
        return maxLen
    }
}
