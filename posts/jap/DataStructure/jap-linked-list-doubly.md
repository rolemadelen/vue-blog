
### 双方向リストとは?
双方向リスト「Doubly Linked List」は一方向だけでつながっている<router-link to="jap-linked-list-singly">単方向リスト</router-link>とは違い、ノードが両方向でつながっているリストだ。

![Linked List image](assets/data-structure/linked-list/dll.png)

双方向リストのノードは基本的に3つの情報を保存している。<br>1. データの値<br>2. 前のノードのポインタ -- `prev`<br>3. 次のノードのポインタ -- `next`

```rb
class Node
  attr_accessor :data, :prev, :next

  # default parameter: prev/nextの 基本値はnil
  def initialize(data, prev=nil, _next=nil)
    @data = data
    @prev = prev
    @next = _next
  end
end
```

最初ノードを生成するとき`prev`と`next`が指しているノードはないので、媒介変数が別に与えられていない以上、nilを基本値にする。

<div class="divider"></div>

### 双方向リストの実装

実装する双方向リストの構造は下記のどおりだ。

```rb
class DoublyLinkedList
  # コンストラクタ
  def initialize
  end

  # リスト後ろにノードを追加
  def insert(value)
  end

  # indexのノードを追加
  def insert_at(index, value)
  end

  # indexのノードを返す
  def get_node_at(index)
  end

  # indexのノードを削除
  def remove_at(index)
  end

  # リストからdataを探索
  def search(data)
  end

  # リスト走査
  def print_list
  end
end
```

多くの実装方法の一つだけなので、必ずこの構造に従う必要はない。必要なメソッドがあったら追加しても構わないし、逆にいらないものは無視してもよい。

それでは、それぞれのメソッドの実装を見てみよう。

### コンストラクタ「initialize」
```rb
def initialize
  @head = @tail = nil
  @length = 0
end
```

オブジェクトを生成したときはまだリストが空いているので、`@head`と`@tail`両方とも`nil`になる。

`@length`はリストの長さを保存する。このメタデータがない場合、リストの長さを求めるときheadから順次にカウントしなければならないのでO(n)の時間がかかる。でも`@length`を使うと、O(1)で長さを求めることができる。

### ノードを追加「insert」
```rb
def insert(value)
  new_node = Node.new(value, @tail)

  # リストにノードが存在する場合
  if @tail != nil
    @tail.next = new_node
    new_node.prev = @tail
    @tail = new_node
  # リストが空いている場合
  else
    @tail = new_node
    @head = @tail
  end

  @length += 1
end
```

`insert`メソッドはリストの最後にノードを追加する。リストが空いている場合と、その逆の場合を考慮して実装しなければならない。

リストが空いている場合、新しいノードを`@head`と`@tail`に代入する。ノードが1個しかないので、headとtailは同じノードを指す。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert1.png" alt="head and tail pointing to the node">
</div>

空いていない場合は`@tail`の次のノード「`next`」が新しいノード「`new_node`」を指すようにする。そして`new_node`の前のノード「`prev`」が現在の`tail`を指すようにする。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert2.png" alt="tail pointing to the new node">
</div>

`new_node`が新しい`@tail`になるので、tailをアップデートするとinsertの実装は終わり。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert3.png" alt="update the tail">
</div>

### ノードを挿入「insert\_at」
```rb
def insert_at(index, value)
  # 範囲外の場合
  if index < 0 or index > @length
    puts "... failed to insert #{value} at index #{index}"
    return nil
  # 最後の場合はinsertを呼び出す
  elsif index == @length
    insert(value)   
  # 最初の場合
  elsif index == 0
    new_node = Node.new(value, nil, @head)

    if @head != nil
      @head.prev = new_node
      new_node.next = @head
      @head = new_node
    else
      @head = new_node
      @tail = @head
    end

    @length += 1
  # ノードとノードの間に追加する場合
  else
    new_node = Node.new(value)
    curr = get_node_at(index-1)

    new_node.next = curr.next
    new_node.prev = curr
    curr.next.prev = new_node
    curr.next = new_node

    @length += 1
  end

end
```

ノードを挿入する位置のindexをメソッドの媒介変数に送って、ノードを挿入する。このとき、考慮する部分は3つある。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at1.png" alt="two nodes connected to each other">
</div>

1. Cノード次に追加：リストの最後に追加する場合と同じ -- `insert`メソッドを呼び出す。
2. Aノード前に追加。
3. AとCの間に追加。

2番の場合は`insert`のコードを見れば分かると思うので、3番だけ説明する。

```rb
new_node = Node.new(value)
curr = get_node_at(index-1)
```

新しいノードを生成する。<br>
そして`curr`には挿入する位置の前にあるノード「A」を保存する。

```rb
new_node.next = curr.next
new_node.prev = curr
```

下記の表は上2行のコードを実行した時の様子だ。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at2.png" alt="new nodes next/prev linked to A and C">
</div>

確かに`new_node`はAとCの間に位置している。でもまだAとCがつながっているので、このリンクを切らなければならない。

```rb
curr.next.prev = new_node   # c.prev = new_node
curr.next = new_node
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at3.png" alt="links disconnected between A and C">
</div>

### ノードを返す「get\_node\_at」
```rb
def get_node_at(index)
  return nil if index < 0 or index >= @length
  return @head if index == 0
  return @tail if index+1 == @length

  curr = @head
  index.times do
    curr = curr.next
  end

  curr
