## Create Target Array in the Given Order
[LeetCode #1389](https://leetcode.com/problems/create-target-array-in-the-given-order/)

Given two arrays of integers `nums` and `index`. Your task is to create target array under the following rules:

- Initially target array is empty.
- From left to right read `nums[i]` and `index[i]`, insert at index `index[i]` the value `nums[i]` in target array.
- Repeat the previous step until there are no elements to read in `nums` and `index`.

Return the target array.

It is guaranteed that the insertion operations will be valid.

## Solution in Ruby

```rb
# Runtime: 40 ms, faster than 90.00% 
# Memory Usage: 210 MB, less than 10.00% 
def create_target_array(nums, index)
  result = []
  for i in (0...index.size) do
    result.insert(index[i], nums[i]) 
  end

  result
end
```