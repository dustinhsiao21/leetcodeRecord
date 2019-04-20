// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// Example 1:

// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.


// tips: Dynamic Programming
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if(n <= 0) return 0;
    let dp = [];
    dp[0] = 0;
    for(let i = 1; i <= n; i++){
        dp[i] = Number.MAX_VALUE;
        for(let j = 0; i - j*j >= 0; j++){
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};

//inputs
let n = 13;

//output 2 (9+4)
console.log(numSquares(n));