## Merge Two Sorted Lists
[LeetCode #21](https://leetcode.com/problems/merge-two-sorted-lists/)

Merge two sorted linked lists and return it as a new `sorted` list. The new list should be made by splicing together the nodes of the first two lists.

## Solution in C++

```cpp
/**
 * Runtime: 8 ms, faster than 84.45% 
 * Memory Usage: 15.3 MB, less than 16.75%
 */
class Solution {
  public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
      ListNode *head;
      if (!l1) return l2;
      if (!l2) return l1;

      if (l1->val < l2->val) {
        head = l1;
        l1 = l1->next;
      }
      else {
        head = l2;
        l2 = l2->next;
      }

      ListNode *temp = head;
      while (l1 && l2) {
        if (l1->val < l2->val ) {
          temp->next = l1;
          l1 = l1->next;
        } else {
          temp->next = l2;
          l2 = l2->next;
        }
        temp = temp->next;
      }

      while (l1) {
        temp->next = l1;
        temp = temp->next;
        l1 = l1->next;
      }

      while (l2) {
        temp->next = l2;
        temp = temp->next;
        l2 = l2->next;
      }

      return head;
    }
};
```