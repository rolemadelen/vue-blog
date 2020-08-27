
<center>
<img src="assets/algorithm/graph/dfsbfs.gif"> <br>
<span style="font-size:11px"><i>gif source: <a href="https://twpower.github.io/73-how-to-implement-dfs-and-bfs-in-cpp">TWpower's Tech Blog</a></i></span>
</center>

<div class="divider"></div>

## Depth First Search

DFS is an algorithm for searching (traversing) tree or graph. This algorithm starts at a root node for tree 
or any specified node (starting node) for a graph and explores as far as possible along each 
branch (or neighbors) before [backtracking](https://en.wikipedia.org/wiki/Backtracking).

DFS(Depth First Search) can be implemented using either a recursion or stack.

<div class="divider"></div>

### Recursion 
```cpp
#define vi vector<int>
#define vb vector<bool>

void dfs(vector<vi > &graph, vb &visited, int start) 
{
  visited[start] = true;
  vi neighbors = graph[start];

  for(int i=0; i<neighbors.size(); ++i) 
  {
    if(visited[neighbors[i]] == false) 
    {
      dfs(graph, visited, neighbors[i]);
    }
  }
}
```

### Stack
```cpp
#define vi vector<int>
#define vb vector<bool>

void dfs(vector<vi > &graph, vb &visited, int start) 
{
  visited[start] = true;
  stack<int> s;
  s.push(start);

  while(!s.empty()) 
  {
    int curr = s.top();
    s.pop();
    vi = graph[curr];

    for(int v : n) 
    {
      if(visited[v] == false) 
      {
        visited[v] = true;
        s.push(curr);
        s.push(v);
        break;
      }
    }
  }
}
```
