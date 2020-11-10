## Daily Coding Problem 4

This question was recently asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input `[3, 4, -1, 1]` should give `2`. The input `[1, 2, 0]` should give `3`.

You can modify the input array in-place.

## Solution

```rb
def dcp4_naive(arr)
  size = arr.size

  for i in 1..size
    if (arr.include? i) == false
      return i
    end
  end

  return size+1
end

def dcp4_hash(arr)
  size = arr.size
  hash = Hash[arr.map {|x| [x, x]}]

  for i in 1..size
    if (hash.include? i) == false
      return i
    end
  end

  return size+1
end


def dcp4_optimized(arr)
  size = arr.size
  arr.push(0)

  out_of_range = ->(x) {
    return x < 1 || x > size
  }

  for i in 0...size
    while true
      break if out_of_range.call(arr[i])
      
      correct = arr[i]
      break if arr[correct] == arr[i]

      arr[i], arr[correct] = arr[correct], arr[i]
    end
  end

  for i in 1..size
    if arr[i] != i
      return i
    end
  end

  return size+1
end
```