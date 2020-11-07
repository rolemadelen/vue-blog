
### 循環リストとは?
一般的に連結リストの最後のノードは「これがラストです」という意味でnilを示します。<router-link to="./jap-linked-list-doubly">双方向リスト</router-link>の場合は最後のノードのnextと最初のノードのprevがnilを示します。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-example.png" alt="Linked list picture">
</div>

でも循環リストの場合、最後のノードのnextは最初のノードを、最初のノードのprevは最後を示します。循環する構造です。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly.png" alt="Linked list picture">
</div>

### ノードの構造
普通のリストと循環リストの違いはノードの追加及び除去部分にあるので、ノードの構造は普通の連結リストと同じだ。

**単方向循環リスト**

```rb
class Node
  attr_accessor :data, :next     

  def initialize(data, _next=nil)
    @data = data
    @next = _next
  end
end
```

**双方向循環リスト**

```rb
class Node
  attr_accessor :data, :prev, :next

  def initialize(data, prev=nil, _next=nil)
    @data = data
    @prev = prev
    @next = _next
  end
end
```

<div class="divider"></div>

### 循環リスト実装

### initialize：コンストラクタ

**単方向循環リスト**

```rb
def initialize
  @last = nil
  @length = 0
end
```

連結リストのコンストラクタには最初のノードのアドレスを保存している`@head`ノードが存在する。でも、単方向循環リストの場合は`@last`ノードを使って最後のノードのアドレスを保存する。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert1.png" alt="circular singly list image">
</div>

普通のリストように`@head`で始めてもいいんだが、`@last`と`@last.next`でリストの最後と最初、両方接近できるという点で`@last`を使う方がいいと思う。ノードを追加するときにも`@last`を持っている方が便利。

**双方向循環リスト**

```rb
def initialize
  @head = nil
  @length = 0
end
```

双方向循環リストの場合`@head.prev`が`@tail`になるので`@head`だけ使う。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert1.png" alt="circular doubly linked list picture">
</div>


### insert：リスト最後にノード追加

**単方向循環リスト**

```rb
  new_node = Node.new(data)
  new_node.next = @last.next
  @last.next = new_node
  @last = new_node
```

まずは新しいノード「`new_node`」を現在最後ノードの次「`@last.next`」指すようにする。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert2.png" alt="circular singly list image">
</div>

そして`A`を指している`@last.next`を`new_node`と連結する。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert3.png" alt="circular singly list image">
</div>

最後にリストの`last`更新する。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert4.png" alt="circular singly list image">
</div>

**双方向循環リスト**

```rb
  new_node = Node.new(data)
  new_node.prev = @head.prev
  new_node.next = @head
  @head.prev.next = new_node
  @head.prev = new_node
```

まず`new_node`を連結してみよう。説明する前、下記の表を確認しよう。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert2.png" alt="circular doubly linked list picture">
</div>

現在`B`がリストの`head.prev`つまり`tail`だ。`new_node`を追加した後は`head.prev`が`new_node`、`new_node.prev`は`B`になるはず。なので今`new_node`を`head`と`B`の間にくるように連結した。

その後`@head.prev.next`(`B.next`)が`new_node`を指すようにする。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert3.png" alt="circular doubly linked list picture">
</div>

最後に`@head.prev`が新しい最後のノード「`new_node`」を指すようにする。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert4.png" alt="circular doubly linked list picture">
</div>


### insert\_at：ノード挿入

#### リスト最後に挿入

**単方向・双方向循環リスト**

```rb
  insert(data)
```

リストの最後に追加する時には先に実装した`insert`メソッドを使う。

#### リスト最初に挿入

**単方向循環リスト**

```rb
  new_node = Node.new(data)
  new_node.next = @last.next
  @last.next = new_node
```

この演算が終わったら`new_node`が新しい`head`になる。まず`new_node`が`@last.next`(現head)を指すようにする。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at1.png" alt="circular doubly linked list picture">
</div>

その後`@last`を新しいhead「`new_node`」と連結する。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at2.png" alt="circular doubly linked list picture">
</div>

**双方向循環リスト**

```rb
  new_node = Node.new(data)
  new_node.prev = @head.prev
  new_node.next = @head

  @head.prev.next = new_node
  @head.prev = new_node
  @head = new_node
```

`new_node`の`prev`と`next`をまず繋ぐ。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at3.png" alt="circular doubly linked list picture">
</div>

