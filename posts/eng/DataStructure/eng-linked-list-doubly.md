
### What is Doubly Linked List?
Unlike <router-link to="eng-linked-list-singly">Singly Linked List</router-link> where nodes are linked in one direction, Doubly Linked List is a linear data structure where a node can be linked bidirectionally.

![Linked List image](assets/data-structure/linked-list/dll.png)

A node in a doubly linked list holds the following three information at a minimum.
1. node's data
3. a pointer to the previous node -- `prev`
2. a pointer to the next node -- `next`

```rb
class Node
  attr_accessor :data, :prev, :next

  # default parameter
  def initialize(data, prev=nil, _next=nil)
    @data = data
    @prev = prev
    @next = _next
  end
end
```

Unless given, both `prev` and `next` points to nothing in the beginning when we create the instance, so we give
 nil as a default vaule.

<div class="divider"></div>

### Doubly Linked List Implementation

Below is the specification of the doubly linked list we are going to implement.

```rb
class DoublyLinkedList
  # Constructor
  def initialize
  end

  # inserts a node at the back
  def insert(value)
  end

  # inserts a node at the given index
  def insert_at(index, value)
  end

  # returns the node at the given index
  def get_node_at(index)
  end

  # removes the node at the given index
  def remove_at(index)
  end

  # search for the data in the list
  def search(data)
  end

  # list traversal
  def print_list
  end
end
```

This is only one of many possible implementation, so you do not need to stick with this specification. 
Go ahead and add or remove those methods that you might use or might not use.

Well then, lets go take a look at each method's implementation.

### Constructor (initialize)
```rb
def initialize
  @head = @tail = nil
  @length = 0
end
```

A new instance of a list contains no node; therefore, both `@head` and `@tail` points to nothing (`nil`).

The meta-variable `@length` holds the size of the list; that is the number of nodes in the list. Without this
meta-variable, we need a linear time complexity to find the length of a list. With this meta-variable, however, we can simply call the variable and know the size instantly.

### Push back node (insert)
```rb
def insert(value)
  new_node = Node.new(value, @tail)

  # when the list is not empty
  if @tail != nil
    @tail.next = new_node
    new_node.prev = @tail
    @tail = new_node
  # wthen the list is empty
  else
    @tail = new_node
    @head = @tail
  end

  @length += 1
end
```

The `insert` method adds a node at the back of the list. We need to consider two different scenario. One is where the list is empty, and the second part is when the list is not empty.

When the list is empty, we assign the new node to `@head` and `@tail`. Since there is only one node, it becomes both head and tail.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert1.png" alt="head and tail pointing to the node">
</div>

When the list is not empty, let `@tail.next`(A.next) point to the `new_node`, and let `new_node.prev`(C.prev) point to the current tail.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert2.png" alt="tail pointing to the new node">
</div>

Now we need to update the `@tail` so that it actually points to the last node in the list.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert3.png" alt="update the tail">
</div>

### Inserting a node (insert\_at)
```rb
def insert_at(index, value)
  # when the index is out of range
  if index < 0 or index > @length
    puts "... failed to insert #{value} at index #{index}"
    return nil
  # call 'insert' when we're inserting it at the back
  elsif index == @length
    insert(value)   
  # insert at the front
  elsif index == 0
    new_node = Node.new(value, nil, @head)

    if @head != nil
      @head.prev = new_node
      new_node.next = @head
      @head = new_node
    else
      @head = new_node
      @tail = @head
    end

    @length += 1
  # inserting in between nodes
  else
    new_node = Node.new(value)
    curr = get_node_at(index-1)

    new_node.next = curr.next
    new_node.prev = curr
    curr.next.prev = new_node
    curr.next = new_node

    @length += 1
  end

end
```

We can insert a node at a desired position. Here, we have three possible scenarios.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at1.png" alt="two nodes connected to each other">
</div>

1. Insert at the back of the node C: call `insert`
2. Insert in front of the node A
3. Insert in between the node A and C

