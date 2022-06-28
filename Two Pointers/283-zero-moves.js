/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [0,1,0,3,12]

var moveZeroes = function(nums) {

    for (let i = nums.length; i--;) {
        if (nums[i] === 0) nums.splice(i, 1), nums.push(0);
        console.log('Loop count:',nums.length-i,'|','index:',i,'|','value:',nums[i],'|','nums[]:',nums);
    }
    //console.log('Loop count:',`${nums.length-i}`,'|','index:',i,'|','value:',nums[i],'|','nums[]:',nums);
    return nums;
};
//74 / 74 test cases passed.        Status: Accepted
//Runtime: 109 ms, faster than 76.06% of JavaScript online submissions for Move Zeroes.
//Memory Usage: 47.2 MB, less than 11.10% of JavaScript online submissions for Move Zeroes.
console.log(moveZeroes(nums));
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

My approach:
1)let zeros=0 // not needed
2)for loop: i=nums.length...work from end to start to avoid unnecessary loop cycles iterating over zeros that were added to the end
3)if nums[i] === 0,
4)remove zero at nums[i], // .splice() method
5)add zeros to end on nums // .push() method

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

// To see how it works...
/*
var moveZeroes = function(nums) {

    for (var i = nums.length; i--;) {
        if (console.log(`
        Step 1) for loop count: ${nums.length-i}. ${i} Remaining.
        Step 2) Is value ${nums[i]} == 0? If false, next loop. If true, enter condition to go to Step 3`),
            nums[i] === 0)  {
            console.log("It's",(nums[i] === 0),`we enter the if condition, go to Step 3`);  
            nums.splice(i, 1);
            console.log('Step 3) 0 at index',i, 'removed from nums[]:',nums);
            nums.push(0);
            console.log('Step 4) 0 from index',i, '.push() to the end of nums[]:',nums,'Unless final loop, return to Step 1');
        }
        //console.log('Loop count:',i+1,'|','index:',i,'|','value:',nums[i],'|','nums[]:',nums)
    }
    //console.log(nums);
    return nums;
};
*/