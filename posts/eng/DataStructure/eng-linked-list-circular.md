### What is Circular Linked List?
The end of the linked lists are normally defined by the tail node pointing to `nil`. In the case of <routerlink to="/en-data-structure-linked-list-doubly">Doubly Linked List</router-link> both the `head.prev` and `tail.next` points to `nil`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-example.png" alt="Linked list picture">
</div>

In the circular linked list, however, `tail.next` points to the head node and `head.prev` points back to the tail node.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly.png" alt="Linked list picture">
</div>

### Node Structure
The difference of circular list and other linked lists are in adding and removing nodes; thus, the structure of the Node of the circular list is same with other typical linked lists' structures of the Node.

**Circular Singly Linked List**

```rb
class Node
  attr_accessor :data, :next     

  def initialize(data, _next=nil)
    @data = data
    @next = _next
  end
end
```

**Circular Doubly Linked List**

```rb
class Node
  attr_accessor :data, :prev, :next

  def initialize(data, prev=nil, _next=nil)
    @data = data
    @prev = prev
    @next = _next
  end
end
```

<div class="divider"></div>

### Circular Linked List Implementation

### initialize: Constructor

**Circular Singly Linked List**

```rb
def initialize
  @last = nil
  @length = 0
end
```

In a singly linked list, normally `@head` -- a node which holds the address of the first node -- is used. In a circular singly list, however, we use `@last` which is a node that holds the last element of a linked list.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert1.png" alt="circular singly list image">
</div>

We can still use `@head`, but it is better to use `@last` because by doing it this way, we have a direct access to the tail (`@last`) and the head (`@last.next`). Also in some insert/remove operations, it is more efficient and time saving to know the last node rather than the first node.

**Circular Doubly Linked List**

```rb
def initialize
  @head = nil
  @length = 0
end
```

In Circular Doubly Linked List, we can access the tail node with `@head.prev`, so we only define and use `@head`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert1.png" alt="circular doubly linked list picture">
</div>


### insert

`insert` method adds a node at the back of the list.

**Circular Singly Linked List**

```rb
  new_node = Node.new(data)
  new_node.next = @last.next
  @last.next = new_node
  @last = new_node
```

First, let the `new_node` point at the head node which is `@last.next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert2.png" alt="circular singly list image">
</div>

Now we need to update the link of `@last` so that it's pointing at the `new_node` or the new last node.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert3.png" alt="circular singly list image">
</div>

Now `new_node` is the last node so update the `@last` so that it actaully holds the address of the last node.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert4.png" alt="circular singly list image">
</div>

**Circular Doubly Linked List**

```rb
  new_node = Node.new(data)
  new_node.prev = @head.prev
  new_node.next = @head
  @head.prev.next = new_node
  @head.prev = new_node
```

In circular doubly list, we need to to take care of both `prev` and `next` which makes it a bit more complex than the circular singly list. 

Lets take a look at the `new_node` part first. Our new node will be the new last node, so let `new_node.prev` and `new_node.next` point to the current last node (`B` node in the figure below) and the current head node respectively.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert2.png" alt="circular doubly linked list picture">
</div>

Now let `B.next` (`@head.prev.next`) point to the new last node.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert3.png" alt="circular doubly linked list picture">
</div>

And last but not least, let `@head.prev` be theh new last node (`new_node`).

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert4.png" alt="circular doubly linked list picture">
</div>


### insert\_at

#### Inserting a node at the back of the list

**Circular Singly/Doubly Linked List**

```rb
  if @length == 0 or index == @length
    insert(data)
  end
```

When inserting a node at the back, simply call `insert` method that we implemented earlier.

#### Inserting a node at the front of the list

**Circular Singly Linked List**

```rb
  new_node = Node.new(data)
  new_node.next = @last.next
  @last.next = new_node
```

Our `new_node` will become the new head. Since we need to place this node in between the current last and head node, first link `new_node` with the current head, `@last.next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at1.png" alt="circular doubly linked list picture">
</div>

And let `@last` point to the new head.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at2.png" alt="circular doubly linked list picture">
</div>

**Circular Doubly Linked List**

```rb
  new_node = Node.new(data)
  new_node.prev = @head.prev
  new_node.next = @head

  @head.prev.next = new_node
  @head.prev = new_node
  @head = new_node
```

The idea is pretty much the same. Lets first connect `new_node`'s `prev` and `next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at3.png" alt="circular doubly linked list picture">
</div>

