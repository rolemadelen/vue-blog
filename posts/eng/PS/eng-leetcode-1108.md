## Defanging an IP Address

[LeetCode #1108](https://leetcode.com/problems/defanging-an-ip-address/)

Given a valid (IPv4) IP `address`, return a defanged version of that IP address.

A defanged IP address replaces every period `"."` with `"[.]"`.

## Solution in C++

```cpp
/**
 * Runtime: 0 ms, faster than 100.00%
 * Memory Usage: 6.1 MB, less than 86.04%
 */
class Solution {
public:
    string defangIPaddr(string address) {
        string s = "";
        for(int i=0; address[i]; ++i)
        {
            if(address[i] != '.') s += address[i];
            else 
            {
                s += "[.]";
                
            }
        }
        
        return s;
    }
};
```