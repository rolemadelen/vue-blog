### 원형 연결 리스트란?
일반적으로 연결 리스트에서 마지막 노드는 '이 노드가 마지막입니다'라는 의미로 `nil`을 가리킨다. [이중 연결 리스트](/ko-data-structure-linked-list-doubly)의 경우 마지막 노드의 `next`와 더불어 첫 번째 노드의 `prev`도 `nil`을 가리킨다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-example.png" alt="Linked list picture">
</div>

하지만 원형 연결 리스트에서는 마지막 노드의 `next`가 첫 번째 노드를 가리키고, 첫 번째 노드의 `prev`는 마지막 노드를 가리킨다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly.png" alt="Linked list picture">
</div>

### 노드 구조
원형 리스트에서의 차이는 노드의 추가/제거 부분이기 때문에 노드의 구조는 일반적인 연결 리스트와 똑같다. 

**원형 단일 연결 리스트**

```rb
class Node
  attr_accessor :data, :next     

  def initialize(data, _next=nil)
    @data = data
    @next = _next
  end
end
```

**원형 이중 연결 리스트**

```rb
class Node
  attr_accessor :data, :prev, :next

  def initialize(data, prev=nil, _next=nil)
    @data = data
    @prev = prev
    @next = _next
  end
end
```

<div class="divider"></div>

## 연결 리스트 구현

### initialize: 생성자

**원형 단일 연결 리스트**

```rb
def initialize
  @last = nil
  @length = 0
end
```

일반적으로 연결 리스트의 생성자에는 첫 번째 노드의 주소를 저장하는 `@head`노드가 존재한다. 하지만 
원형 단일 연결 리스트의 경우, 첫 번째 노드가 아닌 마지막 노드의 주소를 저장하는 `@last`노드를 사용한다. 

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert1.png" alt="circular singly list image">
</div>

`@head`에서 시작해도 되나, `@last`와 `@last.next`로 리스트의 끝과 시작점을 둘 다 알 수 있다는 점에서 `@last`를
사용하는 것이 낫다. 또한 노드의 추가 부분에 있어서도 꼬리를 알고있는 편이 훨씬 유용하다.

**원형 이중 연결 리스트**

```rb
def initialize
  @head = nil
  @length = 0
end
```

원형 이중 연결 리스트의 경우 `@head.prev`가 마지막 노드인 `@tail`을 가리키는 것과 같기 때문에 `@head`하나만 사용한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert1.png" alt="circular doubly linked list picture">
</div>


### insert: 리스트 끝에 노드 추가

**원형 단일 연결 리스트**

```rb
  new_node = Node.new(data)
  new_node.next = @last.next
  @last.next = new_node
  @last = new_node
```

먼저 새로운 노드(`new_node`)가 현재 `@last`의 다음(`@last.next`)을 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert2.png" alt="circular singly list image">
</div>

그 다음 `@last.next`는 새로운 노드를 가리킨다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert3.png" alt="circular singly list image">
</div>

리스트의 마지막 노드가 바뀌었으니 `@last`를 업데이트 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert4.png" alt="circular singly list image">
</div>

**원형 이중 연결 리스트**

```rb
  new_node = Node.new(data)
  new_node.prev = @head.prev
  new_node.next = @head
  @head.prev.next = new_node
  @head.prev = new_node
```

이중 연결 리스트의 경우 각 노드의 `prev`와 `next` 때문에 복잡해 보일수도 있지만, 과정 하나하나 그림을 그려가며 보면 생각보다 간단하다.

우선 새로운 노드(`new_node`)의 `prev`와 `next`부터 연결해보자. 처음에도 말했지만 `@head.prev`가 리스트의 마지막 노드이다 (아래 그림에서의 `B`노드). 하지만 이제는 `new_node`가 마지막 노드가 되어야 한다. `new_node`의 `prev`와 `next`를 각각 `@head.prev`와 `@head`에 연결해준다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert2.png" alt="circular doubly linked list picture">
</div>

그 다음 `@head`의 `prev.next`(`B.next`)가 `@head`가 아닌 새로운 마지막 노드(`new_node`)를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert3.png" alt="circular doubly linked list picture">
</div>

마지막으로 `@head.prev`가 새로운 꼬리(`new_node`)를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert4.png" alt="circular doubly linked list picture">
</div>


### insert\_at: 노드 삽입

#### 리스트 꼬리에 노드 삽입

**원형 단일/이중 연결 리스트**

```rb
  if @length == 0 or index == @length
    insert(data)
  end
```

리스트가 비어 있거나 노드를 마지막에 추가하는 경우, 먼저 구현한 `insert` 메소드를 호출한다.

#### 리스트 머리에 노드 삽입

**원형 단일 연결 리스트**

```rb
  new_node = Node.new(data)
  new_node.next = @last.next
  @last.next = new_node
```

새로운 노드가 리스트의 새로운 머리가 된다. 먼저 `new_node`가 현재 리스트의 머리인 `@last.next`를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at1.png" alt="circular doubly linked list picture">
</div>

그 다음 `@last`가 새로운 머리(`new_node`)를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at2.png" alt="circular doubly linked list picture">
</div>

**원형 이중 연결 리스트**

```rb
  new_node = Node.new(data)
  new_node.prev = @head.prev
  new_node.next = @head

  @head.prev.next = new_node
  @head.prev = new_node
  @head = new_node
```

