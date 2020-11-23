## Convert Binary Number in a Linked List to Integer

[LeetCode #1290](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

Given `head` which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the *decimal value* of the number in the linked list.

## Solution in JS

```js
/**
 * Runtime: 68 ms, faster than 97.66%
 * Memory Usage: 38.6 MB, less than 52.36%
 */

var getDecimalValue = function(head) {
  let result = 0;

  while (true) {
    result = result * 2 + head.val;
    if (head.next === null) break;
    head = head.next;
  }

  return result;
};
```