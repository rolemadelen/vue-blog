
## Circular Doubly Linked List
Very similar to [Doubly Linked List](/20200510) except that we let `head->prev = tail` and `tail->next = head`

Node class is exactly equivalent to the one in Doubly Linked List.
```rb
# Circular Doubly Linked List
class Node
  attr_accessor :data, :prev, :next

  def initialize(data, prev=nil,_next=nil)
    @data = data
    @prev = prev
    @next = _next
  end
end
```

### Implementation

[GitHub](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/cdll.rb)

<div class="divider"></div>

## Skip List
- Normal search in a linked list => O(n)
- Skip list search => O(log n)

Skip lists are a linked list that contains multiple `next` nodes (call it `forwards`) that helps us 
navigate the list faster by creating a multiple layers (or levels).

### Advantages
- perform very well on rapid insertions bc there are no rotations ro reallocations
- simpler to implement than AVL tree or hash tables.
- can retrieve the next element in O(1)
- making it lockless is simple
  + \* what is lockless? [Read](https://www.informit.com/articles/article.aspx?p=1626980)
- does well in persistent storage (often better than AVL and EH)

### Implementation
[GitHub](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/skip-list/skip.rb)

I still did not fully understood the implementation.

I will need to revisit this section.

<div class="divider"></div>

## Stack
- LIFO or FILO Linear Data Structure
- Can be implemented using an array or linked list
  + Array -> easy to implement but the size is fixed
  + Linked List -> it's dynamic but extra memory

### Operationns
- all operations are O(1)
- `push` adds an item in the stack
  + overflow condition: stack is full
- `pop`  removes an item from the stack
  + underflow condition: stack is empty
- `peek` or `top` returns the top element of stack
- `is_empty?` returns true if stack is empty, else false

### Implementation
[GitHub](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/stack/stack.rb)

<div class="divider"></div>

## Queue
- FIFO
- only difference with stack is removing
  + remove the least recent one first

### Operations
- `enqueue` adds an item to the queue
  + overflow condition: queue is full
- `dequeue` removes an item from the queu
  + underflow condition: queue is empty
- `front` get the front item from queue
- `rear` get the last item from queue

### Implementation
[GitHub](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/queue/queue.rb)

<div class="divider"></div>

## Reference
- [Circular Doubly Linked List](https://www.geeksforgeeks.org/doubly-circular-linked-list-set-1-introduction-and-insertion/)
- Skip List
  + [Insert](https://www.geeksforgeeks.org/skip-list-set-2-insertion/)
  + [Search and Delete](https://www.geeksforgeeks.org/skip-list-set-3-searching-deletion/?ref=rp)