`head.prev.next`(`last.next`)と`head.prev`がちゃんと新しいhead「`new_node`」を指すようにする。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at4.png" alt="circular doubly linked list picture">
</div>

そして最後に`@head.prev`が`new_node`を指すようにする。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at5.png" alt="circular doubly linked list picture">
</div>

#### リスト中間に挿入

**単方向循環リスト**

```rb
  curr = get_node_at(index-1)

  new_node = Node.new(data)
  new_node.next = curr.next
  curr.next = new_node
```

ノードとノードの間に挿入するとき、挿入する位置前にあるノードが必要だ。下記の表をみよう。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at3.png" alt="circular doubly linked list picture">
</div>

`A`と`last`の間`new_node`を挿入するとしている。まず`A`ノードを`curr`に保存する。そして`new_node`が`curr.next`を指すようにする。そして、`curr.next`を`new_node`と連結すると終わり。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at4.png" alt="circular doubly linked list picture">
</div>

**双方向循環リスト**

```rb
  curr = get_node_at(index)

  new_node = Node.new(data)
  new_node.prev = curr.prev
  new_node.next = curr

  curr.prev.next = new_node
  curr.prev = new_node
```

挿入する位置にあるノード(下記の表では`B`)を`curr`に保存する。そして`new_node.prev`は`curr.prev`を、`new_node.next`は`curr`を指すようにする。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at1.png" alt="circular doubly linked list picture">
</div>

そして`curr.prev.next`(`head.next`)と`curr.prev`を`new_node`と連結する。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at2.png" alt="circular doubly linked list picture">
</div>

### remove\_at：ノード削除

#### 最初のノード削除

**単方向循環リスト**

```rb
def remove_front
  temp = @last.next
  @last.next = @last.next.next
  temp = temp.next = nil
end
```

`@last.next`が`head`なので`@last.next.next`を指すようにすると簡単に除去することができる。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at1.png" alt="circular doubly linked list picture">
</div>

**双方向循環リスト**

```rb
def remove_front
  temp = @head
  @head.next.prev = @head.prev
  @head.prev.next = @head.next
  @head = @head.next
  temp = temp.next = temp.prev = nil
end
```

`@head`からつながっているリンクたちをまず切る。

```rb
  @head.next.prev = @head.prev  # B.next
  @head.prev.next = @head.next  # C.next
```

上のコードを実行した後の様子は下記のどおりだ。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at1.png" alt="circular doubly linked list picture">
</div>

最後に`@head`を更新する。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at2.png" alt="circular doubly linked list picture">
</div>

#### 最後のノード削除

**単方向循環リスト**

```rb
def remove_last
  curr = get_node_at(@length-2)  # B (curr) node
  temp = curr.next
  curr.next = @last.next         # curr.next = A
  @last = curr
  temp = temp.next = nil
end
```

`@last`を削除するには`@last`前のノード(`B`)が必要なので、そのノードを`curr`に保存する。そして`curr.next`が`@last.next`を指すようにする。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at2.png" alt="circular doubly linked list picture">
</div>

最後に`@last`を更新すると終わり。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at3.png" alt="circular doubly linked list picture">
</div>

**双方向循環リスト**

```rb
def remove_last
  temp = @head.prev
  @head.prev.prev.next = @head   # A.next = @head
  @head.prev = @head.prev.prev   # @head.prev = A
  temp = temp.prev = temp.next = nil
end
```

除去方法は単方向リストと同じだ。`head.prev.prev`に接近して最後のノードとつながっているすべてのリンクを全部切る。

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at3.png" alt="circular doubly linked list picture">
</div>

#### 中間のノード削除

**単方向循環リスト**

```rb
  curr = get_node_at(index-1)
  curr.next = curr.next.next
```

削除するノードの位置が違うだけで、コードは最初のノードを削除するのとおなじだ。

**双方向循環リスト**

```rb
  curr = get_node_at(index)
  curr.next.prev = curr.prev
  curr.prev.next = curr.next
```

これも同じくて、最初のノードを削除するコードとほとんど一緒だ。ただ、headを除去するのではないので`@head`を更新する部分だけはしない。

<div class="divider"></div>

### 実装コード
- [循環リストすべてのコード](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/cll.rb)
- [循環リストテストコード](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/test.rb)


### Related Post
- <router-link to="./jap-linked-list">連結リスト「Linked List」とは</router-link>
- <router-link to="./jap-linked-list-singly">単方向リスト「Singly List」とは</router-link>
- <router-link to="./jap-linked-list-doubly">双方向リスト「Doubly Linked List」とは</router-link>
