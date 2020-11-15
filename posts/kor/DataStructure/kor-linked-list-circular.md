<div class="update">
last updated 11.15.20
</div>

## 원형 연결 리스트란

<router-link to="./eng-linked-list-singly">단일</router-link>과 <router-link to="./eng-linked-list-doubly">이중 연결 리스트</router-link>에서는 
`nil`을 가리키는 노드를 찾으므로써 리스트의 마지막이 어디인지 확인할 수 있습니다; 이중 연결 리스트의 경우에는 `prev`도 있기 때문에 아래의 그림 처럼 두 개의 노드가 `nil`을 가리키죠.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-example.png" alt="Linked list picture">
</div>

그 반면 원형 연결 리스트에는 `nil`이 없습니다. 즉, 끝이 존재하지 않죠. 마지막 노드는 `nil`이 아닌 첫 번째 노드를 가리키고, `prev`가 있는 원형 이중 리스트의 경우 첫 번째 노드의 `prev` 역시 `nil`이 아닌 마지막 노드를 가리킵니다. 그렇기 때문에 이름 그대로 <i>원형</i>, 돌고 도는 구조입니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly.png" alt="Linked list picture">
</div>

> 편의를 위해 여기서부터는 연결 리스트를 **리스트**라고 칭하겠습니다.

## 노드의 구조

원형 리스트는 단일과 이중 리스트의 변형이기 때문에 어떤 리스트를 기반으로 하느냐에 따라 노드의 구조가 달라집니다.

### **원형 단일 리스트**

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

### **원형 이중 리스트**

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

## 구현

