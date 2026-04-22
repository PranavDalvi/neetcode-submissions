class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    checkInclusion(s1, s2) {
        const n1 = s1.length;
        const n2 = s2.length;
        
        if (n1 > n2) return false;

        const s1Counts = new Array(26).fill(0);
        const s2Counts = new Array(26).fill(0);

        for (let i = 0; i < n1; i++){
            s1Counts[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
            s2Counts[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
        }

        if(JSON.stringify(s1Counts) == JSON.stringify(s2Counts)) return true;

        for (let i = n1; i < n2; i++){
            s2Counts[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
            s2Counts[s2.charCodeAt(i - n1) - "a".charCodeAt(0)]--;

            if(JSON.stringify(s1Counts) == JSON.stringify(s2Counts)) return true;
        }
        return false;
    }
}
