
### 連結リスト「Linked List」とは

連結リスト「Linked List」は配列と同じような線形のデータ構造だが、データがメモリに保存されるやり方が違う。配列の場合はデータがメモリに順次保存される反面、連結リストのデータは離れて保存されている。

![Linked List image](assets/data-structure/linked-list/linkedlist.png)
<div style="font-size: 10px; text-align: center;">Source: https://dev.to/swarup260/data-structures-algorithms-in-javascript-single-linked-list-part-1-3ghg</div>

連結リストはノード「node」というのを使って、他のノードに接近する。

<div class="divider"></div>

### 連結リスト vs. 配列
配列は同じ資料型のデータを保存するとき使えられるが、<br>下記の短所がある：
- 配列の大きさは変わられない。
- 挿入と除去演算の費用が大きい。
  + **挿入**「access」：新しいデータを挿入する位置を捜して、その位置からあるすべての要素を一間ずつ右側に移す過程が必要。
  + **除去**「delete」: 除去した後、その穴を埋めるためにデータを一間ずつ左側に移す過程が必要。

<div class="divider"></div>

### 連結リストの長所
- 連結リストの大きさは動的だ（大きさが固定的でない）。
- 挿入と除去の演算が早い。

### 連結リストの短所
- 要素に接近するためには必ず最初のノードから接近しなければならない。
- 新しいデータ＝新しいノード
  + メモリの使用量が増える。
- 配列のようにデータがメモリに順次保存されてないので、ノードたちの地域性「locality」がない。
  + キャッシュ「cache」親和的ではない。

| 演算 | 配列 | 連結リスト |
|:---:|:---:|:---:|
|**接近**| O(1) | O(n) |
|**探索**| O(n) | O(n) |
|**挿入**| O(n) | O(1) |
|**除去**| O(n) | O(1) |

<div class="divider"></div>

### 連結リストの構造
連結リストのノードは基本的に下記の2つの情報を持つ：
1. 次のノードを指すポインタ
2. 現在のノードが示す資料の値 

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

### 走査

順次に最初のノードから最後のノードまで訪問しながら値を出力する。
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
- <router-link to="./jap-linked-list-singly">単方向リスト「Singly List」とは</router-link>
- <router-link to="./jap-linked-list-doubly">双方向リスト「Doubly Linked List」とは</router-link>
- <router-link to="./jap-linked-list-circular">循環リスト「Circular Linked List」とは</router-link>