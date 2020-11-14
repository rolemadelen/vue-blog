## Number of Good Pairs
[LeetCode #1512](https://leetcode.com/problems/number-of-good-pairs/)

Given an array of integers `nums`.

A pair `(i,j)` is called good if `nums[i] == nums[j]` and `i < j`.

Return the number of good pairs.

## Solution in Ruby

### Linear Time Complexity
```rb
# Runtime: 48 ms, faster than 79.58%
# Memory Usage: 209.7 MB, less than 70.42%
def num_identical_pairs(nums)
    cnt = 0
    0.upto(nums.size-1) do |i|
        (i+1).upto(nums.size-1) do |j|
            if nums[i] == nums[j]
                cnt += 1                
            end
        end
    end
    cnt
end
```