/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//const nums = [5,7,7,8,8,10], target = 8
const nums = [7,7], target = 7

var searchRange = function(nums, target) {
    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);
    return [left , right];     
};

function binarySearch(nums, target, leftBias) {
    let left = 0;
    let right = nums.length - 1;
    let i = - 1 ;   
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        if(nums[mid] > target) right = mid - 1;
        if(nums[mid] < target) left = mid + 1;
        if(nums[mid] === target ) {
            i = mid ;             
            if(leftBias) {
                right = mid - 1;
            }else {
                 left = mid + 1 ; 
            }
        }
    }
    return i; 
};
//88 / 88 test cases passed.        Status: Accepted
//Runtime: 86 ms, faster than 49.28% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
//Memory Usage: 42.7 MB, less than 38.59% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.



console.log(searchRange(nums, target));

/*
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/
