/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const intervals = [[1,3],[2,6],[8,10],[15,18]];
//const intervals = [[1,4],[4,5]];

var merge = function(intervals) {
    // begin with sorting by start time
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    console.log('sorted intervals:', intervals);
    console.log('merged intervals:', merged);
    

    for(const interval of intervals) {
        let i = merged.length - 1;
        
            //If the start of the interval is larger than the end of the previous interval, there is no overlap and it can be pushed to merged without modification.
        if(merged.length === 0 || interval[0] > merged[i][1]) {
            merged.push(interval);
            console.log('merged in if:', [i], 'interval:', interval, 'merged:', merged);
        } else {
            // Else the most recent merged interval overlaps with the current and the current interval.
            merged [i][1] = Math.max(interval[1], merged[i][1]);
            console.log(interval[1], merged[i][1]);
            console.log('merged in else:', [i], 'interval:', interval, 'merged:', merged);
        }
    }
    console.log('final:', merged)
    return merged;
};
merge(intervals);
//169 / 169 test cases passed.      Status: Accepted
//Runtime: 103 ms, faster than 93.64% of JavaScript online submissions for Merge Intervals.
//Memory Usage: 48.4 MB, less than 91.06% of JavaScript online submissions for Merge Intervals.

/*
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/