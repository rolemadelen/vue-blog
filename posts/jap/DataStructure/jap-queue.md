### キュー「Queue」とは

First-In-First-Out（FIFO）の方法でデータを保存するデータ構造です。

「で、FIFOってなに？」っと思う方がいると思います。でもFIFOの概念って、皆さんはもう知っていると思います。レストランとかデーパトーのレジの様子を考えてみましょう。先に並んだ人からまずレジに行って、お金を払いますね。

<center>
<img src="assets/data-structure/queue/queue-1.png" alt="Customer Queue" /> <br />
</center>

キューのデータ構造はレジに並んでいる人たちの形と同じです。先にリストに入ったデータから演算をします。

### キューの演算 (Operations)
**First-In-First-Out**のデータ構造。

- `enqueue (data)` - リスト最後に`data`を追加。
- `dequeue` - リスト最初のデータを除去。
- `empty?` - リストが空いてる場合は`true`を、逆の場合は`false`を返す。
- `front` - リストの最初のデータを返す。

### 実装

### 配列 (Array)
```rb
class Queue
  def initialize (size)
    @capacity = size
    @queue = Array.new(@capacity)
    @size = 0
  end

  def enqueue (data)
    if @size == @capacity
      puts "The queue is full."
      @capacity <<= 1
    end

    @queue[@size] = data
    @size += 1
  end

  def dequeue
    if @size == 0
      puts "The queue is empty.."
      return nil
    end

    val = @queue[0]
    @queue.shift()
    @size -= 1
    val
  end

  def print_queue
    print "FRONT--| "
    curr = @rear
    0.upto(@size-2) do |i|
      print "#{@queue.fetch(i)} -> "
    end
    puts "#{@queue.fetch(@size-1)} |--REAR"
  end

  def empty?
    @size == 0
  end

  def front
    if @size == 0
      puts "The queue is empty.."
      return nil
    end

    @queue[0]
  end
end
```

### 連結リスト (Linked List)
```rb
class Node
  attr_accessor :next, :data

  def initialize(data)
    @data = data
    @next = nil
  end
end

class Queue
  def initialize
    @front = nil
    @rear = nil
    @size = 0
  end

  def enqueue(data)
    new_node = Node.new(data)

    # rear |- - - - -| front
    if @size == 0
      @rear = @front = new_node
      @rear.next = @front
    else
      new_node.next = @rear
      @rear = new_node
    end

    puts "enqueue #{data}"
    @size += 1
  end

  def dequeue
    data = @front.data

    curr = @rear
    while curr.next != @front
      curr = curr.next
    end
    curr.next = nil
    @front = curr

    puts "dequeue #{data}"
    @size -= 1
  end

  def front
    @front.data
  end

  def rear
    @rear.data
  end

  def print_queue
    print "REAR--| "
    curr = @rear
    while curr != @front
      print "#{curr.data} -> "
      curr = curr.next
    end
    puts "#{@front.data} |--FRONT"
  end
end
```

### キューの応用事例

データが入った順番で処理しなければダメな時使うデータ構造。

- 幅優先探索（Breadth First Search）
- Priority Queue
- Cache Implementation
- Process Manager
- Printer queues

### Related Post
- <router-link to="./jap-stack">スタック「Stack」とは</router-link>