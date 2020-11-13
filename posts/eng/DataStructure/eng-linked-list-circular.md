<div class="update">
last updated: November 11th, 2020
</div>

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

Let's go through each operation in a circular linked list, and see how to implement them in both circular singly and doubly linked lists.

```cpp
template <class T>
class CircularLinkedList 
{
  private:
    // ...
  public: 
    CircularLinkedList(T val);
    ~CircularLinkedList();

    void insert_front(T val);
    void insert_back(T val);

    void remove_front();
    void remove_back();

    // ...
};
```

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
  Node<T> *newNode = new Node(val);
  newNode->next = last->next;
  last->next = newNode;
}
```

We need to let `newNode` point to the first element in the list which is `last->next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at1.png" alt="circular doubly linked list picture">
</div>

Currently our `last->next` is pointing at A. We need to update this so that it's pointing at the new head, which is `newNode`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at2.png" alt="circular doubly linked list picture">
</div>

### **Circular Doubly Linked List**

```cpp
template <class T>
void CircularDoublyLinkedList<T>::insert_front(int val) 
{
  Node<T> *newNode = new Node(val);

  newNode->next = head;
  newNode->prev = head->prev;
  head->prev->next = newNode;
  head->prev = newNode;
  head = newNode;
}
```

First connect `newNode->prev` and `newNode->next`.

```cpp
  newNode->next = head;
  newNode->prev = head->prev;
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at3.png" alt="circular doubly linked list picture">
</div>

Our current `last->next` is pointing at the first element in the list. Update this so that its pointing at `newNode`.

```cpp
  head->prev->next = newNode;
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at4.png" alt="circular doubly linked list picture">
</div>

And lastly, update our current `head->prev` so that it points to `newNode`.

```cpp
  head->prev = newNode;
  head = newNode;
```
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at5.png" alt="circular doubly linked list picture">
</div>

## Insert at the end

### **Circular Singly Linked List**

We're trying to add a new node at the end, and we have this `last` node which is pointing at the last node.
We can simply connect this `last` with `newNode`, and update `last` so that its pointing at the new last not the old one.

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

Let's go through each step, line by line.

```cpp
  newNode->next = last->next;
```

`newNode` is going to be our new last, thus `newNode->next` should point to the first element of the list, which is current `last->next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert2.png" alt="circular singly list image">
</div>

```cpp
  last->next = newNode;
```

Update the `last->next` so that its pointing `newNode`, which is our new last.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert3.png" alt="circular singly list image">
</div>

```cpp
  last = newNode;
```

Finally, update our `last`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert4.png" alt="circular singly list image">
</div>

### **Circular Doubly Linked List**

```cpp
template <class T>
void CircularDoublyLinkedList<T>::insert_back(int val) 
{
  Node<T> *newNode = new Node(val);

  Node<T> *last = head->prev;
  newNode->prev = last;
  newNode->next = head;
  last->next = newNode;
  head->prev = newNode;
}
```

Let's connect `newNode->prev` and `newNode->next` with current last and first node respectively.

```cpp
  Node<T> *last = head->prev;
  newNode->prev = last;
  newNode->next = head;
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert2.png" alt="circular doubly linked list picture">
</div>

Our current `last`, which is B, is pointing at the first element, but this should be updated and point to `newNode`.

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

### Remove the first node

### **Circular Singly Linked List**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_front()
{
  if (size == 1)
  {
    delete last;
    last = nullptr;
    size = 0;
  }
  else
  {
    Node<T> *temp = last->next;
    last->next = last->next->next;

    delete temp;
  }
}
```

The process of removing the first node is candid. Since `last->next` is pointing at the first node, we just update this link.

So if we have this list with three elements like the below, 
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at0.png" alt="circular doubly linked list picture">
</div>

we can update our `last->next` to point `last->next->next`.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at1.png" alt="circular doubly linked list picture">
</div>

### **Circular Doubly Linked List**

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

This one is a bit trickier than the circular singly linked list.

Let say we have this linked list (see the figure below), and we're trying to remove the current head node.
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at0.png" alt="Linked list picture">
</div>

First, delink all nodes connected to `head`.
```cpp
  head->next->prev = head->prev;  // B->prev = C;
  head->prev->next = head->next;  // C->next = B;
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at1.png" alt="circular doubly linked list picture">
</div>

Then update the `head`.

```cpp
  delete head;
  head = temp; // head = head->next
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at2.png" alt="circular doubly linked list picture">
</div>
 
### Remove the last node

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
  }
  else 
  {
    Node<T> *curr = last->next;
    while (curr->next != last) 
    {
      curr = curr->next;
    }

    curr->next = curr->next->next;
    delete last;
    last = curr; 
  }
}
```

We have a list like the below.
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at0.png" alt="circular doubly linked list picture">
</div>

In order to remove `last`, we need to first navigate to the previous node of `last`, which is B in the figure.

```cpp
  Node<T> *curr = last->next;
  while (curr->next != last) 
  {
    curr = curr->next;
  }
```

Now we're at B. Let's update this link so that its no longer pointing at `last`.
```cpp
  temp->next = temp->next->next;
```
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at2.png" alt="circular doubly linked list picture">
</div>

And then we let our B to be the new last node.
```cpp
  delete last;
  last = temp; 
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at3.png" alt="circular doubly linked list picture">
</div>

### **Circular Doubly Linked List**

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

It looks complicated compare to the singly linked list, but it's actually much simpler.
We can directly access any node's previous node using the `prev` pointer. 

So the previous node of our current last would be `head->prev->prev`. Update this node's `next` so that its pointing to `head`.
Also update `head->prev` so that its pointing to the node previous to the current `last`.

```cpp
  head->prev->prev->next = head;
  head->prev = head->prev->prev;
```

And delete the current last.
```cpp
  delete temp;
```

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at3.png" alt="circular doubly linked list picture">
</div>
<div class="divider"></div>

### Source code
- [Circular Linked List full implementation source code](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/cll.rb)
- [Circular Linked List testing code](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/test.rb)


### Related Post
- <router-link to="./eng-linked-list">What is Linked List?</router-link>
- <router-link to="./eng-linked-list-singly">Singly Linked List</router-link>
- <router-link to="./eng-linked-list-doubly">Doubly Linked List</router-link>