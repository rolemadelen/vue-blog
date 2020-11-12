## Running Sum of 1d Array

[LeetCode #1480](https://leetcode.com/problems/running-sum-of-1d-array/)

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

## Solution in C++

### Bruteforce: Square Time Complexity
```cpp
/*
 * Runtime: 12 ms, faster than 13.10% 
 * Memory Usage: 8.9 MB, less than 98.70%
 */
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> result;
        for(int i=0; i<nums.size(); ++i)
        {
            int sum = 0;
            for(int j=0; j<i+1; ++j)
            {
                sum += nums[j];
            }
            result.push_back(sum);
        }
        return result;
    }
};
```

### Linear Time Complexity

```cpp
/*
 * Runtime: 4 ms, faster than 84.50% 
 * Memory Usage: 8.9 MB, less than 98.70%
*/
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int sum = 0;
        for(int i=0; i<nums.size(); ++i)
        {
            sum += nums[i];
        }
        
        int neg = nums[nums.size()-1];
        nums[nums.size()-1] = sum;
        for (int i=nums.size()-2; i>=0; --i)
        {
            int val = sum-neg;
            neg += nums[i];
            nums[i] = val;
        }
        return nums;
    }
};
```