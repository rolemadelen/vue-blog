## Reverse Linked List
[LeetCode #206](https://leetcode.com/problems/reverse-linked-list/)

Reverse a singly linked list.

## Solution in JS

### Iterative method

```js
/**
 * Runtime: 88 ms, faster than 32.32%
 * Memory Usage: 40.7 MB, less than 37.74%
 */

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while(curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    return prev;
};
```

### Recursive method
```js
/**
 * Runtime: 120 ms, faster than 5.15%
 * Memory Usage: 40.7 MB, less than 37.74%
 */

var reverseList = function(head) {
  if (head == null || head.next == null) return head;

  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
```