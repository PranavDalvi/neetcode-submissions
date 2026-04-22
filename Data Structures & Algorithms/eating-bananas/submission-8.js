class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function k_works(k){
            let hours = 0
            for(const p of piles){
                hours += Math.ceil(p/k)
            }
            return hours <= h
        }

        let l = 0;
        let r = Math.max(...piles);

        while(l < r){
            let k = Math.floor(l + (r-l) / 2)

            if (k_works(k)){
                r = k;
            } else {
                l = k + 1
            }
        }
        return r
    }
}