end
```

`insert_at`メソッドで使ったhelperメソッド。与えられたindexの位置にあるノードを返す。

### ノードの削除「remove\_at」
```rb
def remove_at(index)
  if index < 0 or index >= @length
    puts ".. failed to remove a node at #{index}"
    return nil
  end

  # 最初のノードを除去
  if index == 0
    data = @head.data
    @head = @head.next
    @head.prev = nil if @head
  # 最後のノードを除去
  elsif  index == @length-1
    data = @tail.data
    @tail = @tail.prev
    @tail.next = nil if @tail
  # リストの中間にあるノードを除去
  else
    curr = get_node_at(index)
    data = curr.data

    curr.prev.next = curr.next
    curr.next.prev = curr.prev
    curr = curr.prev = curr.next = nil
  end

  @length -= 1

  @head = @tail = nil if @length == 0

  return data
end
```

ノードを削除するとき考慮する部分は3つある。

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at1.png" alt="three nodes linked together">
</div>

1. 最初のノードを削除「Aノード」
2. 最後のノードを削除「Cノード」
3. 中間のノードを削除「Bノード」

1と2は本当に簡単。1の場合は`head`を`head.next`に移動した後で`head.prev`のリンクを切る。2の場合は`tail`を`tail.prev`に移動した後で`tail.next`を切れば終わり。

では、3番の場合を見てみよう。
```rb
curr = get_node_at(index)
```

まず、除去する位置にあるノードを`curr`に保存する。
そして`curr`の`prev`と`next`を利用して、AとCからつながっているリンクを全部切る。
```rb
curr.prev.next = curr.next
curr.next.prev = curr.prev
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at3.png" alt="three nodes linked together">
</div>

最後には`curr`のリンクを切って、ノードを消す。
```rb
curr = curr.prev = curr.next = nil
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at4.png" alt="three nodes linked together">
</div>

### ノードの探索「search」
```rb
def search(data)
  curr = @head
  @length.times do |i|
    # データが一致するとき
    if curr.data == data
      puts "'#{data}' is located at index '#{i}'"
      return i
    end
    curr = curr.next
  end

  # データがリストにないとき
  puts "'#{data}' is not in the list"
  return false
end
```

`head`から始めてすべてのノードを順次訪問しながらノードが持っている値が`data`と一致するかどうか確認する。一致すれば該当indexを返す。もしリストに`data`がない場合は`false`を返す。

### リスト走査「print\_list」
```rb
def print_list
  if @length <= 0
    puts "list is empty"
    return
  end

  curr = @head
  (@length-1).times do
    print "#{curr.data} -> "
    curr = curr.next
  end
  puts "#{curr.data}"
end
```
`haed`を`curr`に保存する。そして`curr`を利用してすべてのノードの値を出力する。もし`@length`のメタデータを持ってない場合は`curr.next`が`nil`になるまで繰り返す。これができる理由は`curr`が`nil`になる瞬間は`tail`の次、つまりリストの最後だけだからだ。

### テストコード
```rb
# インスタンスを生成
list = DoublyLinkedList.new()

puts "Insert 1 to 5 at index 0"
1.upto(5) do |i|
  list.insert_at(0,i)
end
list.print_list

puts "insert 0 at the front"
list.insert_at(0, 0)
list.print_list

puts "insert 6 to 10 at the back"
6.upto(10) do |i|
  list.insert(i)
end
list.print_list

puts "insert 100 at index 5"
list.insert_at(5, 100)
list.print_list

puts "remove a node at index 3"
list.remove_at(3)
list.print_list

puts "print list's size"
puts list.length

puts "search for the data '6'"
list.search(6)

puts "search for the data '77'"
list.search(77)

puts "insert 123 at index 10"
list.insert_at(11, 123)
list.print_list

puts "delete the last element"
while list.length > 0 do
  list.print_list
  list.remove_at(list.length-1)
end
list.print_list # list is empty
```

```
Insert 1 to 5 at index 0
5 -> 4 -> 3 -> 2 -> 1

insert 0 at the front
0 -> 5 -> 4 -> 3 -> 2 -> 1

insert 6 to 10 at the back
0 -> 5 -> 4 -> 3 -> 2 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10

insert 100 at index 5
0 -> 5 -> 4 -> 3 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10

remove a node at index 3
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10

print list's size
11

search for the data '6'
'6' is located at index '6'

search for the data '77'
'77' is not in the list

insert 123 at index 10
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10 -> 123

delete the last element
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10 -> 123
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9 -> 10
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8 -> 9
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7 -> 8
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6 -> 7
0 -> 5 -> 4 -> 2 -> 100 -> 1 -> 6
0 -> 5 -> 4 -> 2 -> 100 -> 1
0 -> 5 -> 4 -> 2 -> 100
0 -> 5 -> 4 -> 2
0 -> 5 -> 4
0 -> 5
0

list is empty
```

双方向リストの[全コード](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/doubly/dll.rb)。



### Related Post
- <router-link to="./jap-linked-list">連結リスト「Linked List」とは</router-link>
- <router-link to="./jap-linked-list-singly">単方向リスト「Singly List」とは</router-link>
- <router-link to="./jap-linked-list-circular">循環リスト「Circular Linked List」とは</router-link>