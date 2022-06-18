/**
 * @param {string} s
 * @return {boolean}
 */

/*
Brute Force plan:
1).X?() method that removes all spaces and non 
alpha-numeric characters. Can't remember the name,
have to google this one -> .replace(/[^A-Za-z0-9]/g, '')
2).toLowerCase() method to eliminate case sensitivity
3).join('') method. Do I need this? -> no .replace(/[^A-Za-z0-9]/g, '')
remove spaces and does not convert str to an array. However
.replace(/\W/g, '') leaves the underscore '_' in and causes failure
4)Two pointer while loop;
a)start at opposing ends of s
b)compare each value front to back === back to front
Return Boolean
*/

var isPalindrome = function(s) {
    let str = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); 
    console.log(str);
    let front = 0;
    let back = str.length-1;
    
    while (front < back) {
        if(str[front] !== str[back]) return false;
        front++;
        back--;
    }
    return true;
};

//Runtime: 81 ms, faster than 83.30% of JavaScript online submissions for Valid Palindrome.
//Memory Usage: 44.5 MB, less than 68.62% of JavaScript online submissions for Valid Palindrome.


/* 
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome. 
Input: s = "race car"
Output: true
Explanation: "racecar" is a palindrome. 
*/