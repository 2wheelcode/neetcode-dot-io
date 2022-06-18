/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2,7,11,15];
let target = 9;


 var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        for (let j=nums.length-1; j<=i; j--) {
            if(target === nums[i] + nums[j]) return [i, j]
        }
    }
    return null;
};
//Runtime: 135 ms. Your runtime beats 39.60 % of javascript submissions.
//Memory Usage: 41.9 MB. Your memory usage beats 95.44 % of javascript submissions.


/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

do two numbers in an array add up to sum?
for (i=0;i<nums.length; i++)
for (j=0;j<nums.length-1;j--){
    if(target === nums[i] + nums[j])return [[i],[j]]
}

for(i=0; i<big.length; i++)
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/