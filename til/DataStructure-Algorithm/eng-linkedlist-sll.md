
## Linked List

### Why Linked List over Array?
arrays have the following limitations:
1. size is fixed
2. insert is expensive
  + resize the array
  + shift all elements to insert new
3. delete is expensive

for example, let say we have a sorted list of IDs
`id[] = [1000, 1010, 1050, 2000, 2040]`.

in order to insert a new id `1001` in a **sorted list**, we need shift every elements after `id[0]`
to maintain the sorted order. For the same reason, delete also requires shifting of all elements.

### Advantages of Linked List
1. dynamic size
2. faster insert/delete

### Disadvantages of Linked List
1. random access is not allowed. We have to access elements sequentially starting from the 
head node.
2. extra memory space
3. not cache friendly. 
  + array elements are located contiguously in a memory, so there's locality of reference.

### Representation
a linked list is represented by a pointer to the first node of the linked list, which is called 
the `head` node. `head` is `nil` if the list is empty.

each node consists of at least two parts:
1. data
2. pointer/reference to the next node

### Example
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

## Traversal
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

## Singly Linked List (SLL)
What is [Linked List](./2020-05-09-linked-list.md)?

Operations
- insert_front(value) - adds a node at the front of a list
- insert_back(value) - adds a node at the back of a list
- insert_at(value) - adds a node at n-posotion in a list
- remove_at(n) - removes a node at n-position from a list
- search_value(value) - searches for a value in a list

### Implementation
- Node class
```rb
class Node
  attr_accessor :data, :next
  
  def initialize(data)
    @data = data
    @next = nil
  end
end
```

- Singly Linked List Class
```rb
class SinglyLinkedList
  attr_reader :head, :length

  def initialize()
    @head = nil
    @length = 0
  end

  def insert_front(value)
    new_node = Node.new(value)
    new_node.next = @head
    @head = new_node
    @length += 1
  end

  def insert_back(value)
    new_node = Node.new(value)
    if @head == nil
      @head = new_node
    else
      curr = @head
      while curr.next != nil
        curr = curr.next
      end

      curr.next = new_node
    end
    @length += 1
  end

  # first node => position 1
  def insert_at(value, pos)
    new_node = Node.new(value)

    if pos <= 1
      insert_front(value)
      return
    elsif pos >= @length
      insert_back(value)
      return
    else
      curr = get_node_at(pos-1)
      new_node.next = curr.next
      curr.next = new_node;
    end

    @length += 1
  end

  # first node => position 1
  def remove_at(pos)
    pos = @length if pos > @length

    if pos<=1
      @head = @head.next
    else
      curr = @head
      for i in 1...(pos-1)
        curr = curr.next
      end

      curr.next = curr.next.next
    end

    @length -= 1
  end

  def search_value(value)
    curr = @head
    index = 0
    while curr != nil
      return index if curr.data == value

      curr = curr.next
      index += 1
    end

    return -1
  end

  # first node => position 1
  def get_node_at(pos)
    if @head == nil
      puts "---- list is empty"
      return 
    elsif pos < 1 or pos > @length
      puts "---- invalid position"
      return
    else
      curr = @head
      for i in 1...pos
        curr = curr.next
      end
      return curr
    end
  end

  def length()
    @length
  end

  def print_list()
    curr = @head
    for i in 0...@length
      print "#{curr.data} "
      curr = curr.next
    end
    puts
  end
end
```

### Usage example
```rb
root = SinglyLinkedList.new()
1.upto(5) do |x|
  root.insert_back(x)
end
puts "len: #{root.length}"
root.print_list

0.downto(-5) do |x|
  root.insert_front(x)
end
puts "len: #{root.length}"
root.print_list

root.remove_at(5)
root.print_list
root.remove_at(5)
root.print_list
root.remove_at(5)
root.print_list

if root.search_value(5) >= 0
  puts "exist"
else
  puts "DNE"
end
```
