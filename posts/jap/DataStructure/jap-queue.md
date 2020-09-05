### キュー「Queue」とは

<center>
<img src="assets/data-structure/queue/queue-1.png" alt="Customer Queue" /> <br />
</center>

### 実装

### 配列
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

### 連結リスト
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