Currently `last.next` is pointing at the old head. We need to fix this link so that it's pointing to the new head (`new_node`). 

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at4.png" alt="circular doubly linked list picture">
</div>

And finally, we update `head.prev` so that it's pointing to our new head.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at5.png" alt="circular doubly linked list picture">
</div>
 Inserting a node in between nodes

**Circular Singly Linked List**

```rb
  curr = get_node_at(index-1)

  new_node = Node.new(data)
  new_node.next = curr.next
  curr.next = new_node
```

When we're inserting a new node at index `i`, we need to have an access to a node located at `i-1`. We save this node at `curr` and let new node point to `curr.next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at3.png" alt="circular doubly linked list picture">
</div>

And we connect `curr.next` with `new_node` and we're done.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at4.png" alt="circular doubly linked list picture">
</div>

**Circular Doubly Linked List**

```rb
  curr = get_node_at(index)

  new_node = Node.new(data)
  new_node.prev = curr.prev
  new_node.next = curr

  curr.prev.next = new_node
  curr.prev = new_node
```

Save the node located at the index we're going to insert a new node to `curr` -- `B` node in the figure below -- and link `new_node.prev` and `new_node.next` to `curr.prev` and `curr.next` respectively.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at1.png" alt="circular doubly linked list picture">
</div>

And let `curr.prev.next` -- `head.next` -- and `curr.prev` point to `new_node`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at2.png" alt="circular doubly linked list picture">
</div>

### remove\_at

#### Removing the head node

**Circular Singly Linked List**

```rb
def remove_front
  temp = @last.next
  @last.next = @last.next.next
  temp = temp.next = nil
end
```

Since `@last.next` points to the head node, we can simply re-link this node to `@last.next.next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at1.png" alt="circular doubly linked list picture">
</div>

**Circular Doubly Linked List**

```rb
def remove_front
  temp = @head
  @head.next.prev = @head.prev
  @head.prev.next = @head.next
  @head = @head.next
  temp = temp.next = temp.prev = nil
end
```

We need to dislink all nodes connected to `@head`.
```rb
  @head.next.prev = @head.prev  # B.next
  @head.prev.next = @head.next  # C.next
```

Below figure shows the state of our circular linked list after above two lines are executed.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at1.png" alt="circular doubly linked list picture">
</div>

And then we move the `@head` to its next node (`@head.next`).

```rb
  @head = @head.next
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at2.png" alt="circular doubly linked list picture">
</div>
 Removing the tail node

**Circular Singly Linked List**

```rb
def remove_last
  curr = get_node_at(@length-2) 
  temp = curr.next
  curr.next = @last.next    # curr.next = A
  @last = curr
  temp = temp.next = nil
end
```

In order to remove the `@last` node, we need to have an access to its previous node (`B` node in the figure below). We save this node to `curr` and let `curr.next` point to `@last.next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at2.png" alt="circular doubly linked list picture">
</div>

And then we update the `@last`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at3.png" alt="circular doubly linked list picture">
</div>

**Circular Doubly Linked List**

```rb
def remove_last
  temp = @head.prev
  @head.prev.prev.next = @head   # A.next = @head
  @head.prev = @head.prev.prev   # @head.prev = A
  temp = temp.prev = temp.next = nil
end
```

The idea is same as the circular singly list except that it's much easier.
Since we can access to its previous node using `prev`, we can access tail's previous node using `@head.prev.prev`. Once we're there, we simply disconnect the link from the current tail and re-link it to the head.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at3.png" alt="circular doubly linked list picture">
</div>
 Removing the node in between two nodes

**Circular Singly Linked List**

```rb
  curr = get_node_at(index-1)
  curr.next = curr.next.next
```

The code basically same as removing the first node except that the position is different.

**Circular Doubly Linked List**

```rb
  curr = get_node_at(index)
  curr.next.prev = curr.prev
  curr.prev.next = curr.next
```

Same as above. The idea is exactly same with the one removing the first node except that we don't update the `@head` since we're not changing the head of the list.

<div class="divider"></div>

### Source code
- [Circular Linked List full implementation source code](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/cll.rb)
- [Circular Linked List testing code](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/test.rb)


### Related Post
- <router-link to="./eng-linked-list">What is Linked List?</router-link>
- <router-link to="./eng-linked-list-singly">Singly Linked List</router-link>
- <router-link to="./eng-linked-list-doubly">Doubly Linked List</router-link>