## XOR Operation in an Array

[LeetCode #1486](https://leetcode.com/problems/xor-operation-in-an-array/)

Given an integer `n` and an integer `start`.

Define an array `nums` where `nums[i] = start + 2*i` (0-indexed) and `n == nums.length`.

Return the bitwise XOR of all elements of `nums`.

## Solution in Ruby

```rb
# Runtime: 56 ms, faster than 37.50%
# Memory Usage: 210 MB, less than 6.25%
def xor_operation(n, start)
  result = start
  for i in (1...n) do 
    result = result ^ (start + 2*i) 
  end

  result
end
```