### 큐(queue)란

먼저 들어온 데이터가 먼저 처리되는 선입선출 (First-In, First-Out; FIFO) 구조의 자료구조이다. 

선입선출은 일상생활에서도 상당히 많이 쓰이는, 모두가 알고있는 개념이다. 예를들어 마트에서의 계산대를 생각해보자. 아래 그림과 같이 사람들이 줄을 서고, 가장 먼저 온 사람이 먼저 계산을, 나중에 온 사람이 나중에 계산을 한다.

<center>
<img src="assets/data-structure/queue/queue-1.png" alt="Customer Queue" /> <br />
</center>

자료구조 큐(Queue)는 마치 계산대의 직원처럼 데이터의 순서를 기억하고 순서대로 처리할 때 사용되는 자료구조이다.

### 큐의 연산 (Operations)
선입선출 (**First-In First Out**; FIFO)의 구조를 따르는 자료구조.

- `enqueue (data)` - 리스트 끝에 `data`를 추가한다.
- `dequeue` - 리스트의 첫 번째 자료를 제거한다.
- `empty?` - 리스트가 비어있으면 `true`, 아니면 `false`를 반환한다.
- `front` - 리스트의 첫 번째 자료의 값을 반환한다.


### 구현

### 배열 (array)
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

### 연결리스트 (linked list)
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


### 큐의 응용사례

자료가 들어온 순서대로 처리할 때 사용되는 자료구조.

- 넓이 우선 탐색 (Breadth First Search)
- 우선 순위 큐 (Priority Queue)
- Cache Implementation
- 프로세스 관리자 (Process Manager)
- 프린터 큐 (Printer queues)

###  Related Post
- <router-link to="./kor-stack">스택(Stack)이란?</router-link>