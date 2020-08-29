
## Binary Search Tree
Behaviors:
- BST's parent's value will always be > to its child.
- and the right child must have > value than its parent.
- Due to this behavior, duplicate keys are not allowed.
  + variation: just count if same key already exists.
  + variation 2: let the right child be >= its parent

Terms:
- root
- parent
- child
- leaf
- subtree
- levels

Operations:
- `insert`
- `seacrh`
- `inorder traversal`
  + output produce sorted key values in ascending order
- `preorder traversal`
- `postorder traversal`

Implemenation: [GitHub](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/tree/bst/bst.rb)

<div class="divider"></div>

## AVL Tree
- Adelson, Velski & Landis (AVL Tree)
- Height balancing BST
  + checks the height of the left&right sub-trees and make sure their difference is not more than 1. This difference is called **Balance Factor**.

`Balance Factor = left.height - right.height`

AVL Rotations (operations)
- Left Rotation (single)
- Right Rotation (single)
- Left-Right rotation (double rot)
- Right-Left rotation (double rot)

Not yet implemented.

<div class="divider"></div>

## Find the Tree's Maximum Depth (height)

```rb
def max_depth(root)
  left_height = get_height(root.left)
  right_height = get_height(root.right)
  return 1 + [left_height, right_height].max
end

def get_height(node)
  h = 0
  if node != nil
    left = get_height(node.left)
    right = get_height(node.right)
    h = [left, right].max
  end
  return h
end
```

<div class="divider"></div>

## Reference
- [BST](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
- [AVL Tree](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
