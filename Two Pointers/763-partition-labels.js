/**
 * @param {string} s
 * @return {number[]}
 */
const s = "ababcbacadefegdehijhklij"

var partitionLabels = function(s) {
    const lastIndex = {}; //instantiate object

    for(let om=0;om<s.length;om++) {
        lastIndex[s[om]] = om;
        //as om(object map) iterates through the array, it updates the last index value of the index's value character
        //console.log(lastIndex); //uncomment console.log(lastIndex) to see the progression and final character:last index pair
    }
    
    let output = []; //sets the output in array form as requested
    let leftP = 0;
    let lastOcc = 0;

    for(let i=0;i<s.length;i++) {
        lastOcc = Math.max(lastOcc, lastIndex[s[i]]);
        //as i iterates through the array, lastOcc is updated to the highest ending index of each character in the partition
        //console.log('leftP',[s[i]],'at index',i,'| lastOcc index', lastOcc, ':', output);
        if(i === lastOcc) {
            //if i (index of character) matches the lastOcc index, the length of the partition is calculated by subtracting leftP index from lastOcc index, then adding one as index starts at zero
            //console.log([s[i]],'Matches:',[s[i]],(lastOcc - leftP + 1),'gets pushed to output[]');
            output.push(lastOcc - leftP + 1);
            //leftP stays pointing at the start of the partition while i iterates through the array. Size of the partition is calculated by subracting the leftP index from lastOcc index + 1 as index starts at zero
            //console.log('output =', output)
            leftP = lastOcc + 1;
            //leftP is set to the first character inndex of the next partition
        }
    }
    return output;
};
//118 / 118 test cases passed.      Status: Accepted
//Runtime: 76 ms, faster than 88.25% of JavaScript online submissions for Partition Labels.
//Memory Usage: 44.7 MB, less than 38.99% of JavaScript online submissions for Partition Labels.
console.log(partitionLabels(s));
/*
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

My approach:
create a hashmap/obj key=letter, value=last occurance index
create empty array to store partition lengths - output[]
leftP=0, lastOcc=0
lastOcc get updated to leftP[index] of map value for key of leftP, assign to end
if leftP == lastOcc, size=1, add size to output[], reset size & end
leftP+1, increment size+1, check leftP value, and compare the value of its key in map, update if larger
repeat
when leftP reaches lastOcc[index], .push(size) to ouput, reset and repeat


Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]
*/