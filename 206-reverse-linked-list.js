/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
 // Iterative time: O(n) memory: 0(1)
 var reverseList = function(head) {
    let next = null;
    let prev = null;

    while(head) {
        next = next.head;
        head.next = prev;
        prev = head;
        head = next;
    }
    head = prev;
    return head;
};

//28 / 28 test cases passed.        Status: Accepted
//Runtime: 73 ms, faster than 81.51% of JavaScript online submissions for Reverse Linked List.
//Memory Usage: 43.6 MB, less than 97.90% of JavaScript online submissions for Reverse Linked List.