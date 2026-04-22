class MinStack {
    constructor() {
        this.array = []
        this.minArray = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.array.push(val)

        if (this.minArray.length === 0 || val <= this.minArray[this.minArray.length - 1]){
            this.minArray.push(val)
        }

        return this;
    }

    /**
     * @return {void}
     */
    pop() {
       const removed = this.array.pop();

       if (removed === this.minArray[this.minArray.length - 1]){
        this.minArray.pop();
       }

    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.array.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArray[this.minArray.length - 1]
    }
}
