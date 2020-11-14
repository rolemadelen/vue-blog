## Defanging an IP Address

[LeetCode #1108](https://leetcode.com/problems/defanging-an-ip-address/)

Given a valid (IPv4) IP `address`, return a defanged version of that IP address.

A defanged IP address replaces every period `"."` with `"[.]"`.

## Solution in Ruby

```rb
=begin
Runtime: 44ms, faster than 83.48%
Memory Usage: 209.8 MB
=end
def defang_i_paddr(address)
    i = 1
    while (i < address.length) do
        if address[i-1] == '.'
            address.insert(i-1, '[')
            address.insert(i+1, ']')
            i += 2
        end
        i += 1
    end
    address
end
```