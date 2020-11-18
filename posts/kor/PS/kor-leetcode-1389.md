## Create Target Array in the Given Order
[LeetCode #1389](https://leetcode.com/problems/create-target-array-in-the-given-order/)

Given two arrays of integers `nums` and `index`. Your task is to create target array under the following rules:

- Initially target array is empty.
- From left to right read `nums[i]` and `index[i]`, insert at index `index[i]` the value `nums[i]` in target array.
- Repeat the previous step until there are no elements to read in `nums` and `index`.

Return the target array.

It is guaranteed that the insertion operations will be valid.

## Solution in JS

```js
/**
 * Runtime: 80 ms, faster than 47.00%
 * Memory Usage: 38.9 MB, less than 23.33%
 */
var createTargetArray = function(nums, index) {
  let result = []
  for(let i=0; i<index.length; ++i) {
    result.splice(index[i], 0, nums[i]);
  }

  return result;
};
```