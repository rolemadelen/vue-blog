## Check If Two String Arrays are Equivalent
[LeetCode #1662](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

Given two string arrays `word1` and `word2`, return `true` if the two arrays represent the same string, and false otherwise.

A string is **represented** by an array if the array elements concatenated **in order** forms the string.

## Solution in C++

```cpp
/**
 * Runtime: 4 ms, faster than 66.67%
 * Memory Usage: 11.8 MB, less than 33.33%
 */
class Solution {
  public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
      string str1 = "";
      string str2 = "";

      for (string s : word1) 
        str1 += s;

      for (string s : word2) 
        str2 += s;

      if (str1.size() != str2.size()) 
        return false;
      else
      {    
        for (int i=0; i<str1.size(); ++i)
        {
          if (str1[i] != str2[i])
            return false;
        }
      }

      return true;
    }
};
```