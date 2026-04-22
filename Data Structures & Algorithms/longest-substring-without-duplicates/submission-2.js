class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let window = new Set();
        let maxLen = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++){
            while(window.has(s[right])){
                window.delete(s[left])
                left++
            }
            window.add(s[right]);
            maxLen = Math.max(maxLen, window.size)
        }
        return maxLen;
    }
}
