### 스택(Stack)이란?
스택은 수행되는 작업들의 순서를 특정한 방법으로 저장하는 자료구조이다. 스택의 이 특정한 저장 방법을 **LIFO**, Last-In First-Out, 또는 **FILO**, First-In Last-Out, 구조라고 한다.  

<center>
<img src="assets/data-structure/stack/stack-1.png" alt="stack of books" /> <br />
</center>

사실 스택은 일상속에서도 상당히 많은 곳에서 사용되고 있다.

예를들어 책상위에 본인의 키 만큼 쌓아놓은 교과서들을 생각해보자. 그 상태에서 우리가 확인할 수 있는 교과서의 표지는, 가장 위에 있는 것뿐이다. 두 번째 교과서의 표지를 보기 위해서는 가장 위에 있는 책을 치워야 한다. 위 그림으로 예를들면 교과서 `book 1`의 표지를 보기위해서는 그 위에 있는 `book 4` ~ `book 2`를 전부 치워야 한다.

위는 스택의 동작방식과 정확히 일치한다. 스택에 데이터를 추가한다는 것은 전에 추가한 데이터 위에 하나하나 쌓아올리는 것이고, 접근하기 위해서는 위(top)부터 하나하나 내려가는 방식이다. 이 내려가는 동작을 배열로 구현할 경우 단순히 인덱스 계산으로 가능하고, 연결리스트의 경우는 노드의 포인터를 사용한다.

### 연산
- `push (data)` - `data`를 스택에 추가.
- `pop` - 최근 추가된 스택의 데이터를 제거.
- `top` - 최근 추가된 데이터의 값을 반환. 
- `empty?` - 스택이 비어있는지 확인하는 메소드.

### 구현
### 배열 (array)
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

### 연결리스트 (linked list)
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

###  Related Post
- <router-link to="./kor-queue">큐(Queue)란?</router-link>