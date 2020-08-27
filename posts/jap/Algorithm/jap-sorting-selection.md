
## 選択ソート
- データを一個ずつ比較しながら位置を捜す[挿入ソート](./ja-algorithm-sorting-insertion)とは違う。
- 入れる位置はもう決めて、そこに来るデータだけを捜す。

<div class="divider"></div>

## アルゴリズム要約
- `A`は配列だ。
- 一番小さいデータを見つけて`A[0]`に入れる。
  + 2番目で小さいデータを`A[1]`に入れる。
  + `i`番目に小さいデータを`A[i]`に入れる
- `n`回繰り返すと、最小`n`個のデータが整列される。

<div class="divider"></div>

## 選択ソートのコード

```rb
def selection_sort(arr)
  n = arr.size

  for i in (0 ... n - 1)
    min = i

    # i番目に小さいデータを捜す
    for j in (i+1 ... n)
      if arr[j] < arr[min]
        min = j
      end
    end

    # データを配列のi番目に入れる
    arr[i], arr[min] = arr[min], arr[i]
  end
end

arr = [*1 ... 100].shuffle

print arr
puts

selection_sort(arr)

print arr
puts
```

<div class="divider"></div>

## 時間複雑度

#### best case
- 比較回数: `n*(n-1)/2`回
- 交換回数: `0`回
- <b>T(n) = O(n<sup>2</sup>)</b>

#### worst case
- 比較回数: `n*(n-1)/2`回
- 交換回数: `n-1`回
- <b>T(n) = O(n<sup>2</sup>)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
