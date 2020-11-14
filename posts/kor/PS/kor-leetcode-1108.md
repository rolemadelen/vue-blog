## Defanging an IP Address

[LeetCode #1108](https://leetcode.com/problems/defanging-an-ip-address/)

Given a valid (IPv4) IP `address`, return a defanged version of that IP address.

A defanged IP address replaces every period `"."` with `"[.]"`.

## Solution in JS

```js
/**
 * Runtime: 68 ms, faster than 95.34%
 * Memory Usage: 38.6 MB, less than 24.72%
 */
var defangIPaddr = function(address) {
    const regex = /\./gi;
    return address.replace(regex, '[.]');
};
```