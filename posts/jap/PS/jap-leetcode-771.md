## Jewels and Stones
[LeetCode #771](https://leetcode.com/problems/jewels-and-stones/)

You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have.  Each character in `S` is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

## Solution in Ruby

```rb
# Runtime: 52 ms, faster than 66.90%
# Memory Usage: 210 MB, less than 51.41%
def num_jewels_in_stones(j, s)
    cnt = 0
    s = s.split('')
    for c in s do
        if j.include?(c) then cnt += 1 end
    end
    cnt
end
```