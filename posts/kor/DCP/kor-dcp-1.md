## Daily Coding Problem 1

This problem was recently asked by Google.

Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return true since `10 + 7` is `17`.

Bonus: Can you do this in one pass?

<div class="divider"></div>

이 문제는 LeetCode에 [Two Sum](https://leetcode.com/problems/two-sum/submissions/)이라는 문제와 동일한 문제입니다.
본인의 코드가 제대로 작동하는지 확인해보세요.

## Solution

### 브루트포스

이중반복문을 사용하여 리스트를 순회하면서 각 원소와 다른 모든 원소들의 합을 구한다. 이 합이 타겟 `k`와 일치하면 참을 반환하고 일치하는 값이 없다면 거짓을 반환한다.
각 원소를 리스트의 모든 원소와 비교하기 때문에 최종 시간 복잡도는 O(n^2)가 된다.

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

### 해시테이블 (Two pass)

C++의 `map`은 자료를 balanced BST에 저장하는 반면 `unordered_map`은 해시 테이블에 자료를 저장한다.

그렇기 때문에 `map`을 사용하면 삽입과 검색의 시간 복잡도가 O(log n)이 되고, `unordered_map`을 사용할 경우 삽입과 검색의 평균 시간복잡도는 O(1)이 된다.
여기서는 해시테이블을 사용했으므로 최종 시간복잡도는 O(n)이 된다.

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
    // O(1) amortized
    auto search = umap.find(target - nums[i]);
    if (search != umap.end() && i != search->second) 
      return true;
  }

  return false;
}
```

### 해시테이블 (One pass)

이 알고리즘 역시 위와 같은 O(n)의 시간복잡도를 가진다. 다만 두 번의 순회(반복문 두 번 사용)했던 것과 달리, 단 한 번의 순회로 문제를 해결한다.
이 번 문제의 보너스 부분(<i>can you do this in one pass?</i>)에 해당하는 부분이다.

#### C++ Solution

```cpp 
bool onepass(vector<int> nums, int target)
{
  unordered_map<int, int> umap;
  const int SIZE = nums.size();

  // O(n)
  for (int i=0; i<SIZE; ++i)
  {
    // amortized O(1)
    auto search = umap.find(target - nums[i]);
    if (search != umap.end())
      return true;
    else 
      umap.insert({nums[i], i});
  }

  return false;
}
```

#### Ruby Solution

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