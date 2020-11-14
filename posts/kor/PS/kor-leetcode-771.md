## Jewels and Stones
[LeetCode #771](https://leetcode.com/problems/jewels-and-stones/)

You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have.  Each character in `S` is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

## Solution in JS

```js
/**
 * Runtime: 80 ms, faster than 79.03%
 * Memory Usage: 38.8 MB, less than 62.63%
 */
var numJewelsInStones = function(J, S) {
    let cnt = 0;
    S = S.split('');
    S.forEach(c => {
        (J.includes(c)) ? cnt += 1 : cnt;
    })
    
    return cnt;
};
```