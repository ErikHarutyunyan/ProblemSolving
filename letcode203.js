/*
 Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 Example 1:
 Input: head = [1,2,6,3,4,5,6], val = 6
 Output: [1,2,3,4,5]

 Example 2:
 Input: head = [], val = 1
 Output: []

 Constraints:
 The number of nodes in the list is in the range [0, 104].
 1 <= Node.val <= 50
 0 <= val <= 50
*/

const removeElements = (head, val) => {
  if (!head) return null;
  let cur = head.next;
  let prev = head;
  while (cur) {
    if (cur.val === val) {
      cur = curr.next;
      prev.next = cur;
    } else {
      cur = cur.next;
      prev = prev.next;
    }
  }
  if (head.val === val) head = head.next;
  return head;
};
//  Time complexity: O(n)
//  Space complexity: O(1)
