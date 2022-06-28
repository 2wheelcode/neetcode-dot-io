/**
 * @param {number[]} height
 * @return {number}
 */
const height = [0,1,0,2,1,0,1,3,2,1,2,1];

var trap = function(height) {
    leftP=0
    rightP=height.length-1
    maxL=height[leftP]
    maxR=height[rightP]
    water=0

    while(leftP < rightP) {
        if(maxL < maxR) {
            leftP = leftP+1;
            maxL = Math.max(maxL, height[leftP]);
            console.log('maxL:',maxL,'| maxR:',maxR);
            console.log('Max Height of Containment:',maxL);
            console.log('Lowest Possible Depth of Water:',height[leftP]);
            console.log('Lowest Possible Depth of Water:',height[leftP]);
            console.log('Volume Units of Water:',(maxL - height[leftP]));
            water += (maxL - height[leftP]);
            console.log('Current total Volume of Water:',water);
            console.log('Next Step -> Move Right')
        } else {
            rightP = rightP - 1;
            maxR = Math.max(maxR, height[rightP]);
            console.log('maxL:',maxL,'| maxR:',maxR);
            console.log('Max Height of Containment:',maxR);
            console.log('Lowest Possible Depth of Water:',height[rightP]);
            console.log('Lowest Possible Depth of Water:',height[rightP]);
            console.log('Volume Units of Water:',(maxR - height[rightP]));
            water += maxR - height[rightP];
            console.log('Current total Volume of Water:',water);
            console.log('Next Step -> Move Left')
        }
    }
    return water;
};
//322 / 322 test cases passed.      Status: Accepted
//Runtime: 77 ms, faster than 84.07% of JavaScript online submissions for Trapping Rain Water.
//Memory Usage: 43.2 MB, less than 47.67% of JavaScript online submissions for Trapping Rain Water.
console.log(trap(height));
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

My approach:
I will approach this as a two-pointer
start pointers on each end
will need to look for the lower max height of each to act as container
we will be looking for the min height of each index to compare to the containers, as that is the volume of containment
advance the pointers with the least max
will need to store the volume value of water contained

obviously water can't be contained without a barrier, so the outside will be set to zero
l=0
r=height.length-1
maxL=height[l]
maxR=height[r]
water=0
maxWaterLevel=((maxL-maxR)-[l or r])
water=(water+maxWaterLevel)


Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/