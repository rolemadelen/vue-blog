

## What is Binary Search Tree?
- "A Binary Search Tree is sometimes called ordered or sorted binary trees, 
  and it keeps its values in sorted order, so that lookup and other operations 
  can use the principle of binary search"

The important property of BST
- `node`'s value is larger than the value of the offspring of its `left child` 
but smaller than the `right child`.

## Insert
```rb
class Node
  attr_accessor :value, :left, :right
  def initialize(value, _left = nil, _right = nil)
    @value = value 
    @left = _left
    @right = _right 
  end
end

class BST
  attr_accessor :root
  def initialize(value)
    @root = Node.new(value, nil, nil)
  end

  def insert(value, node)
    if value < node.value
      if node.left 
        insert(value, node.left)
      else 
        node.left = Node.new(value)
      end
    else 
      if node.right 
        insert(value, node.right) 
      else 
        node.right = Node.new(value)
      end
    end
  end

  def dfs
    dfs_helper(@root)
  end

  def dfs_helper(node)
    return if node==nil 

    puts node.value
    dfs_helper(node.left)
    dfs_helper(node.right)
  end
end

bst = BST.new(50)
bst.insert(76, bst.root)
bst.insert(21, bst.root)
bst.insert(4, bst.root)
bst.insert(32, bst.root)
bst.insert(100, bst.root)
bst.insert(64, bst.root)
bst.insert(52, bst.root)
bst.dfs
```

## Find
```rb
  def exist?(value, node=@root)
    return false if node == nil
    return true if node.value == value 

    if value > node.value
      exist?(value, node.right)
    else
      exist?(value, node.left)
    end
  end
```

## Delete
Consider 3 cases 

### A node with no children (leaf node)

- Simply remove it. We don't need to reorganize the tree.

```rb
  if node.left == nil and node.right == nil 
    (node.parent.left == node) ? node.parent.left = nil : node.parent.right = nil
  end
```

### A node with just one child (left or right)

- remove the current node and replace it with its offspring.

```rb
  if node.parent.left == node 
    if node.left 
      node.left.parent = node.parent
      node.parent.left = node.left
    else 
      node.right.parent = node.parent
      node.parent.left = node.right
    end
  else
    if node.left 
      node.left.parent = node.parent
      node.parent.right = node.left
    else 
      node.right.parent = node.parent
      node.parent.right = node.right
    end
  end
```

### A node with twe children 
- Starting from the current node's right children, navigate all the way to the left to find the 
minimum node. Replace the current node with that minimum. 

```rb
  if node.left && node.right
    min = node.right
    x = find_min(node.right)
    min = x if x != nil

    if x != nil
      node.value = min.value
    end

    min.parent.left = nil if min.parent.left == min 
    min.parent.right = nil if min.parent.right == min 
  end
```

### Reference
- https://www.freecodecamp.org/news/all-you-need-to-know-about-tree-data-structures-bceacb85490c/
