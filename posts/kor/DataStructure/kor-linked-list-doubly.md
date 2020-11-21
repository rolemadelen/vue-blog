<div class="update">
last updated 11.21.20
</div>

## 이중 연결 리스트란?
> 해당 글에서의 '리스트'는 '연결 리스트'를 의미합니다.

이중 연결 리스트는 단방향으로만 이동이 가능했던 단일 연결 리스트와는 달리, 앙방향으로 이동이 가능한 자료구조이다.
이중 리스트의 각 노드들은 `prev`와 `next` 두 개의 포인터를 가지며, 이들을 이용해 현재 노드의 이전(*prev*)과 다음(*next*)노드를 가리킬 수 있다.

예를들어 아래와 같은 리스트가 있을 때, 두 번째 노드인 **B**의 이전과 다음 노드는 `B-prev`와 `B->next`로 접근이 가능하다.

![Linked List image](assets/data-structure/linked-list/dll.png)

## 노드의 구조

위에서 언급한대로, 이중 연결 리스트의 노드에는 두 개의 포인터가 존재하는데, 바로 `prev`와 `next`이다.
이 두 포인터를 이용해 앞뒤 어느 방향으로도 순회가 가능하다.

```cpp
template <class T>
class Node 
{ 
  private:
  public:
    Node<T>(T val) : prev(nullptr), next(nullptr) { data = val; }
    Node<T> *prev;
    Node<T> *next;
    T data;
};
```

## 구현

해당 글에서 구현 할 이중 연결 리스트의 인터페이스는 아래와 같다.

```cpp
template <class T>
class DoublyLinkedList 
{
  private: 
    Node<T> *head;
    int capacity;

  public: 
    DoublyLinkedList(int val);
    ~DoublyLinkedList();

    void init(T val);
    void insert_back(int val);
    void insert_front(int val);
    void insert_at(int index, int val);

    void remove_back();
    void remove_front();
    void remove_at(int index);

    void link(Node<T> *a, Node<T> *b);
    void print();
};
```

그럼 각각의 함수들이 어떻게 동작하는지, 하나하나 살펴보도록 하자.

## 생성자

초기 노드의 데이터 값을 매개변수로 받아 `head`노드와 `tail`을 정의한다. `tail`은 리스트의 마지막 노드를 가리킨다.

```cpp
template <class T>
DoublyLinkedList<T>::DoublyLinkedList(int val)
{
  head = new Node<T>(val);
  tail = head;
  head->next = tail;
  tail->prev = head;
  head->prev = tail->next = nullptr;
}
```

![Linked List image](assets/data-structure/linked-list/dll-constructor.png)


## 노드의 삽입

편의를 위해 `link(curr, newNode)`라는 도움 함수를 만들었다. 매개변수의 **첫 번째** 인자는 현재 내가 가리키고 있는 노드이며, **두 번째** 인자는
지금 가리키고 있는 노드와 연결 할 노드를 의미한다.

```cpp
template <class T>
void DoublyLinkedList<T>::link(Node<T> *curr, Node<T> *newNode)
{
  curr->next = newNode;
  newNode->prev = curr;
}
```

### 리스트 끝에 추가
```cpp
template <class T>
void DoublyLinkedList<T>::insert_back(int val) 
{
  Node<T> *newNode = new Node(val);
  if (capacity == 1)
  {
    link(head, newNode);
  }
  else 
  {
    link(tail, newNode);
  }
  tail = newNode;
}
```

우선 리스트에 존재하는 노드가 `head` 뿐인지 검사한다. 만약 그렇다면 `head`뒤에 새로운 노드를 삽입하고 `tail`이 마지막 노드를 참조하도록 한다.
아래의 그림에서는 `newNode`가 `tail`이 된다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert1.png" alt="head and tail pointing to the node">
</div>

한 개 이상의 노드가 리스트에 존재한다면, 마지막 노드를 가리키는 `tail` 뒤에 바로 노드를 삽입한다. 그리고 다시 `tail`이 마지막 노드(`newNode`)를 가리키도록 하면된다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert2.png" alt="tail pointing to the new node">
</div>

### 리스트 처음에 추가
```cpp
template <class T>
void DoublyLinkedList<T>::insert_front(int val) 
{
  Node<T> *newNode = new Node(val);
  if (capacity == 1)
  {
    link(newNode, tail);
  }
  else
  {
    link(newNode, head);
  }
  head = newNode;
}
```

리스트 끝에 추가하는 `insert_back` 함수와 거의 완전히 동일하게 동작한다. 다만 새로운 노드를 `tail`이 아닌 `head`와 연결시킨다.

### 리스트 중간에 추가

매개변수로 노드를 삽입 할 위치인 `index`와 노드의 값 `val`을 넘겨받는다. `index`는 제로베이스로 0부터 시작한다.

