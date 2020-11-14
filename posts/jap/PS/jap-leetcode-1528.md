## Number of Good Pairs
[LeetCode #1528](https://leetcode.com/problems/shuffle-string/)

Given a string `s` and an integer array `indices` of the same length.

The string `s` will be shuffled such that the character at the ith position moves to `indices[i]` in the shuffled string.

Return the shuffled string.

## Solution in Ruby

```rb
# Runtime: 68 ms, faster than 41.18%
# Memory Usage: 210.4 MB, less than 36.97%
def restore_string(s, indices)
    result = 'a' * indices.size
    j = 0
    indices.each do |i|
        result[i] = s[j] 
        j += 1
    end
    
    return result
end
```