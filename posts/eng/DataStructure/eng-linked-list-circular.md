## What is a Circular Linked List?

In <router-link to="./eng-linked-list-singly">singly</router-link> and <router-link to="./eng-linked-list-doubly">doubly linked list</router-link>, we can track the end of list by finding a node that points to `nil`; doubly linked has one more of this node, which is `head.prev`, like the figure below.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-example.png" alt="Linked list picture">
</div>

A circular linked list is a linked list that does not end; there is no `nll`. The last element of the node links back to its first node; for the case of doubly linked list, `head.prev` 
is linked with the last node. This is perhaps why it's called a _circular_ linked list.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly.png" alt="Linked list picture">
</div>

## Structure of a Node

A circular linked list is a variation of a singly and a doubly linked list; the structure of a node in a circular linked list will be based on the type of a linked list we use.

### **Circular Singly Linked List**

```cpp
template <class T>
class Node 
{ 
  private:
  public:
    Node<T>(T val) : next(nullptr) { data = val; }
    Node<T> *next;
    T data;
};
```

### **Circular Doubly Linked List**

```cpp
template <class T>
class Node 
{ 
  private:
  public:
    Node<T>(T val) : next(nullptr), prev(nullptr) { data = val; }
    Node<T> *next;
    Node<T> *prev;
    T data;
};
```

## Implementation

Let's go through each operation in a circular linked list including the constructor, and see how to implement them in both circular singly and doubly linked lists.

### Constructor

### **Circular Singly Linked List**

