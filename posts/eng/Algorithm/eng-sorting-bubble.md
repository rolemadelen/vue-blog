
### Bubble Sort
Bubble sort is the simplest sorting algorithm which works by repeatedly comparing and swapping two adjacent elements if they're not in the correct order.

<div class="divider"></div>

### How it works

Imagine you have an array -- `[3, 1, 5, 4]`  -- and your task it to sort them in ascending order.

<div style="text-align: center">
<img src="assets/algorithm/sorting/bubble1.png"><br>
</div>

The idea behind bubble sort is that we're comparing and swapping adjacent elements if the left element is larger than one on the right.

<div style="text-align: center">
<img src="assets/algorithm/sorting/bubble2.png"><br>
</div>

After the first iteration (first pass), we have located the largest element (`5`) and placed it on the correct position. After the 2nd iteration, we will have the 2nd largest element placed it its correct position. We repeat this process for `n-1` times in an array with size `n`. 

<div style="text-align: center">
<img src="assets/algorithm/sorting/bubble3.png"><br>
</div>

As we compare adjacent elements, we can set a flag -- `swapped` -- to check if swap has occured. At the end of the iteration if the flag is not set -- `swapped = false` -- we can exit the process since all elements are in the correct order.

<div class="divider"></div>

### Implementation

```rb
def bubble_sort(arr)
  n = arr.size
  for i in (0 ... n)
    # a flag used to check if swap has occured
    isSwapped = false

    for j in (0 ... n - i - 1)
      # swap if left is larger than the right
      if arr[j] > arr[j+1]
        # set the flag
        isSwapped = true
        arr[j], arr[j+1] = arr[j+1], arr[j]
      end
    end

    # exit if the array is already sorted
    if isSwapped == false
      break
    end
  end

  arr
end
```

### Time Complexity

#### best case
- number of comparisons: `n-1` times
- number of swaps: `0` times
- <b>T(n) = O(n)</b>

#### worst case
- number of comparisons: (n-1) + (n-2) + ... + 1 = `n*(n-1)/2` times
- number of swaps: (n-1) + (n-2) + ... + 1 = `n*(n-1)/2` times
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

### Reference
- [https://medium.com/madhash/bubble-sort-in-a-nutshell-how-when-where-4965e77910d8](https://medium.com/madhash/bubble-sort-in-a-nutshell-how-when-where-4965e77910d8)
