## XOR Operation in an Array

[LeetCode #1486](https://leetcode.com/problems/xor-operation-in-an-array/)

Given an integer `n` and an integer `start`.

Define an array `nums` where `nums[i] = start + 2*i` (0-indexed) and `n == nums.length`.

Return the bitwise XOR of all elements of `nums`.

## Solution in JS

```js
/**
 * Runtime: 60 ms, faster than 100.00%
 * Memory Usage: 38.2 MB, less than 83.71%
 */
var xorOperation = function(n, start) {
  let result = start;

  for (let i=1; i<n; ++i) {
    result = result ^ (start + 2*i);
  }

  return result;
};
```