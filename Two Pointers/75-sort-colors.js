/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [2,0,2,1,1,0];

var sortColors = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let i = 0;

    function swap(i, j) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while(i <= right) {
        if(nums[i] === 0) {
            swap(left, i);
            left += 1;
        } else if(nums[i] === 2) {
            swap(right, i);
            right -= 1;
            i--;
        }
        i++
    }
    return nums;
};
console.log(sortColors(nums));
/*
My approach:
two pointer left right
while right > left
if r<l
unshift(pop(right))
l += 1
else r -= 1
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Follow up: Could you come up with a one-pass algorithm using only constant extra space?


 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/