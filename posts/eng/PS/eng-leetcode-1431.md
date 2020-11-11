## Kids With the Greatest Number of Candies

[LeetCode #1431](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

## Solution in C++

```cpp
/*
 * Runtime: 4 ms
 * Faster than 81.66%
 * Memory Usage: 9.3 MB, less than 100%
 * */

class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> result;
        int _max = -1;
        for(int i=0; i<candies.size(); ++i)
            if (candies[i] > _max) _max = candies[i];
        
        for(int i=0; i<candies.size(); ++i)
            if (candies[i] + extraCandies >= _max) result.push_back(true);
            else result.push_back(false);
        
        return result;
    }
};
```