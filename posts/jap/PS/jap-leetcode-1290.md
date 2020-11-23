## Convert Binary Number in a Linked List to Integer

[LeetCode #1290](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

Given `head` which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the *decimal value* of the number in the linked list.

## Solution in Ruby

```rb
# Runtime: 60 ms, faster than 27.73%
# Memory Usage: 209.9 MB, less than 29.41%

def get_decimal_value(head)
  result = 0

  while true do
    result = result * 2 + head.val
    head = head.next

    break if head == nil
  end

  result
end
```