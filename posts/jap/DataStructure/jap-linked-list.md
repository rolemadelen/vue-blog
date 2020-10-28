<div class="update">
last updated 10.24.20
</div>

## 連結リストとは

連結リスト（リンクドリスト；英. Linked List）はオブジェクトを線形順序に保存するデータ構造です。この順序ですが、配列と同じようにインデックスではなく、それぞれのオブジェクトのポインターで決められます。

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

## Node
リストのそれぞれのオブジェクトを<b>ノード（node）</b>とよびます。

ノードはdataと他のノードを示すポインターで構成されています。この他のノードというのは、例えば次のノード（`next`）とか前のノード（`prev`）があります。

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

- 単方向リスト（Singly Linked List）
  + 順番につながっているので片方にだけ移動ができる連結リスト。
- 双方向リスト（Doubly Linked List）
  + ノードが両方向でつながっている連結リスト。
- 循環リスト（Circular Linked List）
  + 最後のノードのnextは最初を、最初のノードのprevは最後を指す。
- 整列リスト
  + 単方向、双方向、または循環リストの全てノードが`data`の値で整列されているリスト。

## Operations

### search(L, k)

list `L`の中からkey `k`が含まれる最初の要素を探します。

```cpp
Node* search(Node *L, int key) 
{
  Node *curr = L->head;
  while (curr->next != nullptr and curr->key != key)
    curr = curr->next;

  return curr;
}
```

時間複雑度：<b>O(n)</b>

<div class="divider"></div>

### insert(L, x)

リストLの最初に要素xを挿入します。

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

時間複雑度：<b>O(1)</b>

<div class="divider"></div>

### delete(L, x)

リスト`L`の中から要素`x`を削除します。

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
時間複雑度：<b>O(1)</b>

## Sentinels

Sentinelノードを使うことでinsertとdelete関数の中のheadとtailの境界条件を適応させないことができます。Sentinelはheadとtailの
間に書かれているので、ダミーノードであり、値とされないません。

`sentinel->next`はリストの最初（head）を示し、`sentinel->prev`はリストの最後（tail）を示します。

![sentinel node](assets/data-structure/linked-list/sentinel-node.png)

上の表をご覧ください。<b>(a)</b>は空リストであり、sentinelだけが入っています。`sentinel->next`と`sentinel->prev`はsentinel自分を示します。

<b>(b)</b>は`sentinel->next`がリストの最初を、そして`sentinel->prev`がリストの最後を示しています。

以上をもとに`insert`と`delete`関数を下記のように簡略化することができます。

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

sentinelはパフォマンスに影響をあたえないので慎重に使用しなければいけません。特に多くの短いリストを使う場合、余分なノード（`sentinel node`）を加えることでメモリーに負担をかけることがあります。

なのでsentinelはコードの簡略化が確実にできる場合のみ使います。

## 連結リストの長所
- 連結リストの長さは動的です。ノードを挿入・削除する時リストの長さが変えます。
- 挿入・削除の演算時間が早いです。

## 連結リストの短所
- 要素に接近するためには必ず最初のノードから接近しなければいけません。
- 新しいデータは新しいノードを意味するので、メモリの使用量が増えます。
- 配列のようにデータがメモリに順番に保存されていないので、参照地域性（locality of reference）がないです。

| 演算 | 配列 | 連結リスト |
|:---:|:---:|:---:|
|**接近**| O(1) | O(n) |
|**探索**| O(n) | O(n) |
|**挿入**| O(n) | O(1) |
|**削除**| O(n) | O(1) |

## Reference
- Introduction to Algorithms, 3rd Edition (CLRS)

## Related Post
- <router-link to="./jap-linked-list-singly">単方向リスト「Singly List」とは</router-link>
- <router-link to="./jap-linked-list-doubly">双方向リスト「Doubly Linked List」とは</router-link>
- <router-link to="./jap-linked-list-circular">循環リスト「Circular Linked List」とは</router-link>