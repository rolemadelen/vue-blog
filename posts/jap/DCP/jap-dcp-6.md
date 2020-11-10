## Daily Coding Problem 6
This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding `next` and `prev` fields, it holds a field named `both`, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an `add(element)` which adds the element to the end, and a `get(index)` which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to `get_pointer` and `dereference_pointer` functions that converts between nodes and memory addresses.

## Solution
```rb
def get_pointer(obj)
  return obj.object_id
end

def deref_pointer(id)
  return ObjectSpace._id2ref(id)
end

class Node
  # XOR of previous and next
  attr_accessor :xpn

  def initialize(data)
    @xpn = nil
    @data = data
  end

  def get_data
    @data
  end
end

class XORList
  attr_writer :head

  def initialize(data)
    @head = Node.new(data)
    @head.xpn = get_pointer(@head) ^ get_pointer(nil)
  end

  def add(data)
    prev_addr = get_pointer(nil)
    curr = @head
    next_node = deref_pointer(prev_addr ^ curr.xpn)

    while next_node != curr and next_node != nil
      prev_addr = get_pointer(curr)
      curr = next_node
      next_node = deref_pointer(prev_addr ^ curr.xpn)
    end

    new_node = Node.new(data)

    curr.xpn = prev_addr ^ get_pointer(new_node)
    new_node.xpn = get_pointer(curr) ^ get_pointer(nil)
  end

  def get(index)
    return @head if index == 0

    prev_addr = get_pointer(nil)
    curr = @head

    for i in 0...index
      next_node = deref_pointer(prev_addr ^ curr.xpn)
      prev_addr = get_pointer(curr)
      curr = next_node
    end

    return curr
  end
end

xor = XORList.new(5)
xor.add(9)
xor.add(15)
xor.add(10)
xor.add(1)
puts xor.get(0).get_data
puts xor.get(1).get_data
puts xor.get(2).get_data
puts xor.get(3).get_data
puts xor.get(4).get_data
```