
### 이중 연결 리스트란?
이중 연결 리스트(Doubly Linked List)는 노드들이 한 방향으로만 연결된 <router-link to="./kor-linked-list-singly">단일 리스트</router-link>와는 달리, 노드가 양쪽 방향으로 연결된 연결 리스트이다.

![Linked List image](assets/data-structure/linked-list/dll.png)

이중 연결 리스트의 노드는 기본적으로 아래 세 가지의 정보를 가지고 있다.
1. 데이터의 값
3. 이전 노드의 포인터 -- `prev`
2. 다음 노드의 포인터 -- `next`

```rb
class Node
  attr_accessor :data, :prev, :next

  # default parameter: prev/next의 기본값은 nil이다
  def initialize(data, prev=nil, _next=nil)
    @data = data
    @prev = prev
    @next = _next
  end
end
```

처음 노드를 생성할 때 `prev`와 `next` 둘 다 가리키고 있는 노드가 없기 때문에 인자가 따로 주어지지 않은 이상 nil을  기본 값으로 한다.

<div class="divider"></div>

### 연결 리스트 구현

여기서 구현 할 이중 연결 리스트의 구조는 아래와 같다.

```rb
class DoublyLinkedList
  # 생성자
  def initialize
  end

  # 리스트 맨 뒤에 노드를 추가
  def insert(value)
  end

  # 해당 위치에 노드를 추가
  def insert_at(index, value)
  end

  # 해당 위치의 노드를 반환
  def get_node_at(index)
  end

  # 해당 위치의 노드를 삭제
  def remove_at(index)
  end

  # 리스트에서 data를 탐색
  def search(data)
  end

  # 리스트 순회
  def print_list
  end
end
```

수 많은 구현 방법 중 하나이기 때문에 꼭 이 구조를 따를 필요는 없다. 필요하다 싶은 메소드가 있으면 따로 추가해도 되고, 필요없다고 생각되는 부분은 무시해도 좋다.

그럼 각각의 메소드들의 구현을 살펴보도록 하자.

### 생성자 (initialize)
```rb
def initialize
  @head = @tail = nil
  @length = 0
end
```

개체를 생성한 초기, 리스트가 비어있기 때문에 `@head`와 `@tail`둘 다 `nil`의 값을 가진다.

`@length`는 리스트의 길이를 저장한다. 이 메타데이터가 없을 시, 리스트의 크기를 구할 때 머리부터 순회를 해야하기 때문에 O(n)의 시간이 걸린다. 하지만 `@length`를 사용하면 O(1)으로 크기를 구할 수 있다.


### 연결 리스트 노드 추가 (insert)
```rb
def insert(value)
  new_node = Node.new(value, @tail)

  # 리스트에 이미 노드가 존재하는 경우
  if @tail != nil
    @tail.next = new_node
    new_node.prev = @tail
    @tail = new_node
  # 리스트가 비어있는 경우
  else
    @tail = new_node
    @head = @tail
  end

  @length += 1
end
```

`insert`메소드는 리스트 끝에 노드를 추가한다. 리스트가 비어있는 경우와 비어있지 않은 경우를 생각해서 구현을 해야한다.

리스트가 비어있는 경우, 새로운 노드를 `@head`와 `@tail`에 대입한다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert1.png" alt="head and tail pointing to the node">
</div>

리스트가 비어있지 않은 경우, `@tail`의 다음 노드(`next`)가 
새로운 노드(`new_node`)를 가리키도록 한다. 그 다음 `new_node`의 이전 노드(`prev`)가 현재의 꼬리를 향하도록 한다. 

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert2.png" alt="tail pointing to the new node">
</div>

마지막으로 `@tail`을 업데이트 해준다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert3.png" alt="update the tail">
</div>

