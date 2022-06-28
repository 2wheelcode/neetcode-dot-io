/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [1,2,3,4,5,6,7], k = 3
//const nums = [-1,-100,3,99], k = 2

const reverseArray = (nums, i, j) => {
    while(i < j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        
        i++;
        j--;
    }
}

var rotate = function(nums, k) {
    // To make sure it does not go over the array length     
    k = k % nums.length;
    
   // reverse the whole array
    let i = 0;
    let j = nums.length - 1;
    reverseArray(nums, i, j);
    
    
    // un-reverse the array until kth element - first part of the array
    i = 0;
    j = k - 1;
    reverseArray(nums, i, j);
    
    // un-reverse the kth array until end of array - second part of the array
    i = k;
    j = nums.length - 1;
    reverseArray(nums, i, j);
    
    return nums;
};


/* 
var rotate = function(nums, k) {
        k = k % nums.length;
        //short circuit. if k is the length, mod is 0, return nums if k is greater than length of nums, no need to loop nums back to the original format, just make k the extra rotates

    while(k > 0) {
        //unshift() pushes to the beginning of an array, let's just tell it to push what we pop(), then decrement k
        nums.unshift(nums.pop());
        k--;
    }
    return nums;
}; */


/* this works, however it states in the js doc that this returns a shallow copy of the array
var rotate = function(nums, k) {

    while(k > 0) {
        console.log('k is:',k);
        let temp = [nums[nums.length-1]];
        console.log('temp:', temp);
        nums.pop(nums.length-1);
        console.log('nums after pop:',nums);
        nums = temp.concat(nums);
        console.log('nums2 after concat:', nums);
        k--;
        if(k === 0) {
            console.log('k is now 0, return nums',nums)
        }
    }
    console.log('nums at the end:',nums)
    return nums;
}; */

console.log(rotate(nums,k))
/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

My approach:
k is the counter
whiie loop k>0
create a temp variable
copy last index value to the temp var
pop num.length-1
push temp var...push didn't work, concat temp & nums
decrement counter

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

/* var rotate = function(nums, k) {
    k -= nums.length * Math.floor(k / nums.length);
    console.log(k)
    nums.push.apply(nums, nums.splice(0, k));
    return nums;
  } */