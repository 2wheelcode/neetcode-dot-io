/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    console.log(row, col);
    
    //Start with pointers at TR & BL, this eliminates half the matrix, a binary search elimination
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] === target) {
            //If targt found, return true
            return true;
        } else if (matrix[row][col] < target) {
            //If Row-Last col < target, eliminate row, move down to next row
            row++;
        } else {
            //If Row-Last col > target, eliminate col, move left to next col
            col--;
        }
    }
    //If targt not found, return false
    return false;
};
//133 / 133 test cases passed.      Status: Accepted
//Runtime: 96 ms, faster than 29.37% of JavaScript online submissions for Search a 2D Matrix.
//Memory Usage: 42 MB, less than 79.33% of JavaScript online submissions for Search a 2D Matrix.

console.log(searchMatrix(matrix, target))

/*
[ 1, 3, 5, 7]
[10,11,16,20]
[23,30,34,60]

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/