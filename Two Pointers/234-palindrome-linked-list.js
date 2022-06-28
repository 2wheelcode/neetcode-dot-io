/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//const head = [1->2->2->1];
const head = [1,2];

var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let prev = null;
    
    //this will find the middle of the list
    while (fast && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    //reverse the second half of the list
    while(slow) {
        //need to store a temporary variable to reverse prev & slow
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    //check if palindrome
    let begin = head;
    let end = prev;
    while(end) {
        if(begin.val != end.val) {
            return false;
        }
        begin = begin.next;
        end = end.next;
    }
    return true;
};
console.log(isPalindrome(head))
/*
Given the head of a singly linked list, return true if it is a palindrome.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
*/