/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const listA = [4,1,8,4,5];
const listB = [5,6,1,8,4,5];
const headA = listA[0];
const headB = listB[0];
console.log(headA)
console.log(headB)
//Can't get this one to test

var getIntersectionNode = function(headA, headB) {
    let firstPointer = headA;
    let secondPointer = headB;

    while(firstPointer != secondPointer) {
        //each pointer will progress forward one index value at a time equally. If one list is longer than the other,or skip condition, pointer on shorter list will switch to the head of the other list, eventually intersecting with each other. If the lists to not intersect, they will intersect at null, resulting in return null
        //ternary operator (?), replaces if else statement
        //while condition ? if true, firstPointer.next : else false, headB
        firstPointer = firstPointer ? firstPointer.next : headB;
        //while condition ? if true, secondPointer.next : else false, headA
        secondPointer = secondPointer ? secondPointer.next : headA;
        //console.log('firstPointer[i]:', firstPointer[i]);
        //console.log('secondPointer[i]:', secondPointer[i]);
    }
    return firstPointer;
};
//39 / 39 test cases passed.        Status: Accepted
//Runtime: 95 ms, faster than 91.72% of JavaScript online submissions for Intersection of Two Linked Lists.
//Memory Usage: 49.4 MB, less than 91.96% of JavaScript online submissions for Intersection of Two Linked Lists. 108 ms
getIntersectionNode(headA, headB);
/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

 

Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
Example 2:


Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
Example 3:


Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
*/