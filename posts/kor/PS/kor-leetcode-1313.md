## Decompress Run-Length Encoded List
[LeetCode #1313](https://leetcode.com/problems/decompress-run-length-encoded-list/)

We are given a list `nums` of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements `[freq, val] = [nums[2*i], nums[2*i+1]]` (with `i >= 0`).  For each such pair, there are `freq` elements with value `val` concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

## Solution in JS

```js
/**
 * Runtime: 100 ms, faster than 50.06%
 * Memory Usage: 42.2 MB, less than 66.48%
 */
var decompressRLElist = function(nums) {
  let result = []

  for (let i=0; i<nums.length; i+=2) {
    let f = nums[i];
    let v = nums[i+1];

    for (let j=0; j<f; ++j) {
      result.push(v);
    }
  }

  return result;
};
```