`new_node`의 `prev`와 `next`를 먼저 이어준다.
<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at3.png" alt="circular doubly linked list picture">
</div>

그림으로 봤을 때, 현재 꼬리(`last`)의 다음 노드(`last.next`)가 `new_node`를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at4.png" alt="circular doubly linked list picture">
</div>

그 다음 `@head.prev`가 `last`가 아닌 `new_node`를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at5.png" alt="circular doubly linked list picture">
</div>

#### 리스트 중간에 노드 삽입

**원형 단일 연결 리스트**

```rb
  curr = get_node_at(index-1)

  new_node = Node.new(data)
  new_node.next = curr.next
  curr.next = new_node
```

아래 그림에서 `A`와 `last`중간에 삽입하려고 할 때, 우선 삽입 위치 이전에 있는 노드(`A`)를 가져와 `curr`에 저장한다. 그 다음, 새로운 노드가 `curr.next`를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at3.png" alt="circular doubly linked list picture">
</div>

그 다음 `curr.next`를 새로운 노드로 향하게 하면 깔끔하게 연결이 된다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-insert_at4.png" alt="circular doubly linked list picture">
</div>

**원형 이중 연결 리스트**

```rb
  curr = get_node_at(index)

  new_node = Node.new(data)
  new_node.prev = curr.prev
  new_node.next = curr

  curr.prev.next = new_node
  curr.prev = new_node
```

삽입하려는 위치의 노드 -- 그림에서는 `B` -- 를 `curr`에 저장한다. 그리고 `new_node`의 `prev`는 `curr.prev`를, `next`는 `curr`을 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at1.png" alt="circular doubly linked list picture">
</div>

그 다음 `curr.prev.next`(`head.next`)와 `curr.prev`가 새로운 노드를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-insert_at2.png" alt="circular doubly linked list picture">
</div>

### remove\_at: 노드 삭제

#### 첫 번째 노드 삭제

**원형 단일 연결 리스트**

```rb
def remove_front
  temp = @last.next
  @last.next = @last.next.next
  temp = temp.next = nil
end
```

`@last.next`가 첫 번째 노드를 가리키니 `@last.next.next`를 가리키도록 하면 바로 제거가 가능하다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at1.png" alt="circular doubly linked list picture">
</div>

**원형 이중 연결 리스트**

```rb
def remove_front
  temp = @head
  @head.next.prev = @head.prev
  @head.prev.next = @head.next
  @head = @head.next
  temp = temp.next = temp.prev = nil
end
```

머리를 삭제해야 하기 때문에 `@head`에 연결되어 있는 링크들 부터 처리한다 
```rb
  @head.next.prev = @head.prev  # B.next
  @head.prev.next = @head.next  # C.next
```

위 두 줄의 코드를 실행했을 때 리스트의 모습은 이렇다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at1.png" alt="circular doubly linked list picture">
</div>

마지막으로 `@head`를 다음 노드(`@head.next`)로 옮긴다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at2.png" alt="circular doubly linked list picture">
</div>

#### 마지막 노드 삭제

**원형 단일 연결 리스트**

```rb
def remove_last
  curr = get_node_at(@length-2)  # curr(last)
  curr.next = @last.next         # curr.next = A
  @last = curr
end
```

마지막 노드를 삭제하려면 `@last`를 가리키고 있는 이전 노드(`B`)가 필요한데 이 노드를 `curr`에 저장한고 `curr.next`가 `@last.next`를 가리키도록 한다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at2.png" alt="circular doubly linked list picture">
</div>

그리고 마지막으로 `@last`를 `curr`로 이동시킨다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-singly-remove-at3.png" alt="circular doubly linked list picture">
</div>

**원형 이중 연결 리스트**

```rb
def remove_last
  temp = @head.prev
  @head.prev.prev.next = @head   # A.next = @head
  @head.prev = @head.prev.prev   # @head.prev = A
  temp = temp.prev = temp.next = nil
end
```

방법은 단일 리스트와 같다. 머리에서 시작해 전전(`prev.prev`)노드에 접근하여 마지막 노드와의 연결을 끊어버린다.

<div style="text-align: center">
  <img src="assets/data-structure/linked-list/cll-doubly-remove-at3.png" alt="circular doubly linked list picture">
</div>

#### 중간 노드 삭제

**원형 단일 연결 리스트**

```rb
  curr = get_node_at(index-1)
  curr.next = curr.next.next
```

위치만 다를 뿐, 첫 번째 노드를 삭제하는 부분과 동일하다.

**원형 이중 연결 리스트**

```rb
  curr = get_node_at(index)
  curr.next.prev = curr.prev
  curr.prev.next = curr.next
```

마찬가지로 위치만 다를 뿐, 첫 번째 노드를 삭제하는 부분과 동일하다. 다만 머리를 지우는 것이 아니기 때문에 `head`를 이동시키는 부분은 무시한다.

<div class="divider"></div>

### 구현 코드
- [원형 연결 리스트 전체 구현 코드](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/cll.rb)
- [원형 연결 리스트 테스트 입출력 코드](https://github.com/jioneeu/coding/blob/master/data_structure/ruby/linked-list/circular/test.rb)


### Related Post
- <router-link to="./kor-linked-list">연결 리스트(Linked List)란?</router-link>
- <router-link to="./kor-linked-list-singly">단일 연결 리스트(Singly Linked List)란?</router-link>
- <router-link to="./kor-linked-list-doubly">이중 연결 리스트(Doubly Linked List)란?</router-link>
