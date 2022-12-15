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
