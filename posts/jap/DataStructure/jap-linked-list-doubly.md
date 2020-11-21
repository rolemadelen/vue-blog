
<div class="update">
last updated 11.21.20
</div>

## 双方向連結リストとは?
> 該当記事で'リスト'というのは'連結リスト'を意味します。

双方向連結リストはー方向にだけ移動することができた単方向リストとは違い、両方向に移動することができるデータ構造です。双方向リストのそれぞれのノードは`prev`と`next`二つのポインターを持っています。`prev`は現在ノードの以前、`next`は次のノードを指すようになります。

例えば下記のようなリストがあるとき、２番目のノード（**B**）の前の次のノードは`B-prev`と`B->next`で接近できます。

![Linked List image](assets/data-structure/linked-list/dll.png)

## ノードの構造

上に述べたとおり双方向連結リストのそれぞれのノードには二つのノード（`prev`と`next`）が存在します。

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

## 実装

この記事で実装する双方向連結リストの基本構造は下記の通りです。

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

では、それぞれの関数がどういうふうに動作するかみてみましょう。

## コンストラクター

最初ノードのデータ値を媒介変数で受け取って`head`と`tail`ノードを定義します。`tail`はリストの最後のノードを指すために使用されます。

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


## 新しいノードの挿入

`link(curr, newNode)`というhelper関数を実装しました。媒介変数の**１番目の因子**`curr`は現在位置のノードで, **２番目の因子**は`curr`と連結するノードです。

```cpp
template <class T>
void DoublyLinkedList<T>::link(Node<T> *curr, Node<T> *newNode)
{
  curr->next = newNode;
  newNode->prev = curr;
}
```

### リスト最後にノードを挿入

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

まずはリストに存在するノードが`head`だけかを確認します。もしそうなら`link(head, newNode)`を呼び出して`head`と`newNode`を連結します。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert1.png" alt="head and tail pointing to the node">
</div>

リストに一つ以上の要素が存在する場合、`link(tail, newNode)`を呼び出してリストの最後に新しいノードを挿入します。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert2.png" alt="tail pointing to the new node">
</div>

そして`tail`が最後のノードを指すように変えれば完了です。

### リスト最初にノードを追加
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

リスト最後にノードを追加する`insert_back`関数と全く同じです。ただ新しいノードを`tail`ではなく`head`と連結します。

### リストの中間にノードを追加

媒介変数でノードを挿入する位置`index`とノードのデータ値`val`を受け取ります。ちなみに`index`はzero-basedなので0から始めます。

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

無効な`index`を媒介変数から受け取った場合、`insert_front`と`insert_back`を呼び出す方法で対応しました。例えば`index`が負数の場合リストの最初にノードを挿入して、範囲を超過した場合はリストの最後にノードを挿入します。

中間にノードを挿入するときは、挿入する位置にあるノードまで移動しなければいけません。

```cpp
  Node<T> *temp = head;
  for (int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }
```

例えば`index = 1`の場合、下記の表の中で２番目のノード**B**まで移動します。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at1.png" alt="two nodes connected to each other">
</div>

そして新しいノード`newNode`を今の位置そ指してる`temp`の前にあるノード**head**と繋ぎます。

```cpp
  temp->prev->next = newNode;
  newNode->prev = temp->prev;
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at2.png" alt="two nodes connected to each other">
</div>

その後`newNode`と現在挿入する位置にある`temp`をお互いに繋ぐと`index`の位置に`newNode`が挿入されます.
```cpp
  link(newNode, temp);
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at4.png" alt="two nodes connected to each other">
</div>

## ノードの削除

### 最後のノードの削除
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

下記のようなリストがあるとして、最後のノードをどうやって削除すればいいんですかね。思うより簡単です。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove1.png" alt="two nodes connected to each other">
</div>

まずは`tail`を他の臨時変数に保存します。できたら`tail`を`tail->prev`に移動します。そして臨時に保存したノードをメモリから消します(deallocateする)。
そうしたら終わりです。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove2.png" alt="two nodes connected to each other">
</div>

### 最初のノードの削除

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

`tail`ではなく`head`を使用することだけいがいは上から説明した'最後のノードを削除'の動作と全く同じなので、とくに説明はしません。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove3.png" alt="two nodes connected to each other">
</div>

### 中間ノードの削除

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

また以下のような双方向リストがあると想定しましょう。この中で緑のノードを削除します。
<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove1.png" alt="two nodes connected to each other">
</div>

まずは削除するノード（緑のノード）がある位置まで移動します。

```cpp
  Node<T> *temp = head;
  for(int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }
```

緑のノードと繋がってる全てのノードを外したあと、緑ノードのメモリをdeallocateすれば完了です。

```cpp
  temp->prev->next = temp->next;
  temp->next->prev = temp->prev;
  delete temp;
```


<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at1.png" alt="three nodes linked together">
</div>

[GitHub: 全体コードがみたい！](https://github.com/bugxvii/ds-algo/blob/master/linkedlist/doubly/dll.hpp)

### 関連記事
- <router-link to="./jap-linked-list">連結リスト「Linked List」とは</router-link>
- <router-link to="./jap-linked-list-singly">単方向リスト「Singly List」とは</router-link>
- <router-link to="./jap-linked-list-circular">循環リスト「Circular Linked List」とは</router-link>