function countBits(num) {
  let count = 0;

  while (num) {
    count += num & 1;
    num = num >> 1;
  }

  return count;
}
// Time complexity: O(logn)
// Space complexity: O(1)
