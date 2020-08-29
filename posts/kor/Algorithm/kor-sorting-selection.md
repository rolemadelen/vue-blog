
### 선택 정렬
- 데이터의 위치를 한 칸씩 옮기면서 올바른 위치를 찾는 <router-link to="./kor-sorting-insertion">삽입 정렬</router-link>과는 달리, 정해진 위치에 와야할 데이터를 찾는다.

<div class="divider"></div>

### 알고리즘 요약
- 가장 작은 데이터를 찾아 배열의 첫 번째 위치로 옮긴다.
  + 두 번째로 작은 데이터를 찾아 배열의 두 번째 위치로 옮긴다.
  + `i`번째로 작은 데이터를 찾아 배열의 `i`번째 위치로 옮긴다.
- `n`번 반복하면 배열의 첫 `n`개의 원소가 정렬된다.

<div class="divider"></div>

### 선택 정렬 코드

```rb
def selection_sort(arr)
  n = arr.size

  for i in (0 ... n - 1)
    min = i

    # i번째로 작은 원소를 찾는다
    for j in (i+1 ... n)
      if arr[j] < arr[min]
        min = j
      end
    end

    # i번째로 작은 원소를 i번째 위치로 옮긴다
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

### 시간 복잡도

#### 최선의 경우
- 비교 횟수: `n*(n-1)/2`번
- 교환 횟수: `0`번
- <b>T(n) = O(n<sup>2</sup>)</b>

#### 최악의 경우
- 비교 횟수: `n*(n-1)/2`번
- 교환 횟수: `n-1`번
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

### Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
