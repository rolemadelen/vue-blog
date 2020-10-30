<div class="update">
last updated 10.30.20
</div>

## 配列とは

配列(Array)はデータ構造の一つで、同じデータ型の変数を含むコンテナです。例えば、charの配列には文字だけ、intの配列には数しか入らないということです。。

<div style="text-align: center;">
  <img src="assets/data-structure/array/array1d-1.png" alt="array 1d image">
</div>

配列の中のそれぞれの変数は要素(element)、そして要素の位置はインデックス(index)と呼ばれます。インデックスで使える数字は０と正数だけです。

### 配列の種類
- 一次元配列 (上の表ような形)
- 二次元配列：配列の中の配列 [(x,y)グリッドと同じ]
- 三次元配列：２次元配列の中に更に配列がある(ルービックキューブの形)
- 四次元以上もできますが、複雑で構造をイメージするのも難しくてそんなに使わない。

## Rubyの配列
Rubyの配列は普通のとは違います。同じデータ型の変数を含むコンテナと基本的には一緒ですが、このデータ型がintとかcharとかではなくオブジェクトです。
Rubyはほとんどのものが全部オブジェクトなので簡単に言うと何でも入るコンテナです。

下記のように数字、文字列、ブーリアン、nil、そして配列もオブジェクトなので挿入できます。
<div style="text-align: center;">
  <img src="assets/data-structure/array/array1d-2.png" alt="ruby obj array 1d image">
</div>

では本当にこれらの要素がオブジェクトか確認してみましょう。
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

1. `[]`コンストラクタを使って生成する。

```rb
arr = []                    # => []
arr2 = [1, '2', "three"]    # => [1, '2', "three"]
```

2. 直接`:new`メソッドを呼び出して生成する。 
```rb
arr = Array.new()      # => []
arr = Array.new(3)     # => [nil, nil, nil]
arr = Array.new(3, 0)  # => [0, 0, 0]
```

二番目の引数を使うとき注意することが一点あります。該当値で初期化した要素は全部同じオブジェクトを指します。下のコードを見てください。

```rb
# 配列の基本値を"hello"で設定
arr = Array.new(3, "hello");     # => ["hello", "hello", "hello"]

arr[0].upcase!;   # 1番めの'hello'を大文字に変換
puts arr          # => ["HELLO", "HELLO", "HELLO"] 
```

すべての要素が一つの同じオブジェクトを指しているので、一つの要素の値を変えるとすべての値が変わります。なので、`:new`の２番目の引数には[イミュータブル](https://ja.wikipedia.org/wiki/イミュータブル)(immutable)オブジェクト(シンボル, 数字, ブーリアン)を使用することが推奨されます。

[ミュータブル](https://developer.mozilla.org/ja/docs/Glossary/Mutable)(mutable)を基本値で持つ配列を生成する時にはブロック(block)を使います。
```rb
arr = Array.new(3) { "hello" }  # => ["hello", "hello", "hello"]

arr[0].upcase!
puts arr            # => ["HELLO", "hello", "hello"]
```

3. カーネル(kernel)の[`Array()`](https://ruby-doc.org/core-2.7.0/Kernel.html#method-i-Array)を使う。
```rb
Array([])            # => []
Array(nil)           # => []
Array([1, 2, 3])     # => [1, 2, 3]
Array(1..5)          # => [1, 2, 3, 4, 5]
Array(1...5)         # => [1, 2, 3, 4]
```

### 配列に接近（access）

配列のindexには負の数は使えないと最初に言いました。でも、実はRubyの配列には負の数も使えます。
```rb
arr = [1, 2, 3, 4, 5]
arr[2]    # => 3
arr[1]    # => 2
arr[0]    # => 1
arr[-1]   # => 5
arr[-2]   # => 4
arr[100]  # => nil
```

`arr[100]`みたいに配列の範囲外に接近する時には`nil`を返します。でも`:fetch`メソッドを使って範囲外に接近する場合はエラーが起こります。

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

最初の要素は`:shift`、最後の要素は`:pop`メソッドを使って削除します。

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

最後に`:uniq`と言うメソッドがあります。このメソッドは配列から重複しているデータを一つ残して全部除去します。
```rb
arr = [1, 2, 2, 3, 3, 3, 4, 5, 5]
arr.uniq  # => [1, 2, 3, 4, 5]
arr       # => [1, 2, 2, 3, 3, 3, 4, 5, 5]

arr.uniq! # => [1, 2, 3, 4, 5]
arr       # => [1, 2, 3, 4, 5] 
```

## 二次元配列
二次元配列の構造と生成方法を簡略にみてみましょう。

<div style="text-align: center;">
  <img src="assets/data-structure/array/array2d-1.png" alt="array 2d image">
</div>

一次元配列の場合は`arr[0]`などな方法で要素に接近しました。二次元配列の場合には列(column)と行(row)、二つのインデックスを使用して要素に接近します。
インデックスの順位に注意してください。`arr[col][row]`ではなく`arr[row][col]`です(上の表を確認)。

## 二次元配列の生成

<div style="text-align: center;">
  <img src="assets/data-structure/array/array2d-2.png" alt="array 2d image" style="margin: 0;">
</div>

1. [ハードコード](https://dictionary.goo.ne.jp/word/ハードコード/)で作る。
```rb
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
arr[0]     # => [1, 2, 3]
arr[1]     # => [4, 5, 6]
arr[2]     # => [7, 8, 9]
arr[0][1]  # => 2
arr[2][2]  # => 9
```


2. `:new`メソッドを使用する。

最初に一次元配列を作って、それぞれの要素に配列を挿入することもできます。

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

Rubyの中で多次元配列というのは、配列が要素で入ってる一次元配列と同じです。なので、一次元配列で使ったメソッド(挿入、除去、等々) を二次元、三次元配列などに同様に使用できます。
