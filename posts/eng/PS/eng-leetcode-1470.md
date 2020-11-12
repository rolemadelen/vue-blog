## Shuffle the Array

[LeetCode #1470](https://leetcode.com/problems/shuffle-the-array/)

Given the array nums consisting of 2n elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.

Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.

## Solution in C++

```cpp
/*
 * Runtime: 8 ms, faster than 89.28%.
 * Memory Usage: 10.3 MB, less than 100.00%.
*/

class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        vector<int> result;
        
        for (int i=0; i<n; ++i)
        {
            result.push_back(nums[i]);
            result.push_back(nums[n+i]);
        }
        
        return result;
    }
};
```