## Daily Coding Problem 11
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string `de` and the set of strings `[dog, deer, deal]`, return `[deer, deal]`.

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

## Solution
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<string> autocomplete(string query, vector<string> &strs)
{
  vector<string> ret;
  const int querySize = query.size();

  for(string s : strs)
  {
    if(querySize > s.size()) 
    {
      continue;
    }

    bool skip = false;
    for(int i=0; i<querySize; ++i)
    {
      if(query[i] != s[i]) 
      {
        skip = true;
        break;
      }
    }

    if(!skip)
    {
      ret.push_back(s);
    }
  }

  return ret;
}

int main(void)
{
  string query = "de";
  vector<string> strs;
  strs.push_back("dog");
  strs.push_back("deer");
  strs.push_back("deal");

  vector<string> results = autocomplete(query, strs);

  for(string s : results)
  {
    cout << s << endl;
  }
  return 0;
}
```

```rb
def autocomplete(s, strs)
  hash = Hash.new
  strs.each do |str|
    if str.include? s
      hash[str] = true
    else
      hash[str] = false
    end
  end

  ret = []

  hash.each do |k, v|
    if v == true
      ret << k
    end
  end

  ret
end

s = "de"
strs = ["dog", "deer", "deal"]

p autocomplete(s, strs)
```