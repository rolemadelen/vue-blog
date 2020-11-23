## Check If Two String Arrays are Equivalent
[LeetCode #1662](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

Given two string arrays `word1` and `word2`, return `true` if the two arrays represent the same string, and false otherwise.

A string is **represented** by an array if the array elements concatenated **in order** forms the string.

## Solution in Ruby

```rb
# Runtime: 48 ms, faster than 100.00%
# Memory Usage: 210 MB, less than 100.00%
def array_strings_are_equal(word1, word2)
  str1 = word1.join
  str2 = word2.join

  return false if str1.size != str2.size

  for i in (0...str1.size) do
    return false if str1[i] != str2[i] 
  end

  true
end
```