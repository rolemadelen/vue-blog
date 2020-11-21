<div class="update">
last updated 11.21.20
</div>

## 循環リストとは？
> この記事で「リスト」というのは「連結リスト」を意味します。

<router-link to="./jap-linked-list-singly">単方向</router-link>と<router-link to="./jap-linked-list-doubly">双方向連結リスト</router-link>では `nil`を指しているノードを探すごとによってリストの最後を見つけることができます。双方向リストの場合には`prev`もあるので`nil`を指しているノードが基本的に二つです。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-example.png" alt="Linked list picture">
</div>

その反面、循環リストとには`nil`がないです。つまり、終わりがないリストです。最後のノードの`next`は最初のノード指すようになっています。双方向リストの場合最初のノードの`prev`は最後のノードに戻ります。このため**循環**リストとよびます。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly.png" alt="Linked list picture">
</div>


## ノードの構造

循環リストは単方向と双方向の変形なので、ノードの構造はどのタイプのリストを使うかによって変わります。

### **単方向循環リスト**

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

### **双方向循環リスト**

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

## 実装

今から説明する循環リストとの構造です。全てのコードは該当記事の[下のGitHubリンク](#fullcode)を参照してください。

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


## コンストラクター

### **単方向循環リスト**

単方向連結リストの場合ほとんどの演算が最初のノードに接近することから始まります。なので普段`head`とか`first`などな名のメンバー変数が定義されています。
しかし、単方向循環リストの場合はすこし違います。


<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert1.png" alt="circular singly list image">
</div>

循環という特性を利用して最初ノードではなく最後のノードを保存して実装します。変数の名は`tail`とか`last`が普段使われます。

```cpp
template <class T>
CircularLinkedList<T>::CircularLinkedList(int val)
{
  last = new Node(val);
  last->next = last;
}
```

`last`ノードを使うとすごく便利です。まず`last`と`last->next`でリストの最初と最後、両方すぐ接近することができます。そして、リストの最後にノードを追加することとか、最初のノードを削除することが簡単にできます。


<div class="divider"></div>

### **双方向循環リスト**

双方向リスト場合`next`と`prev`を使って両方向移動するのができます。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert1.png" alt="doubly linked list picture">
</div>

なので`head`と`last`どちを使ってもファフォマンスの差はないので自由に選んで実装してください.一般的には`head`を定義するのでこの記事でも`head`を使います。

```cpp
template <class T>
DoublyLinkedList<T>::DoublyLinkedList(int val)
{
  head = new Node(val);
  head->next = head->prev = head;
}
```

## 最初にノードを挿入

### **単方向循環リスト**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::insert_front(int val) 
{
  Node<T> *newNode = new Node(val);
  newNode->next = last->next;
  last->next = newNode;
}
```

新しいノード`newNode`をリストの最初のノード（`last->next`）と繋ぎます。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at1.png" alt="insert front 1">
</div>

上の表を参照してください。現在`last->next`はAと繋がれています。これが`newNode`を指すようにノードのリンクを変えると終わりです。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at2.png" alt="insert front 2">
</div>

### **双方向循環リスト**

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

まずは新しいノードの`next`と`prev`を`head`と`last`それぞれにつなげます。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at3.png" alt="insert front 3">
</div>

今`last->next`は`head`を指しています。このノードを`newNode`とリンクします。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at4.png" alt="insert front 4">
</div>

そして最後に`head->prev`が`last`ではなく`newNode`を指すようにリンクを更新するとおわりです。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at5.png" alt="insert front 5">
</div>

## 最後にノードを挿入

### **単方向循環リスト**

この記事の最初に、`tail`ノードを使うとリストの最後に新しいノードを挿入することが簡単になると説明しました。

本当に簡単になるか下記のコードみてください。まずは`tail`がなかった場合のコードです。
```cpp
template <class T>
void CircularSinglyLinkedList<T>::insert_back(int val) 
{
  Node<T> *temp = head;

  while (temp->next != nullptr) 
  {
    temp = temp->next;
  }

  Node<T> *newNode = new Node(val);
  temp->next = newNode;
}
```
リストの最初から順番に最後まで進んで、そこから新しいノードを挿入しています。
この演算の時間複雑度はO(N)になります。

では`last`を使うと、どうなるかみてみましょう。

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

まずは`newNode->next`がリストの最初を指しようにします。最初のノードは`last->next`で接近できます。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert2.png" alt="insert back 1">
</div>

その後`last->next`を`newNode`と繋ぎて、`last`を`newNode`に変えることだけで終わりです。
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert3.png" alt="insert back 2">
</div>

`last`を使うとリストの最後にノードを挿入することがO(1)時間にできます。

### **双方向循環リスト**

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

`newNode->prev`と`newNode->next`を今の`last`と`head`にそれぞれ繋ぎます。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert2.png" alt="insert back 3">
</div>

今の`last`、つまり**B**、は`head`を指しています。これは`newNode`を指しようにリンク変えます。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert3.png" alt="insert back 4">
</div>

最後に`head->prev`を`newNode`と繋ぐと終わりです。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert4.png" alt="insert back 5">
</div>

## 最初のノードの削除

### **単方向循環リスト**

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_front()
{
  Node<T> *temp = last->next;
  last->next = last->next->next;

  delete temp;
}
```

`last`ノードがあるため、最初のノードを削除する手順は簡単です。

下記のようにリストがあるとしましょう。このリストには三つの要素があります。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at0.png" alt="remove front 1">
</div>

`last->next`は`head`を指していますが、これを`last->next->next`とリンクすることだけで終わりです。
そして`last->next`は`delete`します。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at1.png" alt="remove front 2">
</div>

### **双方向循環リスト**

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

双方向循環リストの場合も簡単です。もしかしたら単方向リストより簡単かもしれません。
 
 下記のようなリストが与えられたと想定してとき、`head`を削除してみましょ。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at0.png" alt="remove front 3">
</div>

`head`とつながっている全てのノードを外します。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at1.png" alt="remove front 4">
</div>

そして`head`を更新すれば終わりです。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at2.png" alt="remove front 5">
</div>
 
## 最後のノードの削除

### **単方向循環リスト**

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

以下のようなリストがあります。
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at0.png" alt="remove back 1">
</div>

最後のノード`last`を削除するためには`last->prev`が必要ですが、単方向リストには`prev`がありません。
なのでリストの最初から順番に進んでラストの前(**Bノード**)を接近しなければなりません。

**B**ノードまで到達したら、該当ノードの`next`が`last`ではなく`head`を指すように変えます。
そして`last`を更新すると終わりです。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at3.png" alt="remove back 2">
</div>

### **双方向循環リスト**

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

単方向リストと比べると複雑そうに見えますが、実は`prev`があるので簡単に実装できます。

「head->prev->prev->nextってなに？」と思う方がいると思うので下記のリストをみてください。
左側のノードが意味するのが右と同じです。
- `head->prev` == `last`
- `head->prev->prev` == `last->prev`
- `head->prev->prev->next` == `last->prev->next`

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at3.png" alt="双方向循環リスト picture">
</div>

`head->prev->prev->next`が`head`を指すようにリンクを変えます。そして`head->prev`を`last`から`last->prev`を指すようにすると終わりです。

<a id="fullcode">[GitHub: 全体コードがみたい！](https://github.com/bugxvii/ds-algo/tree/master/linkedlist/circular)</a>

## 関連記事
- <router-link to="./jap-linked-list">連結リスト「Linked List」とは</router-link>
- <router-link to="./jap-linked-list-doubly">双方向リスト「Doubly Linked List」とは</router-link>
- <router-link to="./jap-linked-list-circular">循環リスト「Circular Linked List」とは</router-link>