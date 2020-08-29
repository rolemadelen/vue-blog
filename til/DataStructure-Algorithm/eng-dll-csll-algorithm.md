## Doubly Linked List
### Advantages of DLL
- can traverse in both direction
- delete operation can be more efficient
- can insert quickly than SLL using a `prev` node.

### Disadvantages of DLL
- extra memory for every `prev` node.
  + we can use XOR Doubly Linked List to use only one node but still represents `prev` and `next`.
- extra work because every time we modify the list, we need to update two nodes (`prev` and `next`) wwhere as in SLL, we only take care of the next node.

### Operations
- insert_front()
- insert_back()
- insert_at()
  + insert after a given node
  + insert before a given node
- remove_at() 

### Implementation
[Doubly Linked List Implementation](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/doubly/dll.rb)

<div class="divider"></div>

## Circlular Singly Linked List
Circular Linked List is a linked list where all nodes are connected to form a circle. 
In a doubly linked list, `head->prev` or `tail->next` normally points to `nil`. In a CLL, however,
it points back to `tail` or `head`.

### Advantages
- any node can be a starting point. This means we can traverse the whole list at any point.
- useful for queue implementation.
- circular doubly linked list are used for advanced data structures like Fibonacci heap

### Operations
- insert_front()
- insert_back()
- insert_at()
- remove_at()
- remove_front()
- remove_back()

### Implementation
[Circular Singly Linked List Implementation](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/csll.rb)

<div class="divider"></div>

## Reverse a linked list
I haven't fully understood how this works. I need to go back and double check.
```rb
def reverse_list(head)
  return head if head == nil or head.next == nil

  rest = reverse_list(head.next)
  head.next.next = head

  # why do i need this?
  head.next = nil

  rest
end
```

<div class="divider"></div>

## Binary to Decimal trick
Traditional way of converting a binary to decimal is using powers of 2.
This is a simple math trick where I multiply each digit by 2 and either add 1 or 0.

```rb
def get_decimal_value(head)
  ret = 0
  while head != nil
    ret = (ret<<1) + head.val
    head = head.next
  end

  ret
end
```