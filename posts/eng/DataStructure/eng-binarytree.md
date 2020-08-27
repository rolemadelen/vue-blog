

## What is Tree?
- non-linear data structure.
- organize data hierarchically. 
  + ex) family tree, organization tree, DOM tree 

## Technical definition
- collection of entities called `nodes`. Nodes are connected by `edges`. 
Each `node` contains a `value` or `data`, and it may or may not have a `child node`.

### Terminology
The `first node` of the tree is called the `root`. If this `root node` is conneted by another node,
  the root is then a `parent node` and the connected node is a `child node`.

All nodes are connected by linkes called `edges`. It manages the relationship between nodes.

`Leaves` or a `leaf nodes` are the last nodes on a tree. They are nodes without children.

- `height`: the length of the longest path to a `leaf`
- `depth`: the length of the path to its `root`

#### Summary
- **Root** is the topmost `node` of the `tree`
- **Edge** is the link between two `nodes`
- **Child** is a `node` that has a `parent node`
- **Parent** is a `node` that has an `edge` to a `child node`
- **Leaf** is a `node` that does not have a `child node` in th tree
- **Height** is the length of the longest path to a `leaf`.
- **Depth** is the length of the path to its `root`.

## Binary Tree
Each node has three attributes: `value`, `left_child`, and `right_child`

```rb
class Node
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value 
    @left = nil 
    @right = nil
  end 
end 

class BinaryTree
  attr_reader :root
  def initialize(value)
    @root = Node.new(value)
  end
end
```

### Insertion
```rb
def insert_left(value)
  if @root.left == nil
    @root.left = Node.new(value)
  else
    new_node = Node.new(value)
    new_node.left = @root.left 
    @root.left = new_node
  end 
end

def insert_right(value)
  if @root.right == nil
    @root.right = Node.new(value)
  else
    new_node = Node.new(value)
    new_node.right = @root.right 
    @root.right = new_node 
  end
end
```

### Traversal
- Depth-First-Search (DFS)
  + "is an algorithm for traversing or searching tree data structure. 
  One starts at the root and explores as far as possible along each branch 
  before backtracking." — Wikipedia
- Breadth-First-Search (BFS)
  + "is an algorithm for traversing or searching tree data structure. 
  It starts at the tree root and explores the neighbor nodes first, 
  before moving to the next level neighbors.” — Wikipedia

#### DFS
- pre-order
```rb
  def preorder(node)
    return if node == nil
    puts node.root.value
    preorder(node.root.left)
    preorder(node.root.right)
  end
```

- in-order 
```rb
  def inorder(node)
    return if node == nil
    preorder(node.root.left)
    puts node.root.value
    preorder(node.root.right)
  end
```

- post-order
```rb
  def postorder(node)
    return if node == nil
    preorder(node.root.left)
    preorder(node.root.right)
    puts node.root.value
  end
```

#### BFS
```rb
  def bfs()
    q = []
    q << self

    while !q.empty? do 
      curr = q.shift
      puts curr.root.value 

      if curr.root.left 
        q << curr.root.left 
      end
      if curr.root.right 
        q << curr.root.right 
      end
    end
  end
end
```
