## Running Sum of 1d Array

[LeetCode #1480](https://leetcode.com/problems/running-sum-of-1d-array/)

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

## Solution in JS

### Linear Time Complexity
```js
/**
 * Runtime: 80 ms, faster than 66.97%
 * Memory Usage: 38.7 MB, less than 5.17%
 */
var runningSum = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    let neg = nums[nums.length-1];
    nums[nums.length-1] = sum;
    
    for (let i=nums.length-2; i>=0; --i) {
        let val = sum - neg;
        neg += nums[i];
        nums[i] = val;
    }
    
    return nums;
};
```