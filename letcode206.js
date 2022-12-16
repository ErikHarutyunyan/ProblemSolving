/**
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list. 

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

const reverseList = function (head) {
  if (!head) return null;
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
