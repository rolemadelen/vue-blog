## Check If Two String Arrays are Equivalent
[LeetCode #1662](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

Given two string arrays `word1` and `word2`, return `true` if the two arrays represent the same string, and false otherwise.

A string is **represented** by an array if the array elements concatenated **in order** forms the string.

## Solution in JS

```js
/**
 * Runtime: 84 ms, faster than 100.00%
 * Memory Usage: 38.8 MB, less than 100.00%
 */
var arrayStringsAreEqual = function(word1, word2) {
  let str1 = word1.join('');
  let str2 = word2.join('');

  if (str1.length != str2.length) {
    return false;
  }

  for (let i=0; i<str1.length; ++i) {
    if (str1[i] != str2[i])
      return false;
  }

  return true;
};
```