
### 연결 리스트란

연결 리스트(Linked List)는 배열과 같은 선형 자료구조이지만 자료가 메모리에 저장되는 방식이 다르다. 
배열의 경우 자료들이 메모리에 나란히 일렬로 저장되는 반면, 연결 리스트의 자료들은 이곳저곳 떨어져있다. 

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

연결 리스트의 각 자료들을 노드(_node_)라고 부르는데, 각 노드에는 다음 노드를 참조할 수 있는 포인터(_pointer_)가
존재한다. 이 포인터를 사용해서 여기저기 떨어져있는 노드들에 접근할 수가 있다.

<div class="divider"></div>

### 연결 리스트와 배열
배열은 같은 자료형의 데이터를 저장할 때 사용되지만 아래의 한계를 가진다:
- 배열의 크기가 변할 수 없다.
- 정렬된 자료의 경우, 삽입과 제거의 비용이 크다.
  + **삽입**: 새로운 자료를 삽입할 위치를 찾고 그 위치부터 뒤에 있는 모든 자료들을 한 칸씩 옮겨주는 과정이 필요. 
  + **제거**: 제거된 자료의 공백을 메우기 위해 자료들을 한 칸씩 옮겨주는 과정이 필요.

<div class="divider"></div>

### 연결 리스트의 장점
- 배열과 다르게 연결 리스트의 크기는 동적이다.
  + 새로운 데이터 추가/제거 후 요소들의 위치를 앞뒤로 옮길 필요가 없다.
- 추가와 제거의 연산이 빠르다.

### 연결 리스트의 단점
- 요소에 접근을 하기 위해서는 무조건 첫 번째 노드에서부터 탐색을 해야한다.
- 새로운 요소마다 노드를 만들어야 하기 때문에 메모리의 사용량이 증가한다.
- 배열과 다르게 연속된 메모리에 자료가 존재하지 않기 때문에 지역성이 떨어진다.
  +  캐시(cache) 친화적이지 않다.

| 연산 | 배열 | 연결 리스트 |
|:---:|:---:|:---:|
|**접근**| O(1) | O(n) |
|**탐색**| O(n) | O(n) |
|**삽입/추가**| O(n) | O(1) |
|**삭제/제거**| O(n) | O(1) |

<div class="divider"></div>

### 연결 리스트의 기본 구조
연결 리스트에서 사용되는 노드는 다음과 같은 정보를 저장한다:
- 다음 노드를 가리킬 포인터
- 현재 노드가 나타내는 자료의 값 

```rb
class Node
  attr_accessor :data, :next
  
  def initialize(data)
    @data = data
    @next = nil
  end
end

head = Node.new(1)    # [head,   1] -> nil
second = Node.new(2)  # [second, 2] -> nil
third = Node.new(3)   # [third , 3] -> nil

head.next = second    # [head, 1] -> [second, 2] -> nil
second.next = third   # [head, 1] -> [second, 2] -> [third, 3]
```

### 순회
첫 번째 노드에서 시작해 순차적으로 마지막 노드까지 방문한다.
```rb
def print_list(node)
  while node != nil
    print "#{node.data} "
    node = node.next
  end
  puts
end

head = Node.new(1)             # 1 -> nil
head.next = Node.new(2)        # 1 -> 2 -> nil
head.next.next = Node.new(3)   # 1 -> 2 -> 3 -> nil

print_list(head)
# 1 2 3
```

### Related Post
- <router-link to="./kor-linked-list-singly">단일 연결 리스트(Singly Linked List)란?</router-link>
- <router-link to="./kor-linked-list-doubly">이중 연결 리스트(Doubly Linked List)란?</router-link>
- <router-link to="./kor-linked-list-circular">원형 연결 리스트(Circular Linked List)란?</router-link>