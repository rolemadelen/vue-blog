## Shuffle the Array

[LeetCode #1470](https://leetcode.com/problems/shuffle-the-array/)

Given the array nums consisting of 2n elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.

Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.

## Solution in JS

```js
/**
 * Runtime: 92 ms, faster than 35.85%.
 * Memory Usage: 40.7 MB, less than 5.02%.
 */
var shuffle = function(nums, n) {
    let result = [];
    
    for(let i=0; i<n; ++i) {
        result.push(nums[i]);
        result.push(nums[n+i]);
    }
    
    return result;
};
```