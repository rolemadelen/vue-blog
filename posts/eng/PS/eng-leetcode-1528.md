## Number of Good Pairs
[LeetCode #1528](https://leetcode.com/problems/shuffle-string/)

Given a string `s` and an integer array `indices` of the same length.

The string `s` will be shuffled such that the character at the ith position moves to `indices[i]` in the shuffled string.

Return the shuffled string.

## Solution in C++

```cpp
/**
 * Runtime: 8 ms, faster than 94.80% 
 * Memory Usage: 15.4 MB, less than 63.23%
 */
class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        string result (indices.size(), 'a');
        int j=0;
        for(int i : indices) 
        {
            result[i] = s[j++];
        }
        
        return result;
    }
};
```