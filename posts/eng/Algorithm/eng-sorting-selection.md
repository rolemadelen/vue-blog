
## Selection Sort
- Unlike [insertion sort](./en-algorithm-sorting-insertion) where you find the correct position by shifting its data one by one, selection sort selects the data that goes to position 1, 2, ..., n.

<div class="divider"></div>

## Algorithm Summary
- Find the smallest data and move it to `arr[0]`.
  + find the 2nd smallest data and move it to `arr[1]`.
  + find the `n`th smallest data and  move it to `arr[n-1]`.
- First `n` elements are sorted after `n` iterations.

<div class="divider"></div>

## The code

```rb
def selection_sort(arr)
  n = arr.size

  for i in (0 ... n - 1)
    min = i

    # find the ith smallest element
    for j in (i+1 ... n)
      if arr[j] < arr[min]
        min = j
      end
    end

    # insert the found data into a correct position
    arr[i], arr[min] = arr[min], arr[i]
  end
end

arr = [*1 ... 100].shuffle

print arr
puts

selection_sort(arr)

print arr
puts
```


<div class="divider"></div>

## Time Complexity

#### best case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `0`
- <b>T(n) = O(n<sup>2</sup>)</b>

#### worst case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `n-1`
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
