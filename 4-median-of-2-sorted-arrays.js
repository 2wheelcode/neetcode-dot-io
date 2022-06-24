/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const nums1 = [1,3], nums2 = [2]

var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((function(a, b){return a-b}));
    console.log(merged)
    console.log(merged.length)
    console.log(0 === (merged.length / 2) % 0)

    return merged.length % 2 !== 0 ? 
        merged[Math.round((merged.length - 1) / 2)] :
        (merged[Math.round((merged.length - 1) / 2)] + merged[Math.round((merged.length - 1) / 2)-1]) / 2;
};
//2094 / 2094 test cases passed.        Status: Accepted
//Runtime: 137 ms, faster than 63.35% of JavaScript online submissions for Median of Two Sorted Arrays.
//Memory Usage: 48.3 MB, less than 33.77% of JavaScript online submissions for Median of Two Sorted Arrays.
console.log(findMedianSortedArrays(nums1, nums2));
/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

*/