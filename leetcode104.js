/*
    104. Maximum Depth of Binary Tree

    Companies
    Given the root of a binary tree, return its maximum depth.

    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

    Example 1:

    Input: root = [3,9,20,null,null,15,7]
    Output: 3

    Example 2:

    Input: root = [1,null,2]
    Output: 2
 */

const maxDepth = function (root) {
  let depthLeft = 0;
  let depthRight = 0;

  if (!root) return null;

  if (!root.left && !root.right) return 1;

  if (root.right) depthRight = maxDepth(root.right);

  if (root.left) depthLeft = maxDepth(root.left);

  if (depthLeft >= depthRight) return depthLeft + 1;
  else return depthRight + 1;
};

// Space complexity: O(1)
// Time Complexity: O(n)
