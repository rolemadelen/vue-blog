## 配列とは

配列(Array)はデータ構造の一つで、同じデータ型の変数を含むコンテナです。例えば、charの配列には文字だけ、intの配列には数しか来れないっと言うことです。

<div style="text-align: center;">
  <img src="assets/data-structure/array/array1d-1.png" alt="array 1d image">
</div>

配列の中のそれぞれの変数は要素(element)そして要素の位置はインデックス(index)と呼びます。indexで使える数字は０と正数だけです。

配列には二つ種類があります。
1. **一次元配列** (上の表ような形)
2. **n次元配列** 
  + 二次元配列: 配列の配列(３x３、４x４、５x５とような(x,y)グリドと同じ)
  + 三次元配列: 配列の配列の配列(３x３x３のルビックスキューブの形)
  + 四次元以上もできますが、複雑で構造をイメージするのも難しくてそんなに使えません。

## Rubyの配列
Rubyの配列は普通のとは違います。同じデータ型の変数を含むコンテナとは一緒ですが、このデータ型がintとかcharとかではなくObjectです(理解するために簡単に説明してるだけで、実際には違うかもしれないです)。 

Rubyはほとんどのものが全部オブジェクトなのでオブジェクト型の配列と言うのは、簡単に言うと「何でも入るコンテナ」です。

下記のように数字、文字列、ブーリアン、null、そして配列もオブジェクトなので挿入できます。
<div style="text-align: center;">
  <img src="assets/data-structure/array/array1d-2.png" alt="ruby obj array 1d image">
</div>

では本当にオブジェクトなのか確認してみましょう。
```rb
arr = [1, 3.2, "hello", true, [1,2,3], nil];

arr.each do |elem|
  # 全部trueを出します。
  puts elem.is_a? Object
end
```

##  配列の演算

### 配列の生成

配列を生成する方法は３つあります。

第一：`[]`コンストラクタを使って生成する。

```rb
arr = []                    # => []
arr2 = [1, '2', "three"]    # => [1, '2', "three"]
```

第二：直接`:new`メソッドを呼び出して生成する。 
```rb
arr = Array.new()      # => []
arr = Array.new(3)     # => [nil, nil, nil]
arr = Array.new(3, 0)  # => [0, 0, 0]
```

二番目の引数を使うとき注意するのが一点あります。該当値で初期化した要素だちは全部同じオブジェクトを指します。下のコードを見てください。

```rb
# 配列の基本値を"hello"で設定
arr = Array.new(3, "hello");     # => ["hello", "hello", "hello"]

arr[0].upcase!;   # 1番めの'hello'を大文字に変換
puts arr          # => ["HELLO", "HELLO", "HELLO"] 
```

すべての要素が一つの同じオブジェクトを指しているので、一つの予想の値を変えるとすべての値が変えます。なので、`:new`の２番目の引数にはイミュータブル(immutable)オブジェクト(シンボル, 数字, ブーリアン)を私用することが感傷されます。

ミューたブル(mutable)を基本値で持つ配列を生成する時にはブラック(block)を使います。
```rb
arr = Array.new(3) { "hello" }  # => ["hello", "hello", "hello"]

arr[0].upcase!
puts arr            # => ["HELLO", "hello", "hello"]
```

