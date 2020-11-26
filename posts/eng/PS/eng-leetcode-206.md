## Reverse Linked List
[LeetCode #206](https://leetcode.com/problems/reverse-linked-list/)

Reverse a singly linked list.

## Solution in C++

### Iterative method

```cpp
/**
 * Runtime: 20 ms, faster than 6.18%
 * Memory Usage: 8.6 MB, less than 66.45%
 */

class Solution {
  public:
    ListNode* reverseList(ListNode* head) {
      ListNode *prev = nullptr;
      ListNode *curr = head;

      while (curr != nullptr) {
        ListNode *temp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = temp;
      }

      return prev;
    }
};
```

### Recursive method
```cpp
/**
 * Runtime: 4 ms, faster than 97.92%
 * Memory Usage: 9 MB, less than 9.56%
 */

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
      if (head == nullptr || head->next == nullptr) return head;
        
        ListNode *p = reverseList(head->next);
        head->next->next = head;
        head->next = nullptr;
        return p;
    }
};
```