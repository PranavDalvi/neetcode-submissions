class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const match = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let arr = s.split("");

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
    } else if (match[arr[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
    }
}
