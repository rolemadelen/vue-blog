<div class="update">
last updated 11.15.20
</div>

## 単方向リストとは？

単方向リスト(Singly Linked List)はすべてのノード(node)が順次につながっているリストです。リストのノードにはメモリのどこかにあるノードを参照するポインター(pointer)を一つ持っています。

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

単方向リストノードは基本的に下記の2つの情報を持っています。
1. 次のノードを指す`next`ポインター
2. データの値を保存する`data`変数

ノードのクラスはだいたいこういう姿をしている。
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

### 構造

下記のコードが今から実装する単方向リストの構造です。

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

`tail`はリストの最後のノードを指します。この`tail`を使うと、新しいノードをリストの最後に挿入するときとても便利になるので、使う方がいいと思います。

では、単方向リストの関数たちの実装してみましょう。

## コンストラクター

defaultと最初のノードの値をparameterでもらうparameterizedコンストラクター、二つを定義しました。

### defaultコンストラクター

```cpp
template <class T>
SinglyLinkedList<T>::SinglyLinkedList()
{
  head = tail = nullptr;
  size = 0;
}
```

メンバー変数たちを基本値に初期化します。

### parameterizedコンストラクター

```cpp
template <class T>
SinglyLinkedList<T>::SinglyLinkedList(T data)
{
  head = new Node(data);
  tail = head;
  size = 1;
}
```
parameterで与えられた値で最初のノード生成して、`head`と`tail`がこのノードを指すようにしました。

![Linked List image](assets/data-structure/linked-list/sll-constructor-1.png)


## データの追加

新しいノードはリストの最初、最後、または中間に挿入することができます。

### リストの最初に挿入

1. 新しいノード`newNode`を生成。
2. `newNode`が`head`を指す。
3. `head`を`newNode`に変える。
4. `tail`はリストの最後の要素を指すようにする。

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
}
```

### リストの最後に挿入

1. 新しいノード`newNode`を生成。
2. `tail->next`が`newNode`を指す。
3. `newNode`が`tail`になるように`tail`を変える。

```cpp
template <class T>
void SinglyLinkedList<T>::push_back(T data) 
{
  Node<T> *temp = new Node<T>(data);
  tail->next = temp;
  tail = temp;
  tail->next = nullptr;
}
```

この記事の最初に、「`tail`を使うとリストの最後に新しいノードを追加するときとても便利になります」ていいましたね。まさにこの部分です。
ここで`tail`がなかったら、リストの最初から接近して全てのノードを過ぎなければなりません。


### リストの中間に挿入

与えられたリストの位置`index`にノード挿入します。

1. `index-1`番目のノード探して`temp`に保存する。
2. 新しいノード`newNode`を生成。
3. `temp`と`temp->next`の間に`newNode`を挿入する。

```cpp
template <class T>
void SinglyLinkedList<T>::push_at(int index, T data)
{
  Node<T> *temp = head;
  for (int i=0; i<index-1; ++i)
  {
    temp = temp->next;
  }

  Node<T> *newNode = new Node<T>(data);
  newNode->next = temp->next;
  temp->next = newNode;
}
```

## データの除去

### 最初ノードの削除

最初のノードを除去することはとても簡単です。

1. まず`head`を臨時ポインター`temp`に保存する。
2. `head`を`head->next`に変える。
3. 臨時ポインターに保存した古い`head`ポインターを削除。

```cpp
template <class T>
void SinglyLinkedList<T>::pop_front()
{
  Node<T> *temp = head;
  head = head->next;
  delete temp;
}
```

### 最後ノードの削除

1. `tail`前のノードに接近して臨時ポインター`temp`に保存する。
2. `tail`を削除。
3. `tail`を`temp`に変える。

```cpp
template <class T>
void SinglyLinkedList<T>::pop_back()
{
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
}
```

### 中間ノードの削除

最後のノードを除去する方法と同じです。ただ、`tail`の前ではなく`index`の前に接近してそのノードを`temp`に保存します。この以外は一緒です。

```cpp
template <class T>
void SinglyLinkedList<T>::pop_at(int index)
{
  Node<T> *temp = head;
  for (int i=0; i<index-1; ++i)
  {
    temp = temp->next;
  }

  Node<T> *temp2 = temp->next;
  temp->next = temp->next->next;
  delete temp2;
}
```

## 連結リストの巡回

単方向リストを巡回する方法です。`head`から接近してこの次のノードが`tail`になるまで反復します。

```cpp
template <class T>
void SinglyLinkedList<T>::traverse()
{
  Node<T> *temp = head;
  while(temp->next != nullptr) 
  {
    cout << temp->data << ' ';
    temp = temp->next;
  }

  cout << temp->data << endl;
}
```

[単方向リストの全体コードを見る](https://github.com/bugxvii/ds-algo/blob/master/linkedlist/singly/sll.hpp)

## 関連記事
- <router-link to="./jap-linked-list">連結リスト「Linked List」とは</router-link>
- <router-link to="./jap-linked-list-doubly">双方向リスト「Doubly Linked List」とは</router-link>
- <router-link to="./jap-linked-list-circular">循環リスト「Circular Linked List」とは</router-link>