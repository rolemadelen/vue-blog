---
layout: post
title: "マージソート「Merge Sort」とは"
ref: algorithm-sort-merge
date: 2020-06-26 05:00:00 +0900
published: true
categories:
 - "Algorithm"
lang: ja
---

<div class="updated">
<br>
2020-07-05: 記事の構造変更＆翻訳完了<br>
2020-07-10: Cコード削除;Rubyコード追加;png追加
</div>

## マージソート

マージソート「Merge Sort」は分割統治アルゴリズムと呼ばれる。

**分割統治**「Divide and Conquer」は与えられた問題を1個以上の小問題たちに分割して解決した後、
本来の問題を統治（解決）する方法だ。 

「分割統治」を段階に分けると下記のとおりである。
1. 与えられた問題を1個以上の小問題たちで分割「**divide**」する。
2. 小問題たちを統治「**conquer**」する。<br>
もっと分割できる場合は再帰的に分割する。
3. 解決した小問題たちをマージ「**merge**」して本来問題の答えを求める。

分割統治の**長所**
- 難しい問題を小問題に分割して解決するのができる。
  + 例）ハノイの塔
- メモリキャッシュを効率的に使う。
  + 分割した小問題が統治できるように簡単になったら相対的に遅いメインメモリに接近せず、キャッシュだけで解決できる。

分割統治の**短所**
- 分割統治は再帰を使うけど、再帰は遅い。
- 再帰する過程でスタックメモリが積もって、メモリの使用量が増える。

<div class="divider"></div>

## マージソートアルゴリズム要約

分割統治を使って整列される過程を確認してみよう。

1. 与えられた配列を部分配列に分割「**divide**」する。
2. ただ1個の要素が残るまで再帰的に分割する。<img style="text-align: center" src="assets/images/algorithm/sorting/merge1.png">
3. 部分配列たちをマージ「**merge**」する。<img style="text-align: center" src="assets/images/algorithm/sorting/merge2.png">

<div class="divider"></div>

## マージソートのコード
```rb
def merge(arr, left, mid, right)
  sorted_arr = [0]*right
  p = left
  q = mid+1
  k = left  # sorted_arrのインデックス

  # リストをマージする過程
  while (p <= mid and q <= right)
    if arr[p] < arr[q]
      sorted_arr[k] = arr[p];
      p += 1
    else
      sorted_arr[k] = arr[q]
      q += 1
    end
    k += 1
  end

  # 左のリストに残っているデータすべてをコピーする
  while p <= mid
    sorted_arr[k] = arr[p];
    p += 1
    k += 1
  end

  # 整列終わったリストを新しい配列にコピーする
  for i in (left...k) do
    arr[i] = sorted_arr[i]
  end

  arr
end

def merge_sort(arr, left, right)
  mid = 0
  if(left < right)
    mid = left + (right-left)/2
    merge_sort(arr, left, mid)
    merge_sort(arr, mid+1, right)
    merge(arr, left, mid, right)
  end
end

arr = [1, 9, 7, 10, 8, 2, 51]
size = arr.size

p arr
 merge_sort(arr, 0, size-1)
p arr
```

<div class="divider"></div>

## 時間複雑度
- 分割過程
  + 配列の中央インデックスの値を経産：**O(1)**
  + 配列を毎回半分する：**O(log n)**
- マージ過程
  + `n`回の要素をマージ：O(n-1) = **O(n)**
- <b>T(n) = O(n*log n)</b>

<div class="divider"></div>

## Reference
- [Introduction to Algorithms 3rd edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844)
- [studytonight - Merge Sort Algorithm](https://www.studytonight.com/data-structures/merge-sort#:~:text=Time%20complexity%20of%20Merge%20Sort,space%20as%20the%20unsorted%20array)
