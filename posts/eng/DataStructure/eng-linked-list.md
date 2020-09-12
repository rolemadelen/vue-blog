
### Linked List
Linked List is a linear data structure in which data are not stored
contiguously in the memory. Each element in a linked list is called a _node_. 
These nodes are linked together via _pointers_ referencing different nodes.

![Linked List image](assets/data-structure/linked-list/linkedlist.png)

<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

<div class="divider"></div>

### Linked List vs. Array
Arrays are used to store linear data of same types, but they have the following limitations:
1. The size of the array is fixed.
2. Inserting and deleting an element is expensive, because we first need to create a room for the 
new element and then shift all elements.

For example, let's say we have a sorted list of IDs:<br>
`id[] = [1000, 1010, 1050, 2000, 2040]`.

To insert a new id (`1001`) in a **sorted list**, we need to shift every elements after `id[0]` to
the right to maintain its order. 

<div class="divider"></div>

### Advantages of Linked List
- Unlike the arrays, the size of the linked lists is dynamic. You can insert or delete elements
without resizing or shifting its elements.
- Linked lists have faster insert and delete operations.

### Disadvantages of Linked List
- Random access is not allowed. We have to access elements sequentially starting from the 
first node.
- Every time we create a new node to link, we're using that much more memory space.
- Linked Lists are not cache friendly. Array elements are located contiguously in a memory, 
so there's locality of reference.

| Operations| Array | Linked List|
|:---:|:---:|:---:|
|**Access**| O(1) | O(n) |
|**Search**| O(n) | O(n) |
|**Insert**| O(n) | O(1) |
|**Delete**| O(n) | O(1) |

<div class="divider"></div>

### Representation
A linked list is represented by a pointer to the first node or the linked list, which is called 
the `head` node. `head` is `nil` if the list is empty.

Each node consists of at least two parts: `value`, which is the data stored in the node and `next` which is a pointer/reference to the next node.

<div class="divider"></div>

### Simple Linked List
```rb
class Node
  attr_accessor :data, :next
  
  def initialize(data)
    @data = data
    @next = nil
  end
end

head = Node.new(1)    # [head,   1] -> nil
second = Node.new(2)  # [second, 2] -> nil
third = Node.new(3)   # [third , 3] -> nil

head.next = second    # [head, 1] -> [second, 2] -> nil
second.next = third   # [head, 1] -> [second, 2] -> [third, 3]
```

### Traversal
```rb
def print_list(node)
  while node != nil
    print "#{node.data} "
    node = node.next
  end
  puts
end

head = Node.new(1)             # 1 -> nil
head.next = Node.new(2)        # 1 -> 2 -> nil
head.next.next = Node.new(3)   # 1 -> 2 -> 3 -> nil

print_list(head)
# 1 2 3
```

### Related Post
- <router-link to="./eng-linked-list-singly">Singly Linked List</router-link>
- <router-link to="./eng-linked-list-doubly">Doubly Linked List</router-link>
- <router-link to="./eng-linked-list-circular">Circular Linked List</router-link>