
If you don't know what Linked List is, please read <i><router-link to="./eng-linked-list">What is Linked List?</router-link></i>.

<div class="divider"></div>

### Singly Linked List
Singly Linked List (SLL) is a list where data can only be accessed sequentially. 

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

SLL's node consists of two parts: `value`, which represents the value of a data, and `next`, which 
is a pointer or reference to the next node.

<div class="divider"></div>

### Operations of Singly Linked List
These are basic operations of Singly Linked List.

- `add()` adds a node to a list.
- `remove(n)` removes <i>n</i>th node from the list; return `-1` if <i>n</i>th node cannot be removed.
- `search_node_at(n)` returns the <i>n</i>the node from the list; return `-1` if <i>n</i>th node does not exist.

<div class="divider"></div>

### Implementation in Ruby

First we need a `Node` class to be used inside the singly linked list.
It initializes the `@data` with a given `data` and `next` as null because it's not pointing to anything.

```rb
class Node
  attr_accessor :data, :next
  
  def initialize(data)
    @data = data
    @next = nil
  end
end
```

Now we can create our linked list class.

```rb
class SinglyLinkedList
  attr_reader :head, :length

  ## at first, @head is not pointing anything so it's set to null
  def initialize()
    @head = nil
    @length = 0
  end

  def add(value)
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
  def remove(pos)
    return -1 if pos < 1 or pos > @length
    if pos==1
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

  # first node => position 1
  def search_node_at(pos)
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

### Example

```rb
# create an instance of Singly Linked List
root = SinglyLinkedList.new()

# insert nodes with a data 1 to 5
1.upto(5) do |x|
  root.add(x)
end

# display the length of the list and print all elements
puts "len: #{root.length}"
root.print_list

# remove the first node and print
root.remove(1)
puts "len: #{root.length}"
root.print_list

# get the data of the 2nd node
puts "search_node_at(2): #{root.search_node_at(2).data}"
```

### Related Post
- <router-link to="./eng-linked-list">What is Linked List?</router-link>
- <router-link to="./eng-linked-list-doubly">Doubly Linked List</router-link>
- <router-link to="./eng-linked-list-circular">Circular Linked List</router-link>