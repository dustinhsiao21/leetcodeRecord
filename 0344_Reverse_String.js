// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i = 0; i < s.length; i++){
        s.splice(i, 0, s.pop());
    }
};

let inputs = ["h","e","l","l","o"];

console.log(reverseString(inputs)); // Output: ["o","l","l","e","h"]