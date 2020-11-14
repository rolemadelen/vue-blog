## Number of Good Pairs
[LeetCode #1512](https://leetcode.com/problems/number-of-good-pairs/)

Given an array of integers `nums`.

A pair `(i,j)` is called good if `nums[i] == nums[j]` and `i < j`.

Return the number of good pairs.

## Solution in Ruby

### Linear Time Complexity
```cpp
/**
* Runtime: 4 ms, faster than 54.71%
* Memory Usage: 7.5 MB, less than 56.34%
*/
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int cnt = 0;
        for (int i=0; i<nums.size(); ++i)
        {
            for (int j=i+1; j<nums.size(); ++j)
            {
                if (nums[i] == nums[j]) ++cnt;
            }
        }
        
        return cnt;
    }
};
```