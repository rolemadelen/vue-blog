## Find Numbers with Even Number of Digits
[LeetCode #1295](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

Given an array `nums` of integers, return how many of them contain an `even number` of digits.

## Solution in Ruby

```rb
# Runtime: 48 ms, faster than 95.38%
# Memory Usage: 210.2 MB, less than 65.38%

def find_numbers(nums)
  result =  0

  for x in nums do
    if x.to_s.length % 2 == 0
      result += 1
    end
  end

  result
end
```