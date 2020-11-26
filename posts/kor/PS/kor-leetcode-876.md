## Middle of the Linked List
[LeetCode #876](https://leetcode.com/problems/middle-of-the-linked-list/)

Given a non-empty, singly linked list with head node `head`, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

## Solution in JS

```js
/** 
 * Runtime: 72 ms, faster than 88.62% 
 * Memory Usage: 38.3 MB, less than 60.49%
 */

var middleNode = function(head) {
  let size = 0;

  let temp = head;
  while(temp) {
    size+=1;
    temp = temp.next;
  }

  size >>= 1;
  temp = head;
  for(let i=0; i<size; ++i) {
    temp = temp.next;
  }

  return temp;
};
```