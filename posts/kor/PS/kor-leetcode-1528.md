## Number of Good Pairs
[LeetCode #1528](https://leetcode.com/problems/shuffle-string/)

Given a string `s` and an integer array `indices` of the same length.

The string `s` will be shuffled such that the character at the ith position moves to `indices[i]` in the shuffled string.

Return the shuffled string.

## Solution in JS

```js
/**
 * Runtime: 88 ms, faster than 73.88%
 * Memory Usage: 39.2 MB, less than 79.04%
 */
var restoreString = function(s, indices) {
    let result = new Array(indices.length);
    let j = 0;
    indices.forEach(i => {
        result[i] = s[j];
        j+=1
    })
    
    return result.join('');
};
```