/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [4,5,6,7,0,1,2], target = 0
// [index] [0,1,2,3,4,5,6]
//let nums = [4,5,6,7,0,1,2], target = 3
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid; 
        
        // Checking which segment is continuous
        // Then we could use Binary Search on that side.
        if(nums[right] > nums[mid]) {
            // If right-hand side is continuous, checking target is on right-hand side.
            if(nums[right] >= target && target > nums[mid]) left = mid + 1;
            else right = mid - 1;
        } else {
            // And if left-hand side is continuous,checking target is on left-hand side or not.
            if(target >= nums[left] && nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }
    }
    return -1;
};
//195 / 195 test cases passed.      Status: Accepted
//Runtime: 84 ms, faster than 53.07% of JavaScript online submissions for Search in Rotated Sorted Array.
//Memory Usage: 41.9 MB, less than 78.80% of JavaScript online submissions for Search in Rotated Sorted Array.
console.log(search(nums, target))
/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/