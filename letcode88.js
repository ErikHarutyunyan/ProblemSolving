/**
Merge Sorted Array

Companies
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

const merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m++] = nums2[i];
  }
  nums1 = nums1.sort((a, b) => a - b);
  return nums1;
};

// Space complexity: O(1)
// Time complexity: O(nlogn)
