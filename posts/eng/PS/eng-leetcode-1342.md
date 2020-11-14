## Number of Steps to Reduce a Number to Zero
[LeetCode #1342](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

Given a non-negative integer `num`, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

## Solution in C++

```cpp
/**
* Runtime: 0 ms, faster than 100.00% 
* Memory Usage: 6.3 MB, less than 31.73%
*/
class Solution {
public:
    int numberOfSteps (int num) {
        int cnt = 0;
        while (num > 0) {
            if (num&1 == 1) --num;
            else num >>= 1;
            
            ++cnt;
        }
        return cnt;
    }
};
```