In a singly linked list, most operations start by accessing the first node and traverse to insert, delete, or search an element. So we save the first element into a node called `head` or `first` (names don't matter, but these two are typically used).

Circular singly linked list is little different. We save the _last_ element into a node called `tail` or `last`; we don't use `head`.

```cpp
template <class T>
CircularLinkedList<T>::CircularLinkedList(int val)
{
  last = new Node(val);
  last->next = last;
  size = 1;
}
```

Having the `last` node serves as a great advantage in singly linked lists especially when inserting a new element at the end. 
We don't have to traverse the whole list; we can insert a new element at the end in constant time using `last->next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert1.png" alt="circular singly list image">
</div>

<div class="divider"></div>

### **Circular Doubly Linked List**

A doubly linked list can traverse the list in both ways using `next` and `prev` pointers, thus there's no need to use the `last` node.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert1.png" alt="circular doubly linked list picture">
</div>

We use `head` and access the last node via `head->prev`.

```cpp
template <class T>
DoublyLinkedList<T>::DoublyLinkedList(int val)
{
  head = new Node(val);
  head->next = head->prev = head;
  size = 1;
}
```

## Insert at the beginning

### **Circular Singly Linked List**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::insert_front(int val) 
{
  if (size == 0) 
  {
    last = new Node<T>(val);
    size = 1;
    return;
  }

  Node<T> *newNode = new Node(val);
  newNode->next = last->next;
  last->next = newNode;
}
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at1.png" alt="circular doubly linked list picture">
</div>

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at2.png" alt="circular doubly linked list picture">
</div>

### **Circular Doubly Linked List**

```cpp
  template <class T>
void CircularDoublyLinkedList<T>::insert_front(int val) 
{
  if (size == 0) 
  {
    init(val);
    return;
  }

  Node<T> *newNode = new Node(val);
  link(head->prev, newNode);
  head = newNode;
}
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at3.png" alt="circular doubly linked list picture">
</div>

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at4.png" alt="circular doubly linked list picture">
</div>

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at5.png" alt="circular doubly linked list picture">
</div>

## Insert at the end

### **Circular Singly Linked List**

We're trying to add a new node at the end, and we have this `last` node which is pointing at the last node.
We can simply connect this `last` with a `newNode`, and update the `last` so that its pointing at the new last not the old one.

Here's the code.

```cpp
template <class T>
void CircularSinglyLinkedList<T>::insert_back(int val) 
{
  Node<T> *newNode = new Node(val);
  newNode->next = last->next;
  last->next = newNode;
  last = newNode;
}
```

Let's go through each step with figures.

```cpp
  newNode->next = last->next;
```

`newNode` is going to be our new last node and `newNode->next` should point to the first element of the list.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert2.png" alt="circular singly list image">
</div>

```cpp
  last->next = newNode;
```

Update the `last` so that its pointing at the correct node.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert3.png" alt="circular singly list image">
</div>

```cpp
  last = newNode;
```

We just added new node into the list, thus `last` is no longer storing the last element. Update its value so that its actually holding 
the last node.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert4.png" alt="circular singly list image">
</div>

### **Circular Doubly Linked List**

Let's take a look at the code first.

```cpp
template <class T>
void CircularDoublyLinkedList<T>::insert_back(int val) 
{
  Node<T> *newNode = new Node(val);

  Node<T> *last = head->prev;
  newNode->next = last->next;
  newNode->prev = last;
  last->next = newNode;
  head->prev = newNode;
}
```

When we add or remove the node, we need to take care of two pointers: `prev` and `next`. Let's connect our `newNode` first.
```cpp
  Node<T> *last = head->prev;
  newNode->next = last->next;
  newNode->prev = last;
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert2.png" alt="circular doubly linked list picture">
</div>

Our current `last`, which is B, is pointing at the first elment, but this should be updated and point the `newNode`.
```cpp
  last->next = newNode;
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert3.png" alt="circular doubly linked list picture">
</div>

Last but not least, the previous node of our current `head` should now be the `newNode`.
```cpp
  head->prev = newNode;
```
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert4.png" alt="circular doubly linked list picture">
</div>

## Insert in between

### **Circular Singly Linked List**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::insert_at(int index, int val) 
{
  Node<T> *temp = last;
  for (int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }

  Node<T> *newNode = new Node(val);
  newNode->next = temp->next;
  temp->next = newNode;
}
```

When we're inserting a new node at index `i`, we need to have an access to a node located at `i-1`. We save this node at `curr` and let new node point to `curr.next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at3.png" alt="circular doubly linked list picture">
</div>

And we connect `curr.next` with `new_node`. 

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at4.png" alt="circular doubly linked list picture">
</div>

Lets rearrange those nodes in the figure just to double check that everything is well connected.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at5.png" alt="circular doubly linked list picture">
</div>

### **Circular Doubly Linked List**

```cpp
template <class T>
void CircularDoublyLinkedList<T>::insert_at(int index, int val) 
{
  Node<T> *temp = head->prev;
  for (int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }

  Node<T> *newNode = new Node(val);
  link(temp, newNode);
}
```

Save the node located at the index we're going to insert a new node to `curr` (`B` in the below figure) node in the figure below -- and link `new_node.prev` and `new_node.next` to `curr.prev` and `curr.next` respectively.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at1.png" alt="circular doubly linked list picture">
</div>

And let `head.next` and `curr.prev` point to `new_node`, and it looks like the below.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at6.png" alt="circular doubly linked list picture">
</div>

Which is basically same as this.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at2.png" alt="circular doubly linked list picture">
</div>


### remove\_at

### Removing the head node

### **Circular Singly Linked List**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_front()
{
  if (size == 1)
  {
    delete last;
    last = nullptr;
    return;
  }

  Node<T> *temp = last->next;
  last->next = last->next->next;

  delete temp;
}
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at0.png" alt="circular doubly linked list picture">
</div>

Since `@last.next` points to the head node, we can simply re-link this node to `@last.next.next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at1.png" alt="circular doubly linked list picture">
</div>

**Circular Doubly Linked List**

```cpp
template <class T>
void CircularDoublyLinkedList<T>::remove_front()
{
  if (size == 1)
  {
    delete head;
    head = nullptr;
    size = 0;
  }
  else
  {
    Node<T> *temp = head->next;
    head->next->prev = head->prev;
    head->prev->next = head->next;
    delete head;
    head = temp;
  }
}
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at0.png" alt="Linked list picture">
</div>

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
 
### Removing the tail node

### **Circular Singly Linked List**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_back()
{
  if (size == 1)
  {
    delete last;
    last = nullptr;
    size = 0;
    return;
  }

  Node<T> *temp = last->next;
  while (temp->next != last) 
  {
    temp = temp->next;
  }

  temp->next = temp->next->next;
  delete last;
  last = temp;
}
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at0.png" alt="circular doubly linked list picture">
</div>

In order to remove the `@last` node, we need to have an access to its previous node (`B` node in the figure below). We save this node to `curr` and let `curr.next` point to `@last.next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at2.png" alt="circular doubly linked list picture">
</div>

And then we update the `@last`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at3.png" alt="circular doubly linked list picture">
</div>

**Circular Doubly Linked List**

```cpp
template <class T>
void CircularDoublyLinkedList<T>::remove_back()
{
  if (size == 1)
  {
    delete head;
    head = nullptr;
    size = 0;
  }
  else
  {
    Node<T> *temp = head->prev;
    head->prev->prev->next = head;
    head->prev = head->prev->prev;
    delete temp;
  }
}
```

The idea is same as the circular singly list except that it's much easier.
Since we can access to its previous node using `prev`, we can access tail's previous node using `@head.prev.prev`. Once we're there, we simply disconnect the link from the current tail and re-link it to the head.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at3.png" alt="circular doubly linked list picture">
</div>

### Removing the node in between two nodes

### **Circular Singly Linked List**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_at(int index)
{
  if (size == 0) 
  {
    cerr << "List is empty..." << endl;
    return;
  }

  Node<T> *temp = last->next;
  for(int i=1; i<index && i<size; ++i) 
  {
    temp = temp->next;
  }

  Node<T> *temp2 = temp->next;
  temp->next = temp->next->next;
  delete temp2;

  if (size == 1)
    last = temp;
}
```

The code basically same as removing the first node except that the position is different.

**Circular Doubly Linked List**

```cpp
template <class T>
void CircularDoublyLinkedList<T>::remove_at(int index)
{
  Node<T> *temp = head;
  for(int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }

  temp->prev->next = temp->next;
  temp->next->prev = temp->prev;
  delete temp;
  temp = nullptr;
}
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