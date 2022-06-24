/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [10,9,2,5,3,7,101,18]
/* //This was a JS conversion of Neetcode's .py solution. Can't make it work.
var lengthOfLIS = function(nums) {
    let LIS = [1] //* nums.length;
    console.log(LIS)

    for(let i=nums.length-1;i>=0;i--) {
        for(let j=i+1;j<i;j++);
        if(nums[i] < nums[j]) {
            console.log(nums[i] < nums[j])
            console.log(LIS, i)
            LIS = Math.max(LIS[i], 1 + LIS[j]);
            console.log(LIS)
        }
    }
    return Math.max(LIS);
}; */

var lengthOfLIS = function(nums) {
    const n = nums.length;
    const lisArray = Array(n).fill(0);
    let result = 0;
    for(let i = 0; i < n ; i++ ) {
        let max = 0;
        for(let j = 0 ; j < i ; j++ ) {
            if(nums[j] < nums[i] && max < lisArray[j])
                max = lisArray[j];
        }
        lisArray[i] = max + 1;
        result = Math.max(lisArray[i],result);
    }
    return result;
};
//Runtime: 238 ms, faster than 39.70% of JavaScript online submissions for Longest Increasing Subsequence.
//Memory Usage: 44 MB, less than 42.10% of JavaScript online submissions for Longest Increasing Subsequence.
console.log(lengthOfLIS(nums));


/*
Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/