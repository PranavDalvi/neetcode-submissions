class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const arr = this.keyStore.get(key);
        let l = 0;
        let r = arr.length - 1;
        let res = "";

        while (l <= r){
            let mid = Math.floor(l + (r - l) / 2);
            let mid_Time = arr[mid][0];

            if (mid_Time <= timestamp){
                res = arr[mid][1];
                l = mid + 1;
            } else {
                r = mid - 1
            }
        }
        return res
    }
}
