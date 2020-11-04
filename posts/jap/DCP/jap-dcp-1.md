## Daily Coding Problem 1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

## Solution

### Bruteforce
```cpp
bool bruteforce(vector<int> list, int k)
{
  const int SIZE = list.size();
  
  for (int i=0; i<SIZE-1; ++i)
  {
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

### Onepass
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