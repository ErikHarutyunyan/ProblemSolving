function swapBit(num, i, j) {
  return (1 << i) ^ (1 << j) ^ num;
}
// Time complexity: O(1) 
// Space complexity: O(1)