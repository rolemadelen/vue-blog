
## Singly Linked List?

Singly Linked List is a unidirectional list and its node contains a single pointer which references the next node somewhere in the memory.

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

I made a separate class for the node and it holds following two member variables:
1. `next` pointer to reference the next node.
2. `data` to store node's value.

```cpp
template <class T>
class Node 
{
  private:
  public:
    Node(T data) : next(nullptr) { this->data = data; }

    Node<T> *next;
    T data;
};
```

## Implementation
Below is the specification file for the Singly Linked List used in this post.

```cpp
template <class T>
class SinglyLinkedList
{
  private: 
    Node<T> *head;
    Node<T> *tail;
    int size;

  public:
    SinglyLinkedList();
    SinglyLinkedList(T data);
    ~SinglyLinkedList();

    void push_front(T data);
    void push_back(T data);
    void push_at(int index, T data);

    void pop_front();
    void pop_back();
    void pop_at(int index);

    T peek_first();
    T peek_last();

    void traverse();

};
```

`tail` node is used to remember the end of the list. This is completely optional but by using it, we 
can insert an element at the end at a constant time.

Lets go through each member functions and see how it works.

## Initializing the List

There are many ways to initialize the list. Here, I utilized the default and parameterized constructor.

### Default Constructor

Initialize both pointers with `null` and `0` for the size.

```cpp
/* Default Constructor */
template <class T>
SinglyLinkedList<T>::SinglyLinkedList()
{
  head = tail = nullptr;
  size = 0;
}
```

### Parameterized Constructor 

Create a node with a value passed into the parameter, and let `head` and `tail` be that node.
Initialize the `size` to `1` not `0`.

![Linked List image](assets/data-structure/linked-list/sll-constructor-1.png)

```cpp
/* Constructor with one parameter */
template <class T>
SinglyLinkedList<T>::SinglyLinkedList(T data)
{
  head = new Node(data);
  tail = head;
  size = 1;
}
```

## Adding a data

We can add data either at the beginning, middle, or end of the list.

### Add to the beginning

1. Create a new node.
2. New node points to the current head.
3. Update the `head` pointer.
4. (If you're using the `tail` node) make sure `tail` pointer is not `null`.

```cpp
template <class T>
void SinglyLinkedList<T>::push_front(T data) 
{
  Node<T> *temp = new Node<T>(data);
  temp->next = head;
  head = temp;

  if (tail == nullptr)
  {
    tail = head;
    tail->next = nullptr;
  }

  ++size;
}
```

### Add to the end

```cpp
template <class T>
void SinglyLinkedList<T>::push_back(T data) 
{
  if (size == 0) 
  {
    push_front(data);
    return;
  }

  Node<T> *temp = new Node<T>(data);
  tail->next = temp;
  tail = temp;
  tail->next = nullptr;

  ++size;
}
```

### Add in between

```cpp
template <class T>
void SinglyLinkedList<T>::push_at(int index, T data)
{
  if (index <= 0) 
  {
    push_front(data);
  }
  else if (index >= size) 
  {
    push_back(data);
  }
  else 
  {
    Node<T> *temp = head;
    for (int i=0; i<index-1; ++i)
    {
      temp = temp->next;
    }

    Node<T> *newNode = new Node<T>(data);
    newNode->next = temp->next;
    temp->next = newNode;
    ++size;
  }
}
```

## Deleting a data

### Delete from beginning
```cpp
template <class T>
void SinglyLinkedList<T>::pop_front()
{
  if (size == 0)
  {
    cerr << "pop_front(): List is empty" << endl;
    return;
  }

  --size;
  Node<T> *temp = head;
  head = head->next;
  delete temp;
}
```

### Delete from end
```cpp
template <class T>
void SinglyLinkedList<T>::pop_back()
{
  if (size == 0)
  {
    cerr << "pop_front(): List is empty" << endl;
    return;
  }

  if (size == 1)
  {
    delete head;
    head = tail = nullptr;
    size = 0;
    return;
  }

  Node<T> *temp = head;
  for (int i=1; i<size-1; ++i)
  {
    temp = temp->next;
  }

  delete temp->next;
  temp->next = nullptr;
  tail = temp;

  --size;
}
```

### Delete from middle
```cpp
template <class T>
void SinglyLinkedList<T>::pop_at(int index)
{
  if (index <= 0) 
  {
    pop_front();
  }
  else if (index >= size)
  {
    pop_back();
  }
  else 
  {
    Node<T> *temp = head;
    for (int i=0; i<index-1; ++i)
    {
      temp = temp->next;
    }
    Node<T> *temp2 = temp->next;
    temp->next = temp->next->next;
    --size;
    delete temp2;
  }
}
```

## Peeking a data

```cpp
template <class T>
T SinglyLinkedList<T>::peek_first()
{
  if (size == 0)
  {
    cerr << "List is empty" << endl;
    return static_cast<T>(-1);
  }

  return head->data;
}

template <class T>
T SinglyLinkedList<T>::peek_last()
{
  if (size == 0)
  {
    cerr << "List is empty" << endl;
    return static_cast<T>(-1);
  }

  return tail->data;
}
```

## Traversing a linked list

```cpp
template <class T>
void SinglyLinkedList<T>::traverse()
{
  if (head == nullptr) 
  {
    cout << "traverse(): List is emtpy" << endl;
    return;
  }

  Node<T> *temp = head;
  while(temp->next != nullptr) 
  {
    cout << temp->data << ' ';
    temp = temp->next;
  }

  cout << temp->data << endl;
}
```

## Example

```cpp
#include "sll.hpp"

using std::cin;

int main()
{
  SinglyLinkedList<int> sll;
  int choice;

  while(true)
  {
    cout << "=================================================" << endl;
    cout << "1. push_front    2. push_back     3. push_at" << endl;
    cout << "4. pop_front     5. pop_back      6. pop_at" << endl;
    cout << "7. traverse      8. peek_front    9. peek_last" << endl;
    cout << "0. exit" << endl;
    cout << "> ";
    cin >> choice;
    cout << "=================================================" << endl;

    int data, index;
    switch(choice)
    {
      case 1: 
        cout << "Enter the data to insert: ";
        cin >> data;
        sll.push_front(data);
        break;
      case 2:
        cout << "Enter the data to insert: ";
        cin >> data;
        sll.push_back(data);
        break;
      case 3: 
        cout << "enter the index and data: ";
        cin >> index >> data;
        sll.push_at(index, data);
        break;
      case 4: 
        sll.pop_front(); 
        break;
      case 5: 
        sll.pop_back(); 
        break;
      case 6: 
        cout << "Pop the element located at: ";
        cin >> index;
        sll.pop_at(index); 
        break;
      case 7:
        sll.traverse();
        break;
      case 8:
        cout << "front: " << sll.peek_first() << endl;
        break;
      case 9:
        cout << "back: " << sll.peek_last() << endl;
        break;
      case 0:
        // fallthrough
      default:
        cout << "Exit" << endl;
        goto Loop;
    }
  }
Loop:
  return 0;
}

```

[View full source code](https://github.com/bugxvii/ds-algo/blob/master/linkedlist/singly/sll.hpp).

## Related Post
- <router-link to="./eng-linked-list">What is Linked List?</router-link>
- <router-link to="./eng-linked-list-doubly">Doubly Linked List</router-link>
- <router-link to="./eng-linked-list-circular">Circular Linked List</router-link>