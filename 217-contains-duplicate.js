// Test Cases:

const nums = [1,2,3,1]
//const nums = [1,2,3,4]
//const nums = [1,1,1,3,3,4,3,2,4,2]

 /* 
 @param {number[]} nums
 @return {boolean} 
 */
 
 var containsDuplicate = function(nums) {
    for (let i=0; i<nums.length; i++) {
        for (let j=nums.length-1; j<=i; j--){
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false
};

//70 / 70 test cases passed.        Status: Accepted
//Runtime: 136 ms. Your runtime beats 45.57 % of javascript submissions.
//Memory Usage: 51.3 MB. Your memory usage beats 32.47 % of javascript submissions.


 /* var containsDuplicate = function(nums) {
    arrayMap = {};
    let hasDuplicate = false;
    
    for(i=0; i<nums.length; i++) {
        if(!arrayMap.hasOwnProperty(nums[i])) arrayMap[nums[i]] = 1;
        else {
            hasDuplicate = true;
            break;
        }
    }
    return hasDuplicate;
}; */


