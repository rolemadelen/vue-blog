## Kids With the Greatest Number of Candies

[LeetCode #1431](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

## Solution in Ruby

```rb
# Runtime 56ms
# Faster than 52.02%
# Memory Usage: 210MB, less than 76.88%

def kids_with_candies(candies, extra_candies)
    max = candies.max
    result = []
    
    for x in candies do
       if x + extra_candies >= max then result << true else result << false end 
    end
    result
end
```