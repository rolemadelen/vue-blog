## Daily Coding Problem 2

This question was recently asked by Uber.

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

## Solution

```rb
# time: O(n)
def dcp2_div(arr)
  product = arr.inject(:*) 
  arr.each_with_index do |x, i|
    arr[i] = product/x
  end
end

# time: O(n^2)
# memory: O(1)
def dcp2_naive(arr)
  size = arr.size
  new_arr = [1]*size

  for i in 0...size
    for j in 0...size
      next if j == i
      new_arr[i] *= arr[j]
    end
  end

  new_arr
end

# time: O(n)
# memory: O(n)
def dcp2_better?(arr)
  storage = arr.clone
  new_arr = []

  arr.each do
    x = storage.shift()
    new_arr.push(storage.inject(:*))
    storage.push(x)
  end

  new_arr
end
```