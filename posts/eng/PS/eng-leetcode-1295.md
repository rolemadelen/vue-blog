## Find Numbers with Even Number of Digits
[LeetCode #1295](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

Given an array `nums` of integers, return how many of them contain an `even number` of digits.

## Solution in C++

```cpp
/**
 * Runtime: 12 ms, faster than 38.52%
 *Memory Usage: 10.2 MB, less than 53.11%
 */
class Solution {
  public:
    int findNumbers(vector<int>& nums) {
      int result = 0;

      for(int x : nums) 
      {
        int cnt = 0;
        while (x>0) {
          ++cnt;
          x /= 10;
        }

        result = (cnt & 1) ? result : result + 1;
      }

      return result;
    }
};
```