function countBits(num) {
  let count = 0;

  while (num) {
    count += num & 1;
    num = num >> 1;
  }

  return count;
}

function evenOrOdd(num) {
  let answer = "";

  if (countBits(num) & 1) {
    answer = "odd";
  } else {
    answer = "even";
  }

  return answer;
}
// evenOrOdd
// Time complexity: O(logn)
// Space complexity: O(1)