For the case adding a node in the front (#2), the code is very similar to the `insert` method, so please take a look at it and try to implement it on your own.

Let's take a look at the case of adding a node in between two nodes.

```rb
new_node = Node.new(value)
curr = get_node_at(index-1)
```

First we create a new node. Then, find the node one previous to the index we're going to insert and assign it to `curr`. 

```rb
new_node.next = curr.next
new_node.prev = curr
```

Below is the resulting state of each node after we ran the above two lines of codes.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at2.png" alt="new nodes next/prev linked to A and C">
</div>

We can see that the `new_node` is in the correct position, however, the node A and C is still linked together and we need disconnect them.

```rb
curr.next.prev = new_node   # c.prev = new_node
curr.next = new_node
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at3.png" alt="links disconnected between A and C">
</div>

### Returning a node (get\_node\_at)
```rb
def get_node_at(index)
  return nil if index < 0 or index >= @length
  return @head if index == 0
  return @tail if index+1 == @length

  curr = @head
  index.times do
    curr = curr.next
  end

  curr
end
```

This is a helper method in which returns `index`th node.

### Removing a node (remove\_at)
```rb
def remove_at(index)
  if index < 0 or index >= @length
    puts ".. failed to remove a node at #{index}"
    return nil
  end

  if index == 0
    data = @head.data
    @head = @head.next
    @head.prev = nil if @head
  elsif  index == @length-1
    data = @tail.data
    @tail = @tail.prev
    @tail.next = nil if @tail
  else
    curr = get_node_at(index)
    data = curr.data

    curr.prev.next = curr.next
    curr.next.prev = curr.prev
    curr = curr.prev = curr.next = nil
  end

  @length -= 1

  @head = @tail = nil if @length == 0

  return data
end
```

We need to consider three cases when removing nodes from the list.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at1.png" alt="three nodes linked together">
</div>

1. Removing the head node (node A)
2. Removing the tail node (node C)
3. Removing a node in between nodes (node B)

Case 1 and 2 is pretty simple. When removing the head node, we move `head` to `head.next` and use `head.prev` to 
cut the link. When removing the tail node, we move `tail` to `tail.prev` and use `tail.next` to disconnect the
link.

Let's take a look at the 3rd case.

```rb
curr = get_node_at(index)
```

Use the helper method `get_node_at` to get the node we're going to remove and save it to `curr`.
Now use `curr.prev` and `curr.next` to disconnect links from the node A and C.

```rb
curr.prev.next = curr.next
curr.next.prev = curr.prev
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at3.png" alt="three nodes linked together">
</div>

Then we disconnect links connected from the `curr` and remove its node.

```rb
curr = curr.prev = curr.next = nil
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at4.png" alt="three nodes linked together">
</div>

### Searching a node (search)
```rb
def search(data)
  curr = @head
  @length.times do |i|
    # When the node is found
    if curr.data == data
      puts "'#{data}' is located at index '#{i}'"
      return i
    end
    curr = curr.next
  end

  # When there is no data in the list
  puts "'#{data}' is not in the list"
  return false
end
```

We iterate through the list and check if a node's value is equal to the data we're looking for. 
If it matches, we return the index. If the data does not exist, we return `false`.

### List traversal (print\_list)
```rb
def print_list
  if @length <= 0
    puts "list is empty"
    return
  end

  curr = @head
  (@length-1).times do
    print "#{curr.data} -> "
    curr = curr.next
  end
  puts "#{curr.data}"
end
```

Assign `head` to `curr` and loop it `@length` times to iterate the list and print all nodes' values. 
If no such meta-variable exists or was given, you can loop until `curr.next` is not `nil`. 

### Test code
```rb
# create the instance
list = DoublyLinkedList.new()

puts "Insert 1 to 5 at index 0"
1.upto(5) do |i|
  list.insert_at(0,i)
end
list.print_list

puts "insert 0 at the front"
list.insert_at(0, 0)
list.print_list

puts "insert 6 to 10 at the back"
6.upto(10) do |i|
  list.insert(i)
end
list.print_list

puts "insert 100 at index 5"
list.insert_at(5, 100)
list.print_list

puts "remove a node at index 3"
list.remove_at(3)
list.print_list

puts "print list's size"
puts list.length

puts "search for the data '6'"
list.search(6)

puts "search for the data '77'"
list.search(77)

puts "insert 123 at index 10"
list.insert_at(11, 123)
list.print_list

puts "delete the last element"
while list.length > 0 do
  list.print_list
  list.remove_at(list.length-1)
end
list.print_list # list is empty
```

```
Insert 1 to 5 at index 0
5 -> 4 -> 3 -> 2 -> 1

insert 0 at the front
0 -> 5 -> 4 -> 3 -> 2 -> 1

insert 6 to 10 at the back
0 -> 5 -> 4 -> 3 -> 2 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10

insert 100 at index 5
0 -> 5 -> 4 -> 3 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10

remove a node at index 3
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10

print list's size
11

search for the data '6'
'6' is located at index '6'

search for the data '77'
'77' is not in the list

insert 123 at index 10
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10 -> 123

delete the last element
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10 -> 123
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6
0 -> 5 -> 4 -> 2 -> 100 -> 1
0 -> 5 -> 4 -> 2 -> 100
0 -> 5 -> 4 -> 2
0 -> 5 -> 4
0 -> 5
0

list is empty
```

Doubly Linked List [source code](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/doubly/dll.rb).


### Related Post
- <router-link to="./eng-linked-list">What is Linked List?</router-link>
- <router-link to="./eng-linked-list-singly">Singly Linked List</router-link>
- <router-link to="./eng-linked-list-circular">Circular Linked List</router-link>