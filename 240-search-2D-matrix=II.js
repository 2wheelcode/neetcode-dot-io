/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
const target = 20;

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
//129 / 129 test cases passed.      Status: Accepted
//Runtime: 585 ms, faster than 70.41% of JavaScript online submissions for Search a 2D Matrix II.
//Memory Usage: 44.8 MB, less than 84.82% of JavaScript online submissions for Search a 2D Matrix II.
searchMatrix(matrix, target);
console.log(searchMatrix(matrix, target))

/*
[1, 4, 7, 11,15]
[2, 5, 8, 12,19]
[3, 6, 9, 16,22]
[10,13,14,17,24]
[18,21,23,26,30]
Start with pointers at TR & BL, this eliminates half the matrix, a binary search elimination

Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
*/