## Daily Coding Problem 3

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class
```python
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
The following test should pass:

```python
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

## Solution

```rb
class Node
  attr_accessor :val, :left, :right

  def initialize(val, left=nil, right=nil)
    @val = val
    @left = left
    @right = right
  end
end

def serialize(root)
  vals = []
  encode = ->(node, vals) {
    if node == nil
      vals.push('x')
    else
      vals.push(node.val)
      encode.call(node.left, vals)
      encode.call(node.right, vals)
    end
  }

  return (encode.call(root, vals)).join(' ')
end

def deserialize(serialized_str)
  vals = serialized_str.split()
  decode = -> (vals) {
    data = vals.shift

    if data == 'x'
      return nil
    end

    node = Node.new(data)
    node.left = decode.call(vals)
    node.right = decode.call(vals)
    return node  
  }

  return decode.call(vals)
end

root = Node.new('root', Node.new('left', Node.new('left.left')), Node.new('right'))
puts deserialize(serialize(root)).left.left.val
```