/**
 * @param {number[]} height
 * @return {number}
 */
const height = [1,8,6,2,5,4,8,3,7];

var maxArea = function(height) {
    leftP=0
    rightP=height.length-1
    maxVolume=0

    while(leftP < rightP) {
        volume = (rightP - leftP) * Math.min(height[leftP], height[rightP]);
        maxVolume = Math.max(maxVolume, volume);
        console.log('Volume:',volume);
        console.log('Most Volume:',maxVolume)
        
        if(height[leftP] < height[rightP]) {
            console.log('leftP[i]:', leftP, 'rightP[i]:', rightP);
            leftP += 1;
            console.log('Increment leftP, next volume');
        } else {
            console.log('leftP[i]:', leftP, 'rightP[i]:', rightP)
            rightP -= 1;
            console.log('Increment rightP, next volume')
        }
    }
    return maxVolume;
};
//60 / 60 test cases passed.        Status: Accepted
//Runtime: 103 ms, faster than 55.28% of JavaScript online submissions for Container With Most Water.
//Memory Usage: 49.4 MB, less than 79.75% of JavaScript online submissions for Container With Most Water.
console.log(maxArea(height));
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

My approach:
 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/