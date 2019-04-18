// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) { 
    let map = {
        "}" : "{",
        ")" : "(",
        "]" : "["
    }

    let arr = ['{', '(', '['];
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(arr.indexOf(s[i]) !== -1){ // if is in arr, push to stack
            stack.push(s[i]);   
        }else if(stack[stack.length -1] === map[s[i]]){ // if is match the last of the stack, remove from stack
            stack.pop()
        }else{ //if not in arr, and not match in stack , return false;
            return false;
        }
    }
    return stack.length === 0 ? true : false
};