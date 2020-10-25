
## 연결 리스트란

연결 리스트(영: Linked List)는 개체들을 순차적으로 연결하여 사용하는 자료구조 중 하나입니다. 
이 개체들의 순서는 배열과 같은 인덱스 순이 아닌, 각 개체들의 포인터로 결정됩니다.

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

## 노드

연결 리스트에서 사용되는 각 개체들을 <b>노드</b>(node)라고 부르며, 각각의 노드는 데이터와 다른 노드들을 가리키는 포인터로 구성되어 있습니다.


아래는 이중 연결 리스트에서 사용되는 노드 개체입니다. `next`와 `prev` 두 개의 포인터로 해당 노드의 앞과 뒤에 있는 노드를 가리킵니다.
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

## 연결 리스트의 종류

- 단일 연결 리스트
  + 노드들이 순차적으로 연결되어 있어 단방향으로만 이동이 가능하다.
- 이중 연결 리스트
  + 노드들이 양방향으로 연결되어 있어 양쪽으로 이동이 가능하다.
- 원형 연결 리스트
  + 머리 노드의 `prev`가 꼬리 노드를 가리키고, 꼬리 노드의 `next`가 머리 노드를 가리킨다. 순환 리스트라고도 불린다.
- 정렬 리스트
  + 이름 그대로 정렬되어 있는 리스트. 노드를 삽입할 때 노드의 key값에 따라 삽입할 위치를 정한다.

## 연산

### search(L, k)

리스트 *L*에서 *k*의 값을 가지고 있는 첫 번째 노드를 찾아 반환한다.

```cpp
Node* search(Node *L, int key) 
{
  Node *curr = L->head;
  while (curr->next != nullptr and curr->key != key)
    curr = curr->next;

  return curr;
}
```

시간 복잡도: **O(n)**

<div class="divider"></div>

### insert(L, x)

리스트 `L`의 머리에 새로운 노드 `x`를 삽입한다.

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

시간 복잡도: **O(1)**

<div class="divider"></div>

### delete(L, x)

리스트 `L`에서 노드 `x`를 제거한다.

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

시간 복잡도: **O(1)**

## Sentinels

센티넬 노드(**sentinel node**)를 사용하면 `insert`와 `delete`에서 경계 조건(NULL인지 확인하는 부분)을 확인하지 않아도 된다.
sentinel은 더미 노드로써 아무 값도 가지지 않으며 리스트의 머리와 꼬리 사이에 두고 사용된다.

`sentinel->next`는 리스트의 머리를, `sentinel->prev`는 리스트의 꼬리를 가리킨다.

![sentinel node](assets/data-structure/linked-list/sentinel-node.png)

**(a)** → sentinel 노드만 있는 **빈 리스트**를 보여주고 있다. <br>
**(b)** → `sentinel->next`는 리스트의 머리(`9`)를 가리키고 `sentinel->prev`는 리스트의 꼬리(`1`)를 가리키고 있다.

sentinel을 사용하면 `insert`와 `delete` 함수의 코드가 간략해진다. 

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

사실 sentinel은 조심히 사용해야 된다. 코드 몇 줄 줄었다고 해서 프로그램 성능에는 아무런 영향도 끼치지 않는다.
별로 복잡하지도 않고 크기도 작은 리스트들의 경우, 추가적인 sentinel 노드 하나 때문에 오히려 메모리를 낭비할 수 도 있다. 

그렇기 때문에 sentinel을 사용하므로써 코드를 간략하게 작성할 수 있고, 이를 통해 코드의 가독성이 올라가는게 확실시 될때만 사용하는 것이 권장된다.

## 연결 리스트의 장점
- 연결 리스트의 크기는 동적이다.
- 추가와 제거의 연산이 빠르다.

## 연결 리스트의 단점
- 요소에 접근을 하기 위해서는 무조건 첫 번째 노드에서부터 탐색을 해야한다.
- 새로운 요소마다 노드를 만들어야 하기 때문에 메모리의 사용량이 증가한다.
- 배열과 다르게 연속된 메모리에 자료가 존재하지 않기 때문에 리스트에는 참조의 지역성(locality of reference)이 없다
  +  캐시(cache) 친화적이지 않다.

| 연산 | 배열 | 연결 리스트 |
|:---:|:---:|:---:|
|**접근**| O(1) | O(n) |
|**탐색**| O(n) | O(n) |
|**삽입/추가**| O(n) | O(1) |
|**삭제/제거**| O(n) | O(1) |

## 관련 글
- <router-link to="./kor-linked-list-singly">단일 연결 리스트(Singly Linked List)란?</router-link>
- <router-link to="./kor-linked-list-doubly">이중 연결 리스트(Doubly Linked List)란?</router-link>
- <router-link to="./kor-linked-list-circular">원형 연결 리스트(Circular Linked List)란?</router-link>