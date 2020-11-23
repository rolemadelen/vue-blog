## Convert Binary Number in a Linked List to Integer

[LeetCode #1290](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

Given `head` which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the *decimal value* of the number in the linked list.

## Solution in C++

```cpp
/**
 * Runtime: 0 ms, faster than 100.00% 
 * Memory Usage: 8.7 MB, less than 59.80%
 */

class Solution {
  public:
    int getDecimalValue(ListNode* head) {
      unsigned long result = 0;

      while (true)
      {
        if (head->val) result = result * 2 + 1;
        else result <<= 1;
        head = head->next;

        if (head == NULL || head == nullptr) break;
      }

      return result;
    }
};
```