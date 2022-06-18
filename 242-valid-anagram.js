/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* const t = "abc";
const s = "ab"; */
const t = "Bentley";
const s = "Bentlay";
/* const t = "anagram";
const s = "nagaram"; */
console.log(s);
console.log(t);

 var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
        // Impossible if words are not the same length
    sSorted = s.split('').sort().join('');
    tSorted = t.split('').sort().join('');
    console.log(sSorted);
    console.log(tSorted);

    return sSorted === tSorted;
};
console.log(isAnagram(s, t))
//36 / 36 test cases passed.      Status: Accepted
//Runtime: 113 ms. Your runtime beats 54.69 % of javascript submissions.
//Memory Usage: 49.2 MB. Your memory usage beats 10.49 % of javascript submissions.


/*
1-are they the same length? -> no = false
2-sort words
4-compare index value
*/


/*
function anagrams(stringA, stringB) {
return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}   
*/
//anagrams('monk','konm')