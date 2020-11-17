## Decompress Run-Length Encoded List
[LeetCode #1313](https://leetcode.com/problems/decompress-run-length-encoded-list/)

We are given a list `nums` of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements `[freq, val] = [nums[2*i], nums[2*i+1]]` (with `i >= 0`).  For each such pair, there are `freq` elements with value `val` concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

## Solution in C++

```cpp
/*
 * Runtime: 4 ms, faster than 95.70% 
 * Memory Usage: 10.2 MB, less than 83.96%
 */
class Solution {
  public:
    vector<int> decompressRLElist(vector<int>& nums) {
      vector<int> result;
      for(int i=0; i<nums.size(); i+=2) 
      {
        int freq = nums[i];
        int val = nums[i+1];

        for(int j=0; j<freq; ++j)
        {
          result.push_back(val);
        }
      }
      return result;
    }
};
```