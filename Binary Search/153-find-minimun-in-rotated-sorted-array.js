/**
 * @param {number[]} nums
 * @return {number}
 */
//const nums = [4,5,6,7,0,1,2]
//const nums = [3,4,5,1,2]
const nums = [3,2,1]
//const nums = [11,13,15,17]

var findMin = function(nums) {
    //It's a Binary search with a twist
    //mid = Math.floor(left+right /2)
    //if(nums[mid] >= nums[left]) 
    //look to the right of mid else look left

    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    if(nums.length <= 2) {
        //short circuit edge case for single or 2 value nums[] 
        lowest = Math.min(nums[left], nums[right])  
    }

    while(left < right) {
        if(nums[left] < nums[right])
            return nums[left];
            mid = Math.floor((left + right) / 2);

        if(nums[mid] >= nums[left]) {
            //the array is sorted, due to rotation if the smaller values are to the right of mid, we exclude left & search to the right
            left = mid + 1;  
        } else {
            //else search to left
            right = mid;
        }
    }
    //when the while loop ends, the left pointer is on the lowest value
    return nums[left];
};
//150 / 150 test cases passed.      Status: Accepted
//Runtime: 71 ms, faster than 74.58% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
//Memory Usage: 42.2 MB, less than 34.57% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.

console.log(findMin(nums));
findMin(nums);