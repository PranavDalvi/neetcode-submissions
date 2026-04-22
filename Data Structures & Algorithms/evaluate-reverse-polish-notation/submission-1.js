class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     * Time taken 61 mins 30 secs
     */
    evalRPN(tokens) {
        const operators = new Set(["+", "-", "*", "/"])
        const stack = []
        for (let i = 0; i < tokens.length; i++ ){
            if (!operators.has(tokens[i])){
                stack.push(Number(tokens[i]))
            }
            else {
                const num2 = stack.pop();
                const num1 = stack.pop();
                const operator = tokens[i];
                let result

                if (operator === "+"){
                    result = num1 + num2
                } else if (operator === "-"){
                    result = num1 - num2

                } else if (operator === "*"){
                    result = num1 * num2
                }else if (operator === "/"){
                    result = Math.trunc(num1 / num2)
                }
                console.log(num1, operator, num2, result)
                stack.push(result)
            }
        }
        return stack[stack.length-1]
    }
}
