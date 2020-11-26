## Find Numbers with Even Number of Digits
[LeetCode #1295](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

Given an array `nums` of integers, return how many of them contain an `even number` of digits.

## Solution in JS

```js
/**
 * Runtime: 80 ms, faster than 75.32%
 * Memory Usage: 39.1 MB, less than 77.61%
 */
var findNumbers = function(nums) {
    let result = 0;
    
    nums.forEach(e => {
        if (e.toString().length % 2 == 0) ++result;
    });
    
    return result;
};
```