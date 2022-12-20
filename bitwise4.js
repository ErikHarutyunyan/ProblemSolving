function reverseBit(n) {
  let shift = 31;
  let res = 0;
  while (shift != 0) {
    res |= (n & 1) << shift;
    --shift;
    n >>>= 1;
  }

  return res;
}

// Time complexity: O(1)
// Space complexity: O(1)