## Kids With the Greatest Number of Candies

[LeetCode #1431](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

## Solution in JS

```js
/**
 * Runtime: 76 ms, faster than 84.03% 
 * Memory Usage: 38.7 MB, less than 7.03%
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];
    
    for (let i=0; i<candies.length; ++i)
        if (candies[i] + extraCandies >= max)
            result.push(true);
        else
            result.push(false);
    return result;
};
```

풀이는 똑같고, `forEach`를 사용해봤습니다.
```js
/**
 * Runtime: 80 ms, faster than 62.62%
 * Memory Usage: 38.9 MB, less than 7.03%
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];
    
    candies.forEach(e => {
        result.push(((e + extraCandies) >= max) ? true : false);
    })
    
    return result;
};

```