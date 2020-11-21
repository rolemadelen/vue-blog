## Range Sum of BST
[LeetCode #938](https://leetcode.com/problems/range-sum-of-bst/)

Given the `root` node of a binary search tree, return the sum of values of all nodes with a value in the range `[low, high]`.

## Solution in JS

```js
/**
 * Runtime: 236 ms, faster than 34.78%
 * Memory Usage: 65.2 MB, less than 78.43%
 */

var rangeSumBST = function(root, low, high) {
  if (!root) return 0;
  let sum = 0;
  if (root.val >= low && root.val <= high) sum = root.val;

  return sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};
```