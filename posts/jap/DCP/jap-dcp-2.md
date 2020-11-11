## Daily Coding Problem 2

This question was recently asked by Uber.

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

## Solution

### Naive

この問題は割り算を使うと簡単に解くことができます。

まずは与えられたリストの全ての要素の積を求めます。そしてリストを巡回しながら要素づつ`咳 / list[i]`の値を計算します。
こうしたら時間複雑度はO(N)、そして空間複雑度はO(1)になります。

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

問題にボナース問題がありましたね。それは「割り算使用しないこと」 です。
割り算ができないこの状況で私が考えられる方法はbruteforceしかないです。

リストを巡回しながら要素づつまたforループを使ってその要素意外の要素の積を求めます。この値は仮リストに保存します。
最後に仮リストを本来のリストにコーピします。

この方法の時間複雑度はO(N^2)で、空間複雑度はO(N)です。

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