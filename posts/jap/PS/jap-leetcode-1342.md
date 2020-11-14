## Number of Steps to Reduce a Number to Zero
[LeetCode #1342](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

Given a non-negative integer `num`, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

## Solution in Ruby

### Naive
```rb
# Runtime: 48 ms, faster than 84.85%
# Memory Usage: 209.6 MB, less than 70.71%
def number_of_steps (num)
    cnt = 0
    while (num > 0) do 
        if num%2 == 0
            num = num / 2
        else 
            num -= 1
        end
        
        cnt += 1
    end
    cnt
end
```

### Bit Manipulator
```rb
# Runtime: 40 ms, faster than 95.96%
# Memory Usage: 209.6 MB, less than 70.71%
def number_of_steps (num)
    cnt = 0
    while (num > 0) do 
        if num&1 == 0
            num = num >> 1 
        else 
            num -= 1
        end
        
        cnt += 1
    end
    cnt
end
```