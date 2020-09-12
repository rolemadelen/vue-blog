
連結リストが何か分からん！っと思った方だちは<router-link to="jap-linked-list">この記事</router-link>を先に読んでください。

<div class="divider"></div>

### 単方向リストとは？
単方向リスト「Singly Linked List」はすべてのノード「node」たちが順次につながっている。そして単方向なので片方にだけ移動できる。

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

単方向リストは基本的に下記の2つの情報を持つ。<br>1. 他のノードを指すポインタ<br>2. データの値

ノードのクラスはだいたいこういう姿をしている。
```rb
class Node
  attr_accessor :data, :next
  
  def initialize(data)
    @data = data
    @next = nil
  end
end
```

生成されたノードは、最初何も指してないので`@next`はnullの値を持つ。

<div class="divider"></div>

### 機能

単方向リストはこの3つの演算が基本的にできる。
- `add()`: リストにでーたを追加。
- `remove(n)`: <i>n</i>番目のデータを除去。
- `search_node_at(n)`: <i>n</i>番目のデータを捜す。

<div class="divider"></div>

### 単方向リストRubyコード

```rb
class SinglyLinkedList
  attr_reader :head, :length

  ## 最初のリストにはノードが1個も存在しないので@headはnilである
  def initialize()
    @head = nil
    @length = 0
  end

  def add(value)
    new_node = Node.new(value)
    if @head == nil
      @head = new_node
    else
      curr = @head
      while curr.next != nil
        curr = curr.next
      end

      curr.next = new_node
    end

    @length += 1
  end

  # 1番目のノードのインデックス --> index 1
  def remove(pos)
    return -1 if pos < 1 or pos > @length
    if pos==1
      @head = @head.next
    else
      curr = @head
      for i in 1...(pos-1)
        curr = curr.next
      end

      curr.next = curr.next.next
    end

    @length -= 1
  end

  # 1番目のノードのインデックス --> index 1
  def search_node_at(pos)
    if @head == nil
      puts "---- list is empty"
      return 
    elsif pos < 1 or pos > @length
      puts "---- invalid position"
      return
    else
      curr = @head
      for i in 1...pos
        curr = curr.next
      end
      return curr
    end
  end

  def length()
    @length
  end

  def print_list()
    curr = @head
    for i in 0...@length
      print "#{curr.data} "
      curr = curr.next
    end
    puts
  end
end
```

### 使用例

```rb
# 単方向リストのインスタンスを生成
root = SinglyLinkedList.new()

# 1から5の数の値を持つノード5個をリストに追加
1.upto(5) do |x|
  root.add(x)
end

# リストの長さとすべてのノードの値を出力
puts "len: #{root.length}"
root.print_list

# １番目のノードを除去
root.remove(1)
puts "len: #{root.length}"
root.print_list

# 2番目のノードを捜して、その値を出力。
puts "search_node_at(2): #{root.search_node_at(2).data}"
```

### Related Post
- <router-link to="./jap-linked-list">連結リスト「Linked List」とは</router-link>
- <router-link to="./jap-linked-list-doubly">双方向リスト「Doubly Linked List」とは</router-link>
- <router-link to="./jap-linked-list-circular">循環リスト「Circular Linked List」とは</router-link>