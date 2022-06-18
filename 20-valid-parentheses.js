/**
 * @param {string} s
 * @return {boolean}
 */

let s = "{{((([[[()]]])))}}"
//let s = "(){}[]"
var isValid = function(s) {
    const parMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    const parStr = [];

    for (let par of s) {
        if(par in parMap) parStr.push(par)
        else {
            const closePar = parStr.pop();
            if(parMap[closePar] != par) return false;
        }
    }
    return parStr.length === 0;
};
console.log(isValid(s))
//Leetcode submission: 91 / 91 test cases passed.      Status: Accepted
//Runtime: 75 ms, faster than 69.80% of JavaScript online submissions for Valid Parentheses.
//Memory Usage: 42.1 MB, less than 73.61% of JavaScript online submissions for Valid Parentheses.


/* 
Building the Object HashMap
const parenthesesMap = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
} */
