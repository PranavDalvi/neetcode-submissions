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

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++){
            source[s[i]] = (source[s[i]] || 0) + 1;
            target[t[i]] = (target[t[i]] || 0) + 1;
        }


        for (let key in source){
            if (source[key] !== target[key]) return false
        }
        return true


    }
}
