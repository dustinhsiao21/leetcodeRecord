// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length -1;
    while(low <= high){
        mid = Math.floor((low+high)/2);
        let guest = nums[mid];
        if(guest == target){
            return mid;
        }

        if(guest > target){
            high = mid -1
        }else{
            low = mid + 1
        }
    }
    return high + 1
};

//time complexity : O(log N);

//input 
let nums = [1, 3, 5, 6]
let target = 2;

//output 2
console.log(searchInsert(nums, target))