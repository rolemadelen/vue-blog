## How Many Numbers Are Smaller Than the Current Number
[LeetCode #1365](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

Given the array nums, for each `nums[i]` find out how many numbers in the array are smaller than it. 
That is, for each `nums[i]` you have to count the number of valid `j`'s such that `j != i` **and** `nums[j] < nums[i]`.

## Solution in Ruby

```rb
# Runtime: 72 ms, faster than 74.00%
# Memory Usage: 210.5 MB, less than 45.00%
def smaller_numbers_than_current(nums)
  temp = nums.sort;
  table = [0]*101;

  cnt = 1
  1.upto(temp.size-1) do |i|
    table[temp[i]] = ((temp[i-1] == temp[i]) ? table[temp[i-1]] : cnt)
    cnt += 1
  end

  0.upto(nums.size - 1) do |i|
    temp[i] = table[nums[i]]
  end

  temp
end
```