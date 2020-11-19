## XOR Operation in an Array

[LeetCode #1486](https://leetcode.com/problems/xor-operation-in-an-array/)

Given an integer `n` and an integer `start`.

Define an array `nums` where `nums[i] = start + 2*i` (0-indexed) and `n == nums.length`.

Return the bitwise XOR of all elements of `nums`.

## Solution in C++

```cpp
/**
 * Runtime: 0 ms, faster than 100.00%
 * Memory Usage: 6.1 MB
 */
class Solution {
  public:
    int xorOperation(int n, int start) {
      int result = start;
      for(int i=1; i<n; ++i) 
      {
        result = result ^ (start + 2*i);
      }

      return result;
    }
};
```