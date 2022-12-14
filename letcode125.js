/**
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:

    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
    Example 2:

    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
    Example 3:

    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
    

    Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
*/

const isPalindrome = function (s) {
  // O(n)
  let charStr = [];
  // O(1)
  if (s.length === 1) return true;
  // O(n)
  for (let i = 0; i < s.length; i++) {
    if (
      ("a".charCodeAt(0) <= s[i].charCodeAt(0) &&
        s[i].charCodeAt(0) <= "z".charCodeAt(0)) ||
      ("0".charCodeAt(0) <= s[i].charCodeAt(0) &&
        s[i].charCodeAt(0) <= "9".charCodeAt(0))
    ) {
      charStr.push(s[i].charCodeAt(0));
    } else if (
      "A".charCodeAt(0) <= s[i].charCodeAt(0) &&
      s[i].charCodeAt(0) <= "Z".charCodeAt(0)
    ) {
      charStr.push(
        s[i].charCodeAt(0) + ("a".charCodeAt(0) - "A".charCodeAt(0))
      );
    }
  }
  //O(1)
  if (charStr.length === 0) return true;
  // O(n/2) = O(n)
  for (let i = 0; i < charStr.length / 2; i++) {
    if (charStr[i] !== charStr[charStr.length - i - 1]) {
      return false;
    }
  }
  return true;
};
// Time Complexity O(n)
// Space Complexity O(n)
