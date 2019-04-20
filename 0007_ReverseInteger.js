// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit
// signed integer range: [−231,  231 − 1]. For the purpose of this problem, 
// assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x);
    return (reverse > '0x7FFFFFFF' || reverse < -'0x80000000') ? 0 : reverse;
};

console.log(reverse(-132)); //output: -231;

// 0x800000000 : 0x => Hexadecimal, 80000000 => 1111 0000 0000 0000 0000 0000 0000 0000 = 2^31 ,  = 2,147,483,648
// 2^31 - 1 => 1110 1111 1111 1111 1111 1111 1111 1111 => 0x7FFFFFFF = 2,147,483,647