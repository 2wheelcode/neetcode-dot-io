/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//let nums = [];
let nums = [-1,0,3,5,9,12];
let target = 4;
//console.log('array', nums);
//console.log('array length', nums.length);
//console.log('index of array length', [nums.length - 1]);

var search = function(nums, target) {
    //if(nums.length = 0) return 'The array is empty';
    //console.log('Passed Inside:', nums, 'target value:', target);
    let i = 0;
    let j = (nums.length-1);
    //console.log('index i/value:', i, '/', nums[i]);
    //console.log('index j/value:', j, '/', nums[j]);
    //console.log('nums.length:', nums.length);

    while(i <= j){
        center = Math.floor((i + j) / 2);
        //console.log(`center index:`,[center], `center value:`, nums[center]);
        //console.log(`target value:`,target);
        if(nums[center] === target) {
            return center;
        } else if(target > nums[center]) {
            i = center + 1;
        } else {
            j = center - 1;
        }
    }
    //console.log(`console.log(`,center,`);`, `nums value:`,nums[center],`; target:`, target)
    return  -1;
};
console.log(search(nums, target));
//47 / 47 test cases passed.        Status: Accepted
//Runtime: 69 ms, faster than 89.70% of JavaScript online submissions for Binary Search.
//Memory Usage: 45.3 MB, less than 32.25% of JavaScript online submissions for Binary Search.


/*
The array is sorted in ascending order
return target
Binary search
*/

/* 
Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 */