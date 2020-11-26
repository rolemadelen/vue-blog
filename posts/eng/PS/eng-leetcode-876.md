## Middle of the Linked List
[LeetCode #876](https://leetcode.com/problems/middle-of-the-linked-list/)

Given a non-empty, singly linked list with head node `head`, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

## Solution in C++

```cpp
/**
 * Runtime: 0 ms, faster than 100.00%
 * Memory Usage: 7.1 MB, less than 27.55%
 */

class Solution {
  public:
    ListNode* middleNode(ListNode* head) {
      int size = 0;

      ListNode *temp = head;

      while(temp)
      {
        ++size;
        temp = temp->next;
      }

      size >>= 1;
      temp = head;
      for(int i=0;i<size; ++i)
      {
        temp = temp->next;
      }

      return temp;
    }
};
```