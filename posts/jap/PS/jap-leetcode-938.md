## Range Sum of BST
[LeetCode #938](https://leetcode.com/problems/range-sum-of-bst/)

Given the `root` node of a binary search tree, return the sum of values of all nodes with a value in the range `[low, high]`.

## Solution in Ruby

```rb
# Runtime: 168 ms, faster than 50.82%
# Memory Usage: 214.5 MB, less than 73.77%
def range_sum_bst(root, low, high)
  return 0 if root == nil
  sum = 0

  sum = root.val if (root.val >= low and root.val <= high)
  sum += range_sum_bst(root.left, low, high) if root.val > low    
  sum += range_sum_bst(root.right, low, high) if root.val < high

  sum
end
```