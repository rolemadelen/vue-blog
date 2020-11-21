## Range Sum of BST
[LeetCode #938](https://leetcode.com/problems/range-sum-of-bst/)

Given the `root` node of a binary search tree, return the sum of values of all nodes with a value in the range `[low, high]`.

## Solution in C++

```cpp
/**
 * Runtime: 168 ms, faster than 87.27%
 * Memory Usage: 65.1 MB, less than 78.96%
 */

class Solution {
  public:
    void preorder(TreeNode* node, int low, int high, int& sum) {
      if(!node) return;
      if (node->val >= low && node->val <= high) sum += node->val;
      preorder(node->left, low, high, sum);
      preorder(node->right, low, high, sum);
    }
    int rangeSumBST(TreeNode* root, int low, int high) {
      int sum = 0;
      preorder(root, low, high, sum);
      return sum;
    }
};
```