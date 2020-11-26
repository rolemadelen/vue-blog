## Delete Node in a Linked List
[LeetCode #237](https://leetcode.com/problems/delete-node-in-a-linked-list/)

Write a function to **delete a node** in a singly-linked list. You will **not** be given access to the head of the list, instead you will be given access to **the node to be deleted** directly.

It is **guaranteed** that the node to be deleted is **not a tail node** in the list.

## Solution in C++

```cpp
/**
 * Runtime: 20 ms, faster than 53.79%
 * Memory Usage: 8 MB, less than 52.59%
 */

class Solution {
  public:
    void deleteNode(ListNode* node) {
      while(node->next->next) 
      {
        node->val = node->next->val;
        node = node->next;
      }

      node->val = node->next->val;
      delete node->next;
      node->next = NULL;
    }
};
```

This is also possible.

```cpp
/**
 * Runtime: 20 ms, faster than 53.79%
 * Memory Usage: 8 MB, less than 52.59%
 */

class Solution {
  public:
    void deleteNode(ListNode* node) {
      node->val = node->next->val;
      ListNode *temp = node->next;
      node->next = node->next->next;
      delete temp;
    }
};
```