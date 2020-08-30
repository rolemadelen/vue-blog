### スタック「Stack」とは
スタックは遂行される作業の順序を特定の方法で保存するデータ構造です。この保存方法を**LIFO**（Last-In First-Out）または**FILO**（First-In Last-Out）っと呼びます。

<center>
<img src="assets/data-structure/stack/stack-1.png" alt="stack of books" /> <br />
</center>

スタックは日常の中でも結構多く使われています。

例えば、机の上に本たちが積まれている状況を考えてみましょう。そこで我らが確認できる本は一番上にあるのだけです。二番目の本を見るとしたらその上にある本を先に抜かなければダメです。上の表の場合は`book 1`の本を見るとしたら、まずその上にある`book 4`から`book 2`の本たちを全部抜く必要があります。

上記はスタックの動作方式と正確に一致します。スタックにデータを追加するというのは、前に追加したデータの上に積むことです。そして、接近する時は必ずtopからアクセするのができます。

### 演算
- `push (data)` - `data`をスタックに追加。
- `pop` - 最後に追加したデータをスタックから除去。
- `top` - 最後に追加したデータの値を返す。
- `empty?` - スタックが空い                                   てるか確認するメソッド。

### スタックの実装 - 配列「Array」

```rb
class Stack
  def initialize (size)
    @capacity = size
    @stack = Array.new(@capacity)
    @size = 0
  end

  def push (data)
    if @size == @capacity
      puts "The stack is full. Stack resized (#{@capacity} -> #{@capacity * 2})"
      @capacity *= 2
    end

    @stack[@size] = data
    @size += 1
  end

  def pop
    if @size==0
      puts "The stack is empty.."
      return nil
    end

    @size -= 1
    val = @stack.fetch(@size)
  end

  def top
    if @size==0
      puts "The stack is empty.."
      return nil
    end

    @stack.fetch(@size-1)
  end

  def empty?
    @size==0
  end

  def show
    if @size == 0
      puts "The stack is empty.."
      return nil
    end

    0.upto(@size-1) { |i| print "#{@stack.fetch(i)} " }
    puts
  end
end
```

### スタックの実装 - 連結リスト「Linked List」
```rb
class Node
  attr_accessor :next, :data

  def initialize(data)
    @data = data
    @next = nil
  end
end

class Stack
  def initialize
    @top = nil
    @size = 0
  end

  def push(data)
    new_node = Node.new(data)

    if @top == nil
      @top = new_node
    else
      new_node.next = @top
      @top = new_node
    end

    puts "push #{data}"
    @size += 1
  end

  def pop
    if is_empty?
      puts "Underflow.."
    else
      data = @top.data
      puts "pop #{data}"
      @top = @top.next
      @size -= 1
    end
  end

  def top
    @top.data
  end

  def is_empty?
    @size == 0
  end

  def print_stack
    curr = @top
    while curr.next != nil
      print "#{curr.data} -> "
      curr = curr.next
    end
    puts curr.data
  end
end
```
