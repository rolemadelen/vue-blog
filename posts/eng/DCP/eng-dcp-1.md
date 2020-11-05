## Daily Coding Problem 1

This problem was recently asked by Google.

Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return true since `10 + 7` is `17`.

Bonus: Can you do this in one pass?

<div class="divider"></div>

There's a problem called [Two Sum](https://leetcode.com/problems/two-sum/submissions/) in LeetCode which is 
exactly same as this one. Check if you can solve the problem :)

## Solution

### Bruteforce

Using nested for-loops, iterate through the list and check if two elements sum up to the target `k`.
The time complexity for this approach is O(n^2).

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

### Hash Table (Two pass)

C++ `unordered_map` is a hash table and its insert and search time complexity is O(1) and average O(1) respectively.
So, the time complexity using a hash table is O(2n) which is O(n) not counting the coefficient.

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
    // average O(1)
    auto search = umap.find(target - nums[i]);
    if (search != umap.end() && i != search->second) 
      return true;
  }

  return false;
}
```

### Hash Table (One pass)

This one also uses hash table like the one above (two pass) and its time complexity is also O(n).
This algorithm, however, iterates the list only once. Hence, that is why it's called **one pass**.

```cpp 
// C++ Solution
bool onepass(vector<int> nums, int target)
{
  unordered_map<int, int> umap;
  const int SIZE = nums.size();

  // O(n)
  for (int i=0; i<SIZE; ++i)
  {
    // average O(1)
    auto search = umap.find(target - nums[i]);
    if (search != umap.end())
      return true;
    else 
      umap.insert({nums[i], i});
  }

  return false;
}
```

```rb
# Ruby solution
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