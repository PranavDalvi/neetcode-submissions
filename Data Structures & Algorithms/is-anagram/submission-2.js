class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /**
         * 2 hashmaps {a: 1, b: 1, c: 1}
         * compare the hashmaps if any of the value does not math return false
         */
        let source = {};
        let target = {};

        if (s.length !== t.length) return false

        for (let i of s){
            if (i in source) {
                source[i] = source[i] + 1;
            }else {
            source[i] = 1;
            }
        }

        for (let j of t) {
            if (j in target){
                target[j] = target[j] + 1;
            } else {
                target[j] = 1;
            }
        }

        for (let key in source){
            console.log(source[key], target[key])
            if (source[key] !== target[key]) return false
        }
        return true


    }
}
