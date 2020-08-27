## What is Stack?

## Implementation

### Array based
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

[Array based stack implementation in C++]()

### Linked List based
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

[Linked List based stack implementation in C++]()
