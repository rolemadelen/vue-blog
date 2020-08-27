
<center>
<img src="assets/algorithm/graph/dfsbfs.gif"> <br>
<span style="font-size:11px"><i>gif source: <a href="https://twpower.github.io/73-how-to-implement-dfs-and-bfs-in-cpp">TWpower's Tech Blog</a></i></span>
</center>

<div class="divider"></div>

## Depth First Search
 
깊이 우선 탐색 (DFS)는 트리와 그래프 자료구조에서 탐색 또는 순회를 할 때 사용되는 알고리즘입니다.
트리의 경우 위 그림과 같이 루트 (root) 노드에서 시작하여 가장 깊이 들어가면서 탐색을 하는 알고리즘 입니다. 
그래프의 경우 특정 노드를 시작 정점으로 정한 후, 그 정점과 연결 된 부분을 계속해서 탐색하게 됩니다.
한 정점이 여러 노드와 연결 되어 있을 수 있기 때문에, 현 노드를 방문했는지 확인하는 배열, 벡터, 등등을
사용하게 됩니다.

DFS은 스택을 사용해서 구현할 수 있습니다. 재귀의 동작방식이 스택과 동일하기 때문에, 재귀로도 구현이 가능합니다.

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
