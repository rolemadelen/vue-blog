## Running Sum of 1d Array

[LeetCode #1480](https://leetcode.com/problems/running-sum-of-1d-array/)

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

## Solution in Ruby

### Linear Time Complexity
```rb
=begin
 Runtime: 52 ms, faster than 72.86% 
 Memory Usage: 210.1 MB, less than 81.12%
=end
def running_sum(nums)
    sum = nums.sum
    nums << sum;
    
    (nums.size-2).downto(0) do |i|
        temp = nums[i]
        nums[i] = sum - nums[i];
        sum -= temp
    end
    
    nums.shift
    nums
end
```