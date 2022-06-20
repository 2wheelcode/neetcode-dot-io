/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [100, 4, 200, 1, 3, 2]
//const nums = [0,3,7,2,5,8,4,6,0,1]

 var longestConsecutive = function(nums) {
    if(nums.length <= 1) return nums.length;
    // short circuit, if array.length <= 1 can only be 0 or 1, return array.length
    const numSet = new Set(nums);
    //console.log(numSet); // verify that numSet is array converted to object
    let longest = 0;
    for(const [num] of numSet.entries()) {
        if(!numSet.has(num - 1)) {
            let temp = num;
            let count = 0;
            while(numSet.has(temp)) {
                count++;
                temp++;
            }
            if(count > longest) {
                longest = count;
            }
        }   
    }
    return longest;
}
console.log(longestConsecutive(nums));
//71 / 71 test cases passed.        Status: Accepted
//Runtime: 114 ms, faster than 86.85% of JavaScript online submissions for Longest Consecutive Sequence.
//Memory Usage: 61.4 MB, less than 20.19% of JavaScript online submissions for Longest Consecutive Sequence.

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/