### 연결 리스트 노드 삽입 (insert\_at)
```rb
def insert_at(index, value)
  # 범위 밖인 경우
  if index < 0 or index > @length
    puts "... failed to insert #{value} at index #{index}"
    return nil
  # 마지막인 경우 insert 메소드를 호출
  elsif index == @length
    insert(value)   
  # 첫 번째 위치인 경우
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
  # 노드와 노드 사이일 경우
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

원하는 위치에 노드를 삽입하는 메소드이다. 아래와 같이 노드가 연결되어 있을 때 삽입할 수 있는 경우의 수는 세 가지다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at1.png" alt="two nodes connected to each other">
</div>

1. 노드 C 뒤에 추가: `insert` 메소드 호출
2. 노드 A 앞에 추가: `insert` 메소드와 거의 같은 코드
3. 노드 A와 C 중간에 추가

3번의 경우만 살펴보도록 하겠다.

```rb
new_node = Node.new(value)
curr = get_node_at(index-1)
```
새로운 노드를 만들고 `curr`에다가 삽입할 위치 이전에 있는 노드(A)를 대입한다. 

```rb
new_node.next = curr.next
new_node.prev = curr
```

위 두 줄의 코드를 실행했을 때의 모습이다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at2.png" alt="new nodes next/prev linked to A and C">
</div>

`new_node`는 확실히 노드 A와 C중간에 위치하게 됐다. 하지만 기존에 연결되어 있던 A와 C의 링크를 끊어야 한다.

```rb
curr.next.prev = new_node   # c.prev = new_node
curr.next = new_node
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-insert_at3.png" alt="links disconnected between A and C">
</div>

### 연결 리스트 노드 반환 (get\_node\_at)
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

주어진 위치에 있는 노드를 반환하는 메소드로 헬퍼 함수의 느낌이 강하다. 위 `insert_at` 메소드에서 사용되었다.

### 연결 리스트 노드 제거 (remove\_at)
```rb
def remove_at(index)
  if index < 0 or index >= @length
    puts ".. failed to remove a node at #{index}"
    return nil
  end

  if index == 0
    data = @head.data
    @head = @head.next
    @head.prev = nil if @head
  elsif  index == @length-1
    data = @tail.data
    @tail = @tail.prev
    @tail.next = nil if @tail
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

노드를 삭제할 때 고려해야 할 부분은 세 가지가 있다.

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at1.png" alt="three nodes linked together">
</div>

1. 첫 번째 노드를 제거 (노드 A)
2. 마지막 노드를 제거 (노드 C)
3. 리스트 중간에 있는 노드를 제거 (노드 B)

1번과 2번은 간단하다. `head`의 경우는 `head.next`로 이동한 다음 `head.prev`의 링크를 끊어주면 되고, `tail`은 `tail.prev`로 이동한 다음 `tail.next`의 링크를 끊어주면 된다.

3번의 경우를 살펴보자.
```rb
curr = get_node_at(index)
```

우선 삭제할 위치에 있는 노드를 가져와 `curr`에 대입하고, `curr`의 `prev`와 `next`를 이용해 A노드와 C노드에서 연결된 링크들을 끊는다.
```rb
curr.prev.next = curr.next
curr.next.prev = curr.prev
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at3.png" alt="three nodes linked together">
</div>

마지막으로 `curr`에서 이어진 링크들을 끊고, 노드를 지운다.
```rb
curr = curr.prev = curr.next = nil
```

<div style="text-align: center">
<img src="assets/data-structure/linked-list/dll-remove_at4.png" alt="three nodes linked together">
</div>

### 연결 리스트 자료 탐색 (search)
```rb
def search(data)
  curr = @head
  @length.times do |i|
    # 일치할 경우
    if curr.data == data
      puts "'#{data}' is located at index '#{i}'"
      return i
    end
    curr = curr.next
  end

  # 리스트에 데이터가 없는 경우
  puts "'#{data}' is not in the list"
  return false
end
```

`head`에서부터 시작해 모든 노드들을 순회하면서 노드의 값이 `data`와 일치하는지 확인, 일치하면 해당 인덱스를 
반환한다. 만약 해당 자료가 존재하지 않으면 `false`를 반환한다.

### 연결 리스트 순회 (print\_list)
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

연결 리스트의 노드들을 전부 출력한다. 

`curr`에다가 `@head`를 대입하고 노드의 개수만큼 반복한다. 만약 `@length`의 정보가 없다면 `curr`의 다음이 `nil`이
아닐때까지 반복하면 된다. 머리에서 시작했을 때 `curr`이 `nil`이 되는 순간은 오직 `tail` 다음, 즉 리스트의 끝 밖에 없다.

### 구현 코드 테스트 
```rb
# 개체 생성
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

이중 연결 리스트 [전체 코드 보기](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/doubly/dll.rb).


### Related Post
- <router-link to="./kor-linked-list">연결 리스트(Linked List)란?</router-link>
- <router-link to="./kor-linked-list-singly">단일 연결 리스트(Singly Linked List)란?</router-link>
- <router-link to="./kor-linked-list-circular">원형 연결 리스트(Circular Linked List)란?</router-link>