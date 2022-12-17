/**
Binary Tree Inorder Traversal

Companies
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = []
Output: []
 */

const rec = function (node, arr) {
  if (!node) return;
  rec(node.left, arr);
  arr.push(node.val);
  rec(node.right, arr);
};
const inorderTraversal = function (root) {
  let arr = [];
  rec(root, arr);
  return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
