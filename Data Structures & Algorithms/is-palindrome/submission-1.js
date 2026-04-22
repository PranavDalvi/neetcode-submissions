class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.toLowerCase()
        let i = 0
        let j = string.length -1;
        let match = /[a-z0-9]/

        while (i < j){
            while (i < j && !string[i].match(match)){
                i++
            }
            while (i < j && !string[j].match(match)){
                j--
            }

            if (string[i] !== string[j]){
                return false
            }
            i++
            j--
        }
        return true
    }
}
