## 삼입 정렬 
- 적은 수의 자료들을 정렬할 때 효율적인 알고리즘.
- 거의 정렬되어 있는 자료들을 정렬할 때 최고의 효율을 발휘.
- 카드 게임에서 손안의 카드를 정렬하는 방법과 유사하다.
  + 새로운 카드를 정렬된 카드들과 비교, 제 자리를 찾는다.
  + 새로운 카드의 수만큼 반복, 덱이 정렬되어 있다.

<img src="assets/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>

<div class="divider"></div>

## 알고리즘 요약
- 현재 위치의 값을 `key`라고 한다.
- **두 번째** 자료부터 시작(`key = arr[1]`), 그 앞의 있는 자료들과 비교한다.
- 앞 자료가 `key`보다 크다면, 앞 자료를 현재 위치에 복사 (한 칸씩 뒤로 미는 것과 동일).
- 더 이상 비교할 자료가 없거나 앞의 자료가 `key`보다 작을 때까지 반복.
  + 두 번째 조건의 존재여부에 따라 알고리즘 최선의 시간 복잡도가 달라진다.

<div class="divider"></div>

## 삽입 정렬 코드

```rb
def insertion_sort(arr)
  n = arr.size

  # 두 번째 자료부터 시작
  for i in (1 ... n)
    index = i
    key = arr[i]

    # 비교할 값이 없거나 앞의 값이 key보다 작을때까지 반복
    while index > 0 and key < arr[index-1]
      # 앞 자료의 값을 한 칸 뒤로 민다
      arr[index] = arr[index - 1]
      index -= 1
    end

    # key를 올바른 위치에 삼입한다.
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

## 시간 복잡도
#### 최선의 경우 (이미 정렬되어 있는 경우)
- 비교횟수: `n - 1`번
- 교환횟수: `0`번
- **T(n) = O(n)**

#### 최악의 경우 (역순인 경우)
- 비교횟수: `n*(n-1)/2`번
- 교환횟수: `n*(n-1)/2`번
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/InsertionSort.html)
- [삽입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
