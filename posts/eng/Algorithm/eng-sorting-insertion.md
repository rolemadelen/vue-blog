
## Insertion Sort
- The most efficient algorithm for sorting small sets of data.
  + Best when data is almost sorted.
- The algorithm is similar to how most people sort game cards in their hands.
  + Compare the new card with already sorted cards and find the correct position to insert.
  + Repeat until their are no more new cards.

<img src="assets/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>

<div class="divider"></div>

## Algorithm  Summary
- Let `key` be the current position's data to compare with others.
- **Start with the 2nd data** (`key = arr[1]`) and compare with all data in front of the `key`.
- If the value in front of the `key` is larger, then swap its position with the key.
- Repeat the above process until their are no more values to compare or the `key` is in the right position.

<div class="divider"></div>

## The code
```rb
def insertion_sort(arr)
  n = arr.size

  # start from the 2nd element
  for i in (1 ... n)
    index = i
    key = arr[i]

    while index > 0 and key < arr[index-1]
      # shift one space to the right
      arr[index] = arr[index - 1]
      index -= 1
    end

    # insert the key at the right position
    arr[index] = key
  end
end

arr = [*1 ... 100].shuffle

print arr
puts

insertion_sort(arr)

print arr
puts
```

<div class="divider"></div>

## Time Complexity
#### best case
- number of comparisons: `n-1`
- number of swaps: `0`
- **T(n) = O(n)**

#### worst case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `n*(n-1)/2`
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/InsertionSort.html)
- [삽입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
