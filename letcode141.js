/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

*/

/* const hasCycle = function (head) {
  let ptr = head;
  let tmp = head;
  while (tmp && ptr.next) {
    ptr = ptr.next;
    tmp = tmp.next.next;
    if (ptr === tmp) return true;
  }
  return false;
}; */

 const hasCycle = function (head) {
   function rec(tmp, ptr) {
        if(!tmp || !ptr.next) return false;
        if(tmp.next === ptr) return true;
        return run(tmp.next.next, ptr.next);
    }
    return rec(head, head);
 }

// Space complexity: O(1)
// Time complexity: O(n)
