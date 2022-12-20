/*
110. Balanced Binary Tree
Companies
Given a binary tree, determine if it is  height-balanced
.
*/

const isBalanced = function (root) {
  if (root === null) {
    return true;
  }

  const recBalanced = function (root) {
    let leftDepth = 0;
    let maxDepths = 0;
    let rightDepth = 0;

    if (!root) return 0;

    leftDepth = recBalanced(root.left);
    rightDepth = recBalanced(root.right);
    maxDepths = 1 + Math.max(leftDepth, rightDepth);

    if (
      Math.abs(leftDepth - rightDepth) > 1 ||
      leftDepth === null ||
      rightDepth === null
    )
      return null;

    return maxDepths;
  };

  if (recBalanced(root) === null) {
    return false;
  }

  return true;
};

// Time Complexity O(n)
// Space Complexity O(1)
