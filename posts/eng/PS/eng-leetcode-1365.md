## How Many Numbers Are Smaller Than the Current Number
[LeetCode #1365](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

Given the array nums, for each `nums[i]` find out how many numbers in the array are smaller than it. 
That is, for each `nums[i]` you have to count the number of valid `j`'s such that `j != i` **and** `nums[j] < nums[i]`.

## Solution in C++

### Bruteforce
```cpp
/*
 * Runtime: 48 ms, faster than 39.04%
 * Memory Usage: 10.4 MB, less than 74.17%
 */

class Solution {
  public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
      vector<int> result(nums.size());

      for (int i=0; i<nums.size(); ++i)
      {
        int cnt = 0;
        for(int j=0; j<nums.size(); ++j) 
        {
          if (i != j) 
          {
            if (nums[i] > nums[j])
              ++cnt;
          }
        }
        result[i] = cnt;
      }

      return result;
    }
};
```

### Sort
```cpp
/*
 * Runtime: 8 ms, faster than 90.45% 
 * Memory Usage: 10.5 MB, less than 52.49%
 */

class Solution {
  public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
      vector<int> result(nums);
      int table[101] = {0};

      sort(result.begin(), result.end());

      int cnt = 1;
      table[result[0]] = 0;
      for(int i=1; i<result.size(); ++i) 
      {
        if (result[i-1] == result[i]) 
          table[result[i]] = table[result[i-1]];
        else 
          table[result[i]] = cnt;
        ++cnt;
      }


      for (int i=0; i<nums.size(); ++i) 
        result[i] = table[nums[i]];

      return result;
    }
};
```