/**
    Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

    Example 1:

    Input: s = "leetcode"
    Output: 0
    Example 2:

    Input: s = "loveleetcode"
    Output: 2
    Example 3:

    Input: s = "aabb"
    Output: -1
    

    Constraints:

    1 <= s.length <= 105
    s consists of only lowercase English letters.
*/

const firstUniqChar = function (s) {
  let chars = [...s];
  const obj = {};
  let key = "";
  for (let i = 0; i < chars.length; i++) {
    if (obj[chars[i]]) {
      obj[chars[i]]++;
    } else {
      obj[chars[i]] = 1;
    }
  }
  let i = 0;
  for (key in obj) {
    if (obj[key] === 1) return i;
    i++;
  }
  return -1;
};
