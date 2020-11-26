## Middle of the Linked List
[LeetCode #876](https://leetcode.com/problems/middle-of-the-linked-list/)

Given a non-empty, singly linked list with head node `head`, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

## Solution in Ruby

```rb
# Runtime: 76 ms, faster than 11.36%
# Memory Usage: 209.8 MB, less than 50.00%

def middle_node(head)
  cnt = 0

  temp = head
  while temp
    cnt += 1
    temp = temp.next 
  end

  cnt >>= 1
  temp = head
  for i in (0...cnt) do
    temp = temp.next 
  end

  temp
end
```