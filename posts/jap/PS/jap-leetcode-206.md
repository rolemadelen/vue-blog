## Reverse Linked List
[LeetCode #206](https://leetcode.com/problems/reverse-linked-list/)

Reverse a singly linked list.

## Solution in Ruby

### Iterative method

```rb
# Runtime: 96 ms, faster than 7.00%
# Memory Usage: 210.4 MB, less than 37.74%

def reverse_list(head)
  prev = nil
  curr = head

  while(curr != nil) do
    temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  end

  return prev
end
```

### Recursive method
```rb
# Runtime: 52 ms, faster than 83.27%
# Memory Usage: 210.7 MB, less than 15.56%

def reverse_list(head)
  return head if head==nil or head.next==nil

  p = reverse_list(head.next)
  head.next.next = head
  head.next = nil
  return p
end
```