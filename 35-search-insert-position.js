/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1,3,5], target = 2
console.log(nums, target);

var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length-1;
    if(nums[i] >= target) return i;
    if(nums[j] < target) return j + 1;

    while(i <= j){
        center = Math.floor((i + j) / 2);
        console.log(center, nums[center]);
        if(nums[center] === target) {
            return center;
        } else if(target > nums[center]) {
            i = center + 1;
        } else {
            j = center - 1;
        }
    }
    return i;
};
console.log(searchInsert(nums, target));
//64 / 64 test cases passed.        Status: Accepted
//Runtime: Runtime: 64 ms, faster than 89.05% of JavaScript online submissions for Search Insert Position.
//Memory Usage: 41.7 MB, less than 96.54% of JavaScript online submissions for Search Insert Position.

/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/