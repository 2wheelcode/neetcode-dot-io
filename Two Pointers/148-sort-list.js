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

var sortList = function(head) {
    //get the middle of the list, floyds algo
    //same as: var getMid = function(head){} && function getMid(head){}
    const getMid = head => {
        let slow = head; 
        let fast = head.next;

        while(fast && fast.next != null) {
            slow = slow.next; //will be middle at end of while loop
            fast = fast.next.next;
        }
        let middle = slow.next;
        slow.next = null; //severs the link at middle, creating 2 lists
        return middle;
    }

    const merge = (list1, list2) => {
        const dummy = new ListNode(null);
        let tail = dummy;

        while(list1 && list2 != null) {
            if(list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        if(list1 != null) {
            tail.next = list1;
        }
        if(list2 != null) {
            tail.next = list2;
        }
        return dummy.next;
    }
    if(!head || !head.next) {
        return head;
    }
    //split the list into two halfs
    let middle = getMid(head);
    let left = sortList(head);
    let right = sortList(middle);
    return merge(left, right);  
};
//30 / 30 test cases passed.        Status: Accepted
//Runtime: 230 ms, faster than 71.46% of JavaScript online submissions for Sort List.
//Memory Usage: 70.8 MB, less than 29.67% of JavaScript online submissions for Sort List.

/*
Given the head of a linked list, return the list after sorting it in ascending order.

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
*/