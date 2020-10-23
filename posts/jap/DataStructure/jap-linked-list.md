
### 連結リスト「Linked List」とは

連結リスト（Linked List）はオブジェクトを線形順序に保存するデータ構造です。この順序ですが、配列と同じようにインデックスではなく、それぞれのオブジェクトのポインターで決められます。

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

## Node
リストのそれぞれのオブジェクトを<b>node（ノード）</b>とよびます。

Nodeはdataと他のnodeを指すポインターで構成されています。この他のnodeというのは、例えば次のnode（`next`）とか前のノード（`prev`）があります。

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

## 連結リストのタイプ

- <b>単方向リスト（Singly Linked List）</b>
  + 順次につながっているので片方にだけ移動ができる連結リスト。
- <b>双方向リスト（Doubly Linked List）</b>
  + nodeが両方向でつながっている連結リスト。
- <b>循環リスト（Circular Linked List）</b>
  + 最後のnodeのnextは最初を、最初のノードのprevは最後を指す。
- <b>整列リスト</b>
  + 単方向、双方向、または循環リストの全てのnodeが`data`の値で整列されているリスト。

## Operations

- `search(L, k)` finds the first element with key *k* in list *L*.
  ```cpp
  Node* search(Node *L, int key) 
  {
    Node *curr = L->head;
    while (curr->next != nullptr and curr->key != key)
      curr = curr->next;

    return curr;
  }
  ```

  Time complexity: O(n)

- `insert(L, x)` splices `x` onto the front of the list `L`.
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

  Time complexity: O(1)

- `delete(L, x)` removes an element `x` from the list `L`.
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


### 連結リスト vs. 配列
配列は同じ資料型のデータを保存するとき使えられるが、<br>下記の短所がある：
- 配列の大きさは変わられない。
- 挿入と除去演算の費用が大きい。
  + **挿入**「access」：新しいデータを挿入する位置を捜して、その位置からあるすべての要素を一間ずつ右側に移す過程が必要。
  + **除去**「delete」: 除去した後、その穴を埋めるためにデータを一間ずつ左側に移す過程が必要。


### 連結リストの長所
- 連結リストの大きさは動的だ（大きさが固定的でない）。
- 挿入と除去の演算が早い。

### 連結リストの短所
- 要素に接近するためには必ず最初のノードから接近しなければならない。
- 新しいデータ＝新しいノード
  + メモリの使用量が増える。
- 配列のようにデータがメモリに順次保存されてないので、ノードたちの地域性「locality」がない。
  + キャッシュ「cache」親和的ではない。

| 演算 | 配列 | 連結リスト |
|:---:|:---:|:---:|
|**接近**| O(1) | O(n) |
|**探索**| O(n) | O(n) |
|**挿入**| O(n) | O(1) |
|**除去**| O(n) | O(1) |

## Reference
- Introduction to Algorithms, 3rd Edition (CLRS)

### Related Post
- <router-link to="./jap-linked-list-singly">単方向リスト「Singly List」とは</router-link>
- <router-link to="./jap-linked-list-doubly">双方向リスト「Doubly Linked List」とは</router-link>
- <router-link to="./jap-linked-list-circular">循環リスト「Circular Linked List」とは</router-link>