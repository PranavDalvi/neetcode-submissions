class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let compare = new Map();
        for(let i = 0; i < strs.length; i++){
            let sorted = strs[i].split("").sort().join("")
            if (!compare.has(sorted)){
                compare.set(sorted, [])
            }
            compare.get(sorted).push(strs[i])
        }
        return Array.from(compare.values())
    }
}
