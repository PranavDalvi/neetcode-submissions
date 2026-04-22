class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        /**
         * initialize character map for each of the words.
         * compare the character map with the next word add word frequency to the character map if not present and if present store the array of the words or index.
         *  return the hash in the end
         */
        
        const map = new Map();

        for (const word of strs) {
            const freq = new Array(26).fill(0);
            for (const ch of word) {
                freq[ch.charCodeAt(0) - 97]++;
            }
            const key = freq.join(",");

            if (!map.has(key)){
                map.set(key, []);
            }
            map.get(key).push(word);
        }
        return Array.from(map.values());
    }
}
