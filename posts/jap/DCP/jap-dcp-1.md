## Daily Coding Problem 1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

<div class="divider"></div>

LeeCodeに[Two Sum](https://leetcode.com/problems/two-sum/submissions/)という問題があります。
この問題と全く同じなので、自分のコードが正しいかどうかLeetCodeで試してみましょう。

## Solution

### Bruteforce

リストの要素を一個づつ選んでほかの全ての要素と比較します。その二つの値の和がターゲット`k`だったら`true`を、違ったら`fail`を返します。
このアルゴリズムの時間複雑度はO(n^2)になります。　

```cpp
bool bruteforce(vector<int> list, int k)
{
  const int SIZE = list.size();
  
  // O(n)
  for (int i=0; i<SIZE-1; ++i)
  {
    // O(n)
    for(int j=i+1; j<SIZE; ++j) 
    {
      cout << list[i] << ' ' << list[j] << endl;
      if (list[i] + list[j] == k)
        return true;
    }
  }
  return false;
}
```

### ハッシュテーブル（Two pass）

C++の`unordered_map`はハッシュテーブルでデータを保存します。なので、 挿入と探索の時間複雑度はO(1)とaveraged O(1)になるので、このアルゴリズムの時間複雑度はO(n)になります。

```cpp
bool hashtable(vector<int> nums, int target)
{
  unordered_map<int, int> umap; 

  // O(n)
  for (int i=0; i<nums.size(); ++i)
  {
    umap.insert({nums[i], i});
  }

  // O(n)
  for (int i=0; i<nums.size(); ++i)
  {
    // O(1) average
    auto search = umap.find(target - nums[i]);
    if (search != umap.end() && i != search->second) 
      return true;
  }

  return false;
}
```

### ハッシュテーブル（One pass）

このアルゴリズムもハッシュテーブルを使うので時間複雑度は上のと同じでO(n)になります。ただ、二回巡回しなず、一回で問題の答えを出します。
この問題のボーナス（<i>can you do this in one pass?</i>）に該当する部分です。

#### C++コード

```cpp 
bool onepass(vector<int> nums, int target)
{
  unordered_map<int, int> umap;
  const int SIZE = nums.size();

  // O(n)
  for (int i=0; i<SIZE; ++i)
  {
    // averaged O(1)
    auto search = umap.find(target - nums[i]);
    if (search != umap.end())
      return true;
    else 
      umap.insert({nums[i], i});
  }

  return false;
}
```

#### Rubyコード

```rb
def onepass(nums, k)
  hash = Hash.new(0)

  nums.each do |x|
    if hash.has_key? (k-x)
      return true
    else
      hash[x] = k-x
    end
  end

  return false
end

nums = gets.split().map(&:to_i)
k = gets.to_i

puts onepass(nums, k)
```