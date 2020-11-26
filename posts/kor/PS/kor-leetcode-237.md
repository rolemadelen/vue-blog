## Delete Node in a Linked List
[LeetCode #237](https://leetcode.com/problems/delete-node-in-a-linked-list/)

Write a function to **delete a node** in a singly-linked list. You will **not** be given access to the head of the list, instead you will be given access to **the node to be deleted** directly.

It is **guaranteed** that the node to be deleted is **not a tail node** in the list.

## Solution in JS

```js
/** 
 * Runtime: 84 ms, faster than 82.95%
 * Memory Usage: 40 MB, less than 95.37%
 */

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
```