## Shuffle the Array

[LeetCode #1470](https://leetcode.com/problems/shuffle-the-array/)

Given the array nums consisting of 2n elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.

Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.

## Solution in JS

```rb
# Runtime: 48 ms, faster than 89.60%.
# Memory Usage: 210.7 MB, less than 61.85% 

def shuffle(nums, n)
    result = []
    
    1.upto(n) do |i|
        result << nums[i-1];
        result << nums[n+(i-1)]
    end
    result
end
```