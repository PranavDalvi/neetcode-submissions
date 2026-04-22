class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let window = new Set();
       let left = 0;
       let maxCount = 0;

       for (let right = 0; right < s.length; right++){
        while (window.has(s[right])){
            window.delete(s[left]);
            left++;
        }
        window.add(s[right]);
        maxCount = Math.max(maxCount, window.size);
       }
       return maxCount;
    }
}
