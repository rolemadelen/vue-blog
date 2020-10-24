
## Linked List

A **linked list** is a data strucutre which stores the object in **linear order**. 
This order, however, is not decided by its index like an array. The order of the linked list
is determined by a pointer in each object.

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

## Node
Each object in a list is called **node**.

Node consists of a *data* and a pointer that references the *next*, *previous*, or *both*.

```cpp
class Node 
{
  public: 
    Node(int val):data(val), next(nullptr), prev(nullptr) {}

    int data;
    Node *next;
    Node *prev;
};
```

## Types of Linked List

- Singly
  + node has a *next* pointer.
- Doubly
  + node has both *next* and *prev* pointers.
- Circular
  + the first node's *prev* points to the last node and last node's *tail* points to the first node.
- Sorted
  + singly, doubly, or circular linked list with orders preserved.
  + The head node is the smallest item and the tail node is the largest or vice versa.

## Operations

### search(L, k)

This function finds the first element with key *k* in list *L*.

```cpp
Node* search(Node *L, int key) 
{
  Node *curr = L->head;
  while (curr->next != nullptr and curr->key != key)
    curr = curr->next;

  return curr;
}
```

Time complexity: **O(n)**

<div class="divider"></div>

### insert(L, x)

This function splices `x` onto the front of the list `L`.

```cpp
  void insert(Node *L, Node *x) 
  {
    x->next = L->head;
    if (L->head != nullptr)
      L->head->prev = x;

    L->head = x;
    x->prev = nullptr;
  }
  ```

Time complexity: **O(1)**

<div class="divider"></div>

### delete(L, x)

This function removes an element `x` from the list `L`.

```cpp
  void delete(Node *L, Node *x) 
  {
    if (x->prev != nullptr)
      x->prev->next = x->next;
    else
      L->head = x->next;

    if (x->next != nullptr)
      x->next->prev = x->prev;

    delete x;
  }
```

Time complexity: **O(1)**

## Sentinels

We can ignore the boundary conditions of head and tail in `insert` and `delete` by using a **sentinel** node. 
A *sentinel* is simply a dummy node that lies in between head and tail and it doesn't hold any values.

`sentinel->next` points to the head and `sentinel->prev` points to the tail of the list.

![sentinel node](assets/data-structure/linked-list/sentinel-node.png)

Part `(a)` shows an **empty** list with only the sentinel in the list.

In part `(b)`, `sentinel->next` points to the first node of the list (`9`) and `sentinel->prev` points to the 
last node of the list(`1`).

Now we can simplify our `insert` and `delete` function like the below.

 ```cpp
  void insert(Node *sentinel, Node *x) 
  {
    x->next = sentinel->next;
    sentinel->next->prev = x;
    sentinel->next = x;
    x->prev = sentinel;
  }

  void delete(Node *x) 
  {
    x->prev->next = x->next;
    x->next->prev = x->prev;
    delete x;
  }
  ```

Sentinels should be used judiciously since it doesn't have any effect on its performance. In fact, 
it could waste lot of memory by adding an extra node, a sentinel, in many small lists. 

So use sentinels when you're sure that it will simplify your code.

## Advantages of Linked List
- Unlike the arrays, the size of the linked lists is dynamic. You can insert or delete elements
without resizing or shifting its elements.
- Linked lists have faster insert and delete operations.

## Disadvantages of Linked List
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

## Reference
- Introduction to Algorithms, 3rd Edition (CLRS)

### Related Post
- <router-link to="./eng-linked-list-singly">Singly Linked List</router-link>
- <router-link to="./eng-linked-list-doubly">Doubly Linked List</router-link>
- <router-link to="./eng-linked-list-circular">Circular Linked List</router-link>