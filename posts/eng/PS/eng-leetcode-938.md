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
    int rangeSumBST(TreeNode* root, int low, int high) {
      if(!root) return 0;

      int sum = 0;
      if (root->val >= low && root->val <= high) sum = root->val;
      if (root->val > low) sum += rangeSumBST(root->left, low, high);
      if (root->val < high) sum += rangeSumBST(root->right, low, high);

      return sum;
    }
};
```