여기서 구현 할 원형 연결 리스트의 기본 구조입니다. 전체 코드는 포스트 [하단에 깃허브 링크](#fullcode)를 참고해주세요.

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


## 생성자

### **원형 단일 리스트**

단일 리스트의 경우 대부분의 연산들이 리스트의 첫 번째 노드에 접근하는 것으로부터 시작됩니다. 그래서 보통 `head` 또는 `first` 등의 이름의 멤버 변수가 정의되어 있죠.

하지만 원형 단일 리스트의 경우는 조금 다릅니다. 


<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert1.png" alt="circular singly list image">
</div>

돌고 도는 구조의 특성을 이용해서 첫 번째 노드가 아닌 마지막 노드를 저장해서 사용합니다. 이름은 `tail` 또는 `last`가 주로 사용되는데 여기서는 `last`를 사용했습니다.

```cpp
template <class T>
CircularLinkedList<T>::CircularLinkedList(int val)
{
  last = new Node(val);
  last->next = last;
  size = 1;
}
```

`last` 노드를 사용하는데에 대한 이점은 분명히 존재합니다. 우선 `last`와 `last->next`로 리스트의 처음과 마지막에 바로 접근이 가능합니다. 또한, 리스트의 마지막에 새로운 노드를 추가하거나 첫 번째 리스트를 삭제 할 때, 리스트 전체를 순회 할 필요없이 O(1)시간에 바로 삽입과 제거가 가능합니다. 


<div class="divider"></div>

### **원형 이중 리스트**

이중 리스트의 경우 `next`와 `prev` 포인터를 이용해서 양방향으로 이동이 가능합니다. 

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert1.png" alt="원형 이중 리스트 picture">
</div>

때문에 `head`를 정의하던 `last`를 정의하던 다를게 없기 때문에 편하신대로 구현하시면 됩니다. 일반적으로는 `head`를 정의하기 때문에 저도 `head`를 사용했습니다.

```cpp
template <class T>
DoublyLinkedList<T>::DoublyLinkedList(int val)
{
  head = new Node(val);
  head->next = head->prev = head;
  size = 1;
}
```

## 리스트 머리에 데이터 추가

### **원형 단일 리스트**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::insert_front(int val) 
{
  Node<T> *newNode = new Node(val);
  newNode->next = last->next;
  last->next = newNode;
}
```

새로운 노드인 `newNode`가 리스트의 첫 노드인 `last->next`를 가리키도록 합니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at1.png" alt="원형 이중 리스트 picture">
</div>

위의 그림을 보면 현재 `last->next`는 A와 연결되어 있습니다 . 새로운 노드를 머리에 추가했기 때문에 `last->next`가 `newNode`와 연결되도록 링크를 업데이트 해주면 됩니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at2.png" alt="원형 이중 리스트 picture">
</div>

### **원형 이중 리스트**

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

먼저 새로운 노드의 `next`와 `prev`부터 연결해줍니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at3.png" alt="원형 이중 리스트 picture">
</div>

현재 `last->next`는 `head`를 가리키고 있죠. `last->next`를 `newNode`와 연결합니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at4.png" alt="원형 이중 리스트 picture">
</div>

그리고 마지막으로 `head->prev`가 `last`로 되돌아 가는 것이 아닌, `newNode`를 가리키도록 링크를 업데이트 합니다. 그리고 `head`를 `newNode`로 바꿔주면 됩니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at5.png" alt="원형 이중 리스트 picture">
</div>

## 리스트 끝에 데이터 추가

### **원형 단일 리스트**

이 글의 서두에서 말했듯이, 단일 리스트에서 `last`를 사용하면 리스트 끝에 데이터를 삽입하는 과정이 상당히 간단해집니다. 아래의 코드를 확인해보죠.

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

우선 `newNode`의 `next`를 리스트의 첫 번째 노드와 연결해줍니다. 첫 번째 노드는 `last->next`가 가리키고 있죠.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert2.png" alt="circular singly list image">
</div>

그 다음, `last->next`를 `newNode`와 연결해주고, `last`를 `newNode`로 바꿔주면 끝입니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert3.png" alt="circular singly list image">
</div>

### **원형 이중 리스트**

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

여기도 마찬가지로 새로운 노드인 `newNode`의 `prev`와 `next`부터 `head`와 `last`에 연결해줍니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert2.png" alt="원형 이중 리스트 picture">
</div>

위 그림에서 B에 해당하는 리스트의 `last`가 `head`와 연결되어 있습니다. 이 링크를 업데이트해서 `newNode`와 연결합니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert3.png" alt="원형 이중 리스트 picture">
</div>

마지막으로 `head`의 `prev`를 B가 아닌 `newNode`와 연결되도록 업데이트 하면 모든 노드가 잘 이어져 있는것을 확인할 수 있습니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert4.png" alt="원형 이중 리스트 picture">
</div>

## 머리 노드 삭제

### **원형 단일 리스트**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_front()
{
  Node<T> *temp = last->next;
  last->next = last->next->next;

  delete temp;
}
```

`last` 노드가 있기 때문에 첫 번째 노드의 삭제는 간단히 가능합니다.

아래와 같이 세 개의 노드가 있다고 생각해봅시다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at0.png" alt="원형 이중 리스트 picture">
</div>

`last->next`가 `head`를 가리키고 있는데 이를 `last->next->next`와 연결해주면 끝입니다.
물론 `last->next`는 따로 저장해두고 후에 메모리를 해제해줍니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at1.png" alt="원형 이중 리스트 picture">
</div>

### **원형 이중 리스트**

```cpp
template <class T>
void CircularDoublyLinkedList<T>::remove_front()
{
  Node<T> *temp = head->next;
  head->next->prev = head->prev;
  head->prev->next = head->next;
  delete head;
  head = temp;
}
```

원형 이중 리스트의 경우도 생각보다 간단합니다.
 
다시 한 번 아래와 같이 세 개의 노드가 앞뒤 이중으로 연결되어 있다고 생각해 봅시다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at0.png" alt="Linked list picture">
</div>

먼저 `head`와 연결되어 있는 모든 링크들을 끊어줍니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at1.png" alt="원형 이중 리스트 picture">
</div>

그리고 `head`는 바로 삭제해주면 되기 때문에 굳이 `head`에서 연결된 링크들을 건들 필요는 없습니다. 간단하죠?

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at2.png" alt="원형 이중 리스트 picture">
</div>
 
## 마지막 노드 삭제

### **원형 단일 리스트**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_back()
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
```

아래와 같은 리스트가 있습니다.
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at0.png" alt="원형 이중 리스트 picture">
</div>

마지막 노드인 `last`를 삭제하기 위해서는 `last->prev`가 필요하지만 단일 리스트에 `prev`는 없죠. 그렇기 때문에 직접 머리부터 시작해서 `last`이전 노드까지 이동해줍니다. 위 그림에서는 B에 해당하는 부분이죠.

B에 도달했으면 해당 노드의 `next`를 다음다음 (`next->next`)와 연결합니다. 쉽게말해 `head`(A)와 연결해주면 됩니다.
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at2.png" alt="원형 이중 리스트 picture">
</div>

`last`를 삭제하고 `last`를 B로 바꿔주면 됩니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at3.png" alt="원형 이중 리스트 picture">
</div>

### **원형 이중 리스트**

```cpp
template <class T>
void CircularDoublyLinkedList<T>::remove_back()
{
  Node<T> *temp = head->prev;
  head->prev->prev->next = head;
  head->prev = head->prev->prev;
  delete temp;
}
```

얼핏보면 복잡해 보이지만 `prev` 포인터가 있기때문에 단일 리스트보다 훨씬 간단합니다.

헷갈릴수도 있으니 일단 간략히 아래의 표를 확인해주세요.
- `head->prev` == `last`
- `head->prev->prev` == `last->prev`
- `head->prev->prev->next` == `last->prev->next`

이를 이용해서 `last->prev->next`가 `head`와 연결되도록 업데이트 합니다. 마찬가지로 `head->prev`를 `last`에서 `last->prev`로 업데이트 해주면 끝입니다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at3.png" alt="원형 이중 리스트 picture">
</div>

<a id="fullcode">[전체 구현 코드 보기](https://github.com/bugxvii/ds-algo/tree/master/linkedlist/circular)</a>

## 관련 포스트
- <router-link to="./kor-linked-list">연결 리스트(Linked List)란?</router-link>
- <router-link to="./kor-linked-list-singly">단일 연결 리스트(Singly Linked List)란?</router-link>
- <router-link to="./kor-linked-list-doubly">이중 연결 리스트(Doubly Linked List)란?</router-link>
