## Linear Search

```cpp
int linearSearch(int const * const arr, const int target, const int SIZE)
{
  for (int i=0; i<SIZE; ++i)
  {
    if (arr[i] == target)
      return i;
  }

  return -1;
}
```