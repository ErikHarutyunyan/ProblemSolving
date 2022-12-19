/**
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
Example 1:

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

 */

/* const searchBST = function (root, val) {
  if (root === null) return null;
  if (val === undefined) return root;
  let cur = root;
  while (cur) {
    if (cur.val == val) return cur;
    else if (val < cur.val) cur = cur.left;
    else cur = cur.right;
  }
  return null;
}; */

// Recursive
const searchBST = function (root, val) {
  if(val === undefined) return root;
  if (!root) return null
  if (root.val === val) return root;
  if (root.val > val ) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
}

// Time Complexity: O(logn)
// Space Complexity: O(1)
