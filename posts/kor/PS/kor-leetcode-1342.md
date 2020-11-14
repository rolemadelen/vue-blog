## Number of Steps to Reduce a Number to Zero
[LeetCode #1342](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

Given a non-negative integer `num`, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

## Solution in JS

```js
/**
 * Runtime: 80 ms, faster than 65.29%
 * Memory Usage: 38.8 MB, less than 26.72% 
 */
var numberOfSteps  = function(num) {
    let cnt = 0;
    
    while (num > 0) {
        if ((num & 1) == 0) num = num / 2;
        else num -= 1;
        ++cnt;
    }
    
    return cnt;
};
```