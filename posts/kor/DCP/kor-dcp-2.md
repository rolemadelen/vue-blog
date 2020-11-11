## Daily Coding Problem 2

This question was recently asked by Uber.

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

## Solution

### Naive

나누기를 사용할 경우 간단히 풀 수 있습니다. 우선 리스트의 모든 값들의 곲을 구합니다. 그리고 리스트를 순회하면서 각 요소들을 `값들의 곱 / 리스트[i]`로 치환해줍니다.

시간 복잡도는 O(N)이 되고 추가적인 메모리 공간도 사용하지 않았기 때문에 공간복잡도는 O(1)이 됩니다.

```cpp
/* 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * */
void naive(int *arr, const int SIZE)
{
  unsigned long mult = 1;
  for(int i=0; i<SIZE; ++i)
  {
    mult *= arr[i];
  }

  for(int i=0; i<SIZE; ++i)
  {
    arr[i] = mult / arr[i];
  }
}
```

### Bruteforce

문제에서 추가적인 질문이 있었는데, 바로 "나누기를 사용하지 말 것"입니다. 

나누기를 사용하지 않을 경우, 제 프로그래밍/알고리즘 지식으로는 브루트포스 밖에 떠오르지 않았습니다.

리스트를 순회 하면서 각 요소를 제외한 모든 값들의 곲을 이중반복문을 사용해서 구합니다. 이 값은 임시 리스트에 저장해둡니다.
모든 값을 구했으면, 임시 리스트에 저장해두었던 값을 본래의 리스트에 복사합니다.

리스트를 순회할 때 각 요소들을 가지고 또 한번 리스트를 순회하기 때문에 시간복잡도는 O(N^2)이 됩니다. 또한 추가적인 리스트를 사용하기 때문에 
공간복잡도는 O(N)이 됩니다.

```cpp
void bruteforce(int *arr, const int SIZE)
{
  int *temp = new int[SIZE];

  for (int i=0; i<SIZE; ++i)
  {
    int val = 1;
    for (int j=0; j<SIZE; ++j)
      if (i != j) 
        val = val * arr[j];
    temp[i] = val;
  }

  for (int i=0; i<SIZE; ++i)
    arr[i] = temp[i];

  delete [] temp;
}
```