```cpp
template <class T>
void DoublyLinkedList<T>::insert_at(int index, int val) 
{
  if (index <= 0) 
  {
    insert_front(val);
  }
  else if (index >= capacity) 
  {
    insert_back(val);
  }
  else 
  {
    Node<T> *temp = head;
    for (int i=0; i<index; ++i) 
    {
      temp = temp->next;
    }

    Node<T> *newNode = new Node(val);
    temp->prev->next = newNode;
    newNode->prev = temp->prev;
    link(newNode, temp);
  }
}
```

잘못된 인덱스가 매개변수로 넘어올 경우, 먼저 구현 한 `insert_front`와 `insert_back`을 호출하는 방식으로 대처를 했다. 
예를들어 음수 인덱스의 경우는 리스트 앞에 노드를 삽입하고, 범위를 초과한 경우에는 리스트 끝에 노드를 삽입한다.

두 노드 사이에 삽입하는 경우, 우선 삽입할 위치(`index`)에 있는 노드까지 이동해야 한다.

```cpp
  Node<T> *temp = head;
  for (int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }
```

예를들어 `index = 1`에 새로운 노드를 추가하는 경우, 아래 그림과 같이 두 번째 노드인 **B**까지 이동을 해야한다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at1.png" alt="two nodes connected to each other">
</div>

그 다음 새로운 노드인 `newNode`를 현재 위치(`temp`) 이전에 있는 노드(**head**)와 연결한다.

```cpp
  temp->prev->next = newNode;
  newNode->prev = temp->prev;
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at2.png" alt="two nodes connected to each other">
</div>

그 다음 `newNode`와 현재 삽입할 위치에 있는 `temp`를 서로 연결해주면 `index`에 `newNode`가 존재하게 된다.
```cpp
  link(newNode, temp);
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at4.png" alt="two nodes connected to each other">
</div>

## 노드의 삭제

### 마지막 노드 삭제
```cpp
template <class T>
void DoublyLinkedList<T>::remove_back()
{
  if (capacity == 1)
  {
    delete head;
    head = tail = nullptr;
    capacity = 0;
  }
  else
  {
    Node<T> *temp = tail;
    tail = tail->prev;
    delete temp;
    tail->next = nullptr;

    --capacity;
  }
}
```

아래와 같은 이중 리스트가 있을 때, 마지막 노드를 삭제하려면 어떻게 해야할까? 생각보다 간단하다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove1.png" alt="two nodes connected to each other">
</div>

우선 메모리 해제를 위해 현재 `tail`을 어딘가 따로 보존해둔다 -- `temp = tail`. 그리고 `tail`을 `tail->prev`로 이동시켜주고 `temp`에 보존해둔
노드의 메모리를 해제시켜주면 끝이다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove2.png" alt="two nodes connected to each other">
</div>

### 머리 노드 삭제

```cpp
template <class T>
void DoublyLinkedList<T>::remove_front()
{
  if (capacity == 1)
  {
    delete head;
    head = tail = nullptr;
    capacity = 0;
  }
  else
  {
    Node<T> *temp = head;
    head = head->next;
    delete temp;
    head->prev = nullptr;

    --capacity;
  }
}
```

`tail`이 아닌 `head`를 사용한다는 것만 제외하면 위에서 설명한 '마지막 노드 삭제'의 동작과 거의 일치하기 때문에 설명은 넘어가도록 하겠다. 

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove3.png" alt="two nodes connected to each other">
</div>

### 중간 노드 삭제

```cpp
template <class T>
void DoublyLinkedList<T>::remove_at(int index)
{
  if (index <= 0) 
    remove_front();
  else if (index >= (capacity-1)) 
    remove_back();
  else 
  {
    Node<T> *temp = head;
    for(int i=0; i<index; ++i) 
    {
      temp = temp->next;
    }

    temp->prev->next = temp->next;
    temp->next->prev = temp->prev;
    delete temp;
  }
}
```

다시 아래와 같은 이중 리스트가 있다고 가정해보자. 여기서 중간의 초록색 노드를 삭제해보자.
<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove1.png" alt="two nodes connected to each other">
</div>

우선 삭제하려는 노드가 있는 곳까지 이동한다.

```cpp
  Node<T> *temp = head;
  for(int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }
```

삭제하려는 노드와 연결되어 있는 모든 링크들을 끊고, 해당 노드의 메모리를 해제해주면 끝이다.

```cpp
  temp->prev->next = temp->next;
  temp->next->prev = temp->prev;
  delete temp;
```


<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at1.png" alt="three nodes linked together">
</div>

[GitHub: 전체 코드 보기](https://github.com/bugxvii/ds-algo/blob/master/linkedlist/doubly/dll.hpp)

## 관련 글
- <router-link to="./kor-linked-list">연결 리스트란?</router-link>
- <router-link to="./kor-linked-list-singly">단일 연결 리스트란?</router-link>
- <router-link to="./kor-linked-list-circular">원형 연결 리스트란?</router-link>