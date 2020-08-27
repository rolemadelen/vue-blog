
## 選択ソート
- 少ない数のデータを整列するとき効率的なアルゴリズム。
- ほぼ整列されている時、最高の効率を発揮。
- カードゲームをする時、手の中のカードを並べ替える方法と似ている。
  + 新しいカードを並べ替えたカードと比較。
  + 新しいカードの数だけ繰り返す。

<img src="assets/algorithm/sorting/insertion.png"> <br>
<span style="font-size:11px"><i>source: <a href="https://studyalgorithms.com/array/insertion-sort/#">studyalgorithm.com</a></i></span>

<div class="divider"></div>

## アルゴリズム要約
- 現在位置の値を`key`と呼ぶ。
- **2番目のデータから始め**。
- 前のデータより`key`が小さい場合、`key`と前のデータをswapする。
- 前にデータがないときまで、または`key`が前のデータより大きい時まで繰り返す。

<div class="divider"></div>

## 選択ソートのコード

```rb
def insertion_sort(arr)
  n = arr.size

  # 2番目から始め
  for i in (1 ... n)
    index = i
    key = arr[i]

    while index > 0 and key < arr[index-1]
      # データの位置をswapする
      arr[index] = arr[index - 1]
      index -= 1
    end

    # データを挿入する
    arr[index] = key
  end
end

arr = [*1 ... 100].shuffle

print arr
puts

insertion_sort(arr)

print arr
puts
```

<div class="divider"></div>

## 時間複雑度
#### best case
- 比較回数: `n-1`回
- 交換回数: `0`回
- **T(n) = O(n)**

#### worst case
- 比較回数: `n*(n-1)/2`回
- 交換回数: `n*(n-1)/2`回
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [CS3 Data Structures & Algorithms](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/InsertionSort.html)
- [삽입 정렬(insertion sort)이란](https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html)
