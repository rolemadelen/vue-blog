## Daily Coding Problem 2

This question was recently asked by Uber.

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

## Solution

### Naive

This one is candid. First find the product of all values in the list. Then, replace each element with `product / array[i]`.
The time complexity is linear and we did not use any additional space.

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
Without using the division, only solution I could came up with was a bruteforce approach.

I'm iterating the list and multiplying each value manually if two are different indexes, thus the time complexiy is O(N^2).
I'm also saving these multiplied values into a temporary space and copy them back to the original array at the end. 
So, the space complexity is O(N).

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