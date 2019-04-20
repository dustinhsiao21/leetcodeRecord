// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    for(let i = 0; strs[0].length; i++){
        for(let str of strs){
            if(str[i] !== strs[0][i]){
                return str.slice(0, i);
            }
        }
    }
    return strs[0];
};

//inputs
let inputs = ["flower","flow","flight"];

//output: 'fl'
console.log(longestCommonPrefix(inputs));