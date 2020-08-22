---
layout: post
title: "병합 정렬(Merge Sort)이란"
ref: algorithm-sort-merge
date: 2020-06-26 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ko
---

<div class="updated">
2020-07-05: 글 구조 변경 & 번역 완료<br>
2020-07-10: C코드 Ruby코드로 변경; png 추가
</div>

## 병합 정렬

분할정복 알고리즘의 대표적인 예로 병합 정렬(Merge Sort)을 꼽을 수 있다.

**분할 정복** (Divide and Conquer)은 주어진 문제를 여러개의 작은 문제로 분할하여 해결한 후, 
본래의 문제를 정복하는 방법이다. 

단계로 나누자면 아래와 같다.
1. 주어진 문제를 한 개 이상의 작은 문제들로 분할(**divide**)한다.
2. 작은 문제들을 정복(**conquer**)한다.  
더 작은 문제로 분할이 가능하면 재귀를 사용한다.
3. 해결한 작은 문제들을 병합(**merge**)하여 본래 문제의 해답을 구한다.

분할 정복의 **장점**
- 어려운 문제를 작은 문제로 분할함으로써 해결이 가능하다.
  + 예) 하노이의 탑
- 메모리 캐시를 효율적으로 사용한다.
  + 문제가 정복할 수 있을정도로 간단해지면 상대적으로 느린 메인 메모리에 접근할 필요없이 캐시만으로 해결이 가능하다.

분할 정복의 **단점**
- 분할정복의 특성상 재귀를 반복적으로 호출해야 하는데, 재귀는 느리다.
- 재귀를 호출하면서 스택 메모리가 쌓이게 되어 메모리의 사용량이 증가한다.

<div class="divider"></div>

## 병합 정렬 알고리즘 요약

분할정복을 사용해 어떻게 정렬이 이루어지는지 살펴본다.

1. 주어진 배열을 두 개의 부분 배열로 분할(**divide**)한다.
2. 더 이상 분할할 수 없을때까지 재귀를 사용하여 분할한다. <img style="text-align: center" src="assets/images/algorithm/sorting/merge1.png">
3. 작은 배열들을 병합(**merge**)한다.<img style="text-align: center" src="assets/images/algorithm/sorting/merge2.png">

<div class="divider"></div>

## 병합 정렬 코드
```rb
def merge(arr, left, mid, right)
  sorted_arr = [0]*right
  p = left
  q = mid+1
  k = left  # sorted_arr의 인덱스

  # 두 개의 리스트를 병합하는 과정
  while (p <= mid and q <= right)
    if arr[p] < arr[q]
      sorted_arr[k] = arr[p];
      p += 1
    else
      sorted_arr[k] = arr[q]
      q += 1
    end
    k += 1
  end

  # 병합 후, 왼쪽 리스트에 남아있는 값들을 전부 복사
  while p <= mid
    sorted_arr[k] = arr[p];
    p += 1
    k += 1
  end

  # 병합한 리스트의 값들은 출력배열에 저장
  for i in (left...k) do
    arr[i] = sorted_arr[i]
  end

  arr
end

def merge_sort(arr, left, right)
  mid = 0
  if(left < right)
    mid = left + (right-left)/2
    merge_sort(arr, left, mid)
    merge_sort(arr, mid+1, right)
    merge(arr, left, mid, right)
  end
end

arr = [1, 9, 7, 10, 8, 2, 51]
size = arr.size

p arr
 merge_sort(arr, 0, size-1)
p arr
```

<div class="divider"></div>

## 시간 복잡도
- 분할 과정
  + 배열의 중간 위치를 계산: **O(1)**
  + 배열을 계속해서 반으로 분할: **O(log n)**
- 통합 과정
  + `n`개의 원소를 통합: O(n-1) = **O(n)**
- <b>T(n) = O(n*log n)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [studytonight - Merge Sort Algorithm](https://www.studytonight.com/data-structures/merge-sort#:~:text=Time%20complexity%20of%20Merge%20Sort,space%20as%20the%20unsorted%20array)
