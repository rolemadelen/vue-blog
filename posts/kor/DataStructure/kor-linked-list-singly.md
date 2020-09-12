
연결 리스트에 대해 생소하다면 이 <router-link to="./kor-linked-list">포스팅</router-link>을 먼저 읽어주세요.

<div class="divider"></div>

### 단일 연결 리스트란?
단일 연결 리스트(Singly Linked List)는 모든 노드들이 순차적으로 연결되어 있다. 
또한 단방향의 연결 리스트이기 때문에 오직 앞으로만 이동할 수 있다.

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

단일 연결 리스트의 노드는 기본적으로 두 개의 정보를 가진다.
1. 다음 노드를 가리키는 포인터
2. 데이터의 값

노드를 코드로 구현했을 때의 모습은 대체적으로 아래와 같다.

```rb
class Node
  attr_accessor :data, :next
  
  def initialize(data)
    @data = data
    @next = nil
  end
end
```

처음 생성한 노드의 경우 가리키고 있는 노드가 없기 때문에 `@next` -- 현재 노드가 가리키고 있는 노드 -- 는 nil로 초기화 한다.

<div class="divider"></div>

### 연산

단일 연결 리스트에서는 기본적으로 아래 세 개의 연산이 가능하다.
- `add()`: 리스트에 데이터를 추가
- `remove(n)`: <i>n</i>번째 노드를 리스트에서 삭제. 
- `search_node_at(n)`: <i>n</i>번째 노드를 탐색.

<div class="divider"></div>

### 단일 연결 리스트 Ruby 코드

```rb
class SinglyLinkedList
  attr_reader :head, :length

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

  # first node => position 1
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

  # first node => position 1
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

### 사용 예제

```rb
# 단일 연결 리스트의 인스턴스를 생성
root = SinglyLinkedList.new()

# 각각 1부터 5의 값을 가진  5개의 노드를 추가
1.upto(5) do |x|
  root.add(x)
end

# 리스트의 길이와 모든 요소를들 출력
puts "len: #{root.length}"
root.print_list

# 첫 번째 노드를 삭제
root.remove(1)
puts "len: #{root.length}"
root.print_list

# 두 번째 노드를 탐색, 값을 출력
puts "search_node_at(2): #{root.search_node_at(2).data}"
```

### Related Post
- <router-link to="./kor-linked-list">연결 리스트(Linked List)란?</router-link>
- <router-link to="./kor-linked-list-doubly">이중 연결 리스트(Doubly Linked List)란?</router-link>
- <router-link to="./kor-linked-list-circular">원형 연결 리스트(Circular Linked List)란?</router-link>