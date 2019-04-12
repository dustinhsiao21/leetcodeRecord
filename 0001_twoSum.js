// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// solution 1  Brute Force
// Time complexity : O(n2)
// Space complexity : O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] == target - nums[i]){
                return [i, j];
            }
        }
    }
};

// input [2, 7, 11, 25], 9
let nums = [2,7,11,15];
let target = 9;

// output [0, 1] Runtime:96ms, Memory:34.8MB
console.log(twoSum(nums, target));

// solution 2 One-pass Hash Table
// Time complexity : O(n)
// Space complexity : O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diff in hash) return [hash[diff], i];
        hash[nums[i]] = i
    }
};

// input [2, 7, 11, 25], 9
let nums = [2,7,11,15];
let target = 9;

// output [0, 1] Runtime:72ms, Memory:35.5MB
console.log(twoSum(nums, target));