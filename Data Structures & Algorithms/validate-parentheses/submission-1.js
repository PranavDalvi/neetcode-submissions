class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const match = {')': '(', '}' : '{', ']' :'['};
        const stack = []
        const string = s.split("");

        for (let c of string){
            if (stack.length === 0){
                stack.push(c)
            }
            else if (match[c] === stack[stack.length - 1]){
                console.log(stack)
                
                stack.pop()
                console.log(stack)
            }
            else{
                 stack.push(c)
                }
            console.log(match[c])
        }
        if (stack.length === 0) return true
        else return false
    }
}
