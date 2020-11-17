## Decompress Run-Length Encoded List
[LeetCode #1313](https://leetcode.com/problems/decompress-run-length-encoded-list/)

We are given a list `nums` of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements `[freq, val] = [nums[2*i], nums[2*i+1]]` (with `i >= 0`).  For each such pair, there are `freq` elements with value `val` concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

## Solution in Ruby

```rb
# Runtime: 72 ms, faster than 85.11%
# Memory Usage: 210.5 MB, less than 82.98%
def decompress_rl_elist(nums)
    result = []
    
    for i in (0...nums.size()).step(2) do
        f = nums[i]
        v = nums[i+1]
        
        1.upto(f) do
            result << v 
        end
    end
    
    result
end
```