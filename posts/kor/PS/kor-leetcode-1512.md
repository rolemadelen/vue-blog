## Number of Good Pairs
[LeetCode #1512](https://leetcode.com/problems/number-of-good-pairs/)

Given an array of integers `nums`.

A pair `(i,j)` is called good if `nums[i] == nums[j]` and `i < j`.

Return the number of good pairs.

## Solution in JS

### Linear Time Complexity
```js
/**
 * Runtime: 80 ms, faster than 47.12%.
 * Memory Usage: 38.4 MB, less than 56.81%.
 */
var numIdenticalPairs = function(nums) {
    let cnt = 0;
    for(let i=0; i<nums.length; ++i) {
        for(let j=i+1; j<nums.length; ++j) {
            if (nums[i] == nums[j]) ++cnt;
        }
    }
    return cnt;
};
```