最後に第三：カーネル(kernel)の[`Array()`](https://ruby-doc.org/core-2.7.0/Kernel.html#method-i-Array)を使う。
```rb
Array([])            # => []
Array(nil)           # => []
Array([1, 2, 3])     # => [1, 2, 3]
Array(1..5)          # => [1, 2, 3, 4, 5]
Array(1...5)         # => [1, 2, 3, 4]
```

### 配列に接近（access）

配列のindexには負の数はできないって最初に話しました。でも、実はRubyの配列には負の数も使えます。
```rb
arr = [1, 2, 3, 4, 5]
arr[2]    # => 3
arr[1]    # => 2
arr[0]    # => 1
arr[-1]   # => 5
arr[-2]   # => 4
arr[100]  # => nil
```

`arr[100]`みたいに配列の範囲外に接近する時には`nil`を返します。でも`:fetch`メソッドを使って範囲外を接近する場合はエラーが起こります。

```rb
arr = [1, 2, 3, 4, 5]
arr.fetch(0)            # => 1
arr.fetch(100)          # => IndexError (index 100 outside of array bounds: -5...5)
arr.fetch(100, 'out!')  # => "out!"
```

### データの追加 (insert)

配列の最後にデータを追加する方法には`:push`と`:<<`があります。

```rb
arr = [1]
arr.push(2)  # => [1, 2]
arr << 3     # => [1, 2, 3]
```

逆に最初に追加するときには`:unshift`を使います。
```rb
arr = [3]
arr.unshift(2)  # => [2, 3]
arr.unshift(1)  # => [1, 2, 3]
``` 

特定位置にデータを挿入するときには`:insert`を使用します。
```rb
arr = ['one', 'two', 'four', 'five']
arr.insert(2, 'three')   # => ["one", "two", "three", "four", "five"]
```

### データの除去（delete）

最後の要素を削除するときには`:pop`、最初のは`:shift`メソッドを使って削除します。

```rb
arr = [1, 2, 3, 4, 5]
a.pop    # => 5
arr      # => [1, 2, 3, 4]

a.shift  # => 1
arr      # => [2, 3, 4]
```

特定位置にある要素を除去する場合は`:delete_at`を使います。
```rb
arr = [1, 2, 3, 4, 5]
arr.delete_at(2)    # => 3
arr                 # => [1, 2, 4, 5]
```

位置ではなく特定値を持ってる要素を全部削除したい場合は`:delete`を使います。
```rb
arr = [1, 2, 2, 3, 4]
arr.delete(2)  # => 2
arr            # => [1, 3, 4]
```

最後に`:uniq`っと言うメソッドがあります。このメソッドは配列から重複されるデータたちを一個残って全部除去します。
```rb
arr = [1, 2, 2, 3, 3, 3, 4, 5, 5]
arr.uniq  # => [1, 2, 3, 4, 5]
arr       # => [1, 2, 2, 3, 3, 3, 4, 5, 5]

arr.uniq! # => [1, 2, 3, 4, 5]
arr       # => [1, 2, 3, 4, 5] 
```

## 二次元配列
二次元配列の構造と生成方を簡略にみてみましょう。

<div style="text-align: center;">
  <img src="assets/data-structure/array/array2d-1.png" alt="array 2d image">
</div>

一次元配列の場合は`arr[0]`などな方法で要素に接近しました。二次元配列も方法は同じですが一つのインデックスではなく、列(column)と行(row)、二つのインデックスを使用します。インデックスの順位に注意してください。`arr[col][row]`ではなく`arr[row][col]`です(上の表を確認)。

### 二次元配列の生成

```rb
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
arr[0]     # => [1, 2, 3]
arr[1]     # => [4, 5, 6]
arr[2]     # => [7, 8, 9]
arr[0][1]  # => 2
arr[2][2]  # => 9
```

上のコードは3x3配列を生成します(下の表を確認)。

<div style="text-align: center;">
  <img src="assets/data-structure/array/array2d-2.png" alt="array 2d image">
</div>

または`:new`を使用して一次元配列を作ります。その後で部分配列を挿入する方法もあります。
```rb
arr = Array.new(3)  # => [nil, nil, nil]
arr[0] = [1, 2, 3]  # => [[1,2,3], nil, nil]
arr[1] = [4, 5, 6]  # => [[1,2,3], [4,5,6], nil]
arr[2] = [7, 8, 9]  # => [[1,2,3], [4,5,6], [7,8,9]]
```

最初から3x3の空配列を作ることもできます。
```rb
arr = Array.new(3) { [] }  # => [[], [], []]
arr[0] << 1   # => [[1], [], []]
arr[1] << 4   # => [[1], [4], []]
arr[2] << 7   # => [[1], [4], [7]]
```

Rubyの中で多次元配列っというのは、部分配列が要素で入ってる一次元配列と同じです。なので、一次元配列で使ったメソッド(挿入、除去、等々) を二次元、三次元配列などに同様に使用できます。
