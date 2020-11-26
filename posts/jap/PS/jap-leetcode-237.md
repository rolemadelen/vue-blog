## Delete Node in a Linked List
[LeetCode #237](https://leetcode.com/problems/delete-node-in-a-linked-list/)

Write a function to **delete a node** in a singly-linked list. You will **not** be given access to the head of the list, instead you will be given access to **the node to be deleted** directly.

It is **guaranteed** that the node to be deleted is **not a tail node** in the list.

## Solution in Ruby

```rb
# Runtime: 148 ms, faster than 5.41%
# 210.2 MB

def delete_node(node)
  node.val = node.next.val
  node.next = node.next.next
end
```