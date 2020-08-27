
## 거품 정렬
거품 정렬(Bubble sort)은 가장 간단한 정렬 알고리즘으로 인접한 두 개의 원소를 반복적으로 비교하고 위치를 바꾸면서
정렬이 이루어진다. 

<div class="divider"></div>

## 알고리즘의 작동 원리

아래의 배열을 오름차순으로 정렬하려고 한다.

<div style="text-align: center">
<img src="assets/algorithm/sorting/bubble1.png"><br>
</div>

거품 정렬의 기본 개념은 인접한 두 원소를 비교한 후, 왼쪽이 오른쪽보다 클 경우 두 원소의 위치를 바꾸는 것이다. 
내림차순 정렬의 경우는 반대로 왼쪽이 오른쪽보다 작을 경우 두 인접한 원소들의 위치를 바꿔준다.

<div style="text-align: center">
<img src="assets/algorithm/sorting/bubble2.png"><br>
</div>

첫 번째 반복 -- first pass -- 종료 후, 배열 속 가장 큰 숫자(`5`)는 올바른 자리에 위치하게 된다.
두 번째 반복 -- second pass -- 종료 후, 배열 속 두 번째로 큰 숫자(`4`)가 올바른 자리에 위치하게 된다.
이 과정을 `n-1`번 반복하면 `n`개의 원소를 가진 배열의 모든 원소들은 올바른 자리에 위치하게 된다.

<div style="text-align: center">
<img src="assets/algorithm/sorting/bubble3.png"><br>
</div>

인접한 원소들을 비교하는 과정에서 교환이 이루어졌는지 확인하는 플래그 -- `swapped` -- 를 세 울수 있다. 반복이 끝난 후 만약 이 플래그가 세워지지 않았다면 -- `swapped = false` -- 모든 원소들이 이미 제자리에 위치해 있다는 뜻이기에 바로 정렬과정을 종료한다.

<div class="divider"></div>

## 거품 정렬 코드

```rb
def bubble_sort(arr)
  n = arr.size
  for i in (0 ... n)
    # 교환이 이루어졌는지 확인하는 플래그
    isSwapped = false

    for j in (0 ... n - i - 1)
      # 왼쪽 원소가 더 클 경우 위치를 교한
      if arr[j] > arr[j+1]   
        # 플래그를 세운다
        isSwapped = true
        arr[j], arr[j+1] = arr[j+1], arr[j]
      end
    end

    # 이미 정렬이 되어있다면 종료
    if isSwapped == false
      break
    end
  end

  arr
end
```

<div class="divider"></div>

## 시간 복잡도

#### 최선의 경우
- 비교 횟수: `n-1` times
- swap 횟수: `0` times
- <b>T(n) = O(n)</b>

#### 최악의 경우
- 비교 횟수: (n-1) + (n-2) + ... + 1 = `n*(n-1)/2` times
- swap 횟수: (n-1) + (n-2) + ... + 1 = `n*(n-1)/2` times
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [https://medium.com/madhash/bubble-sort-in-a-nutshell-how-when-where-4965e77910d8](https://medium.com/madhash/bubble-sort-in-a-nutshell-how-when-where-4965e77910d8)
