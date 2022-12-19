const insertionSortList = function (head) {
  let cur, newList, ptr;

  if (head === null || head.next === null) {
    return head;
  }

  newList = new ListNode(null, head);
  cur = head.next;
  head.next = null;
  head = newList;

  while (cur) {
    while (head.next && cur.val > head.next.val) {
      head = head.next;
    }

    ptr = cur.next;
    cur.next = head.next;
    head.next = cur;
    cur = ptr;
    head = newList;
  }

  return newList.next;
};
