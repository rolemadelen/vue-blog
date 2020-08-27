
<center>
<img src="assets/algorithm/graph/dfsbfs.gif"> <br>
<span style="font-size:11px"><i>gif source: <a href="https://twpower.github.io/73-how-to-implement-dfs-and-bfs-in-cpp">TWpower's Tech Blog</a></i></span>
</center>

<div class="divider"></div>

## 넓이 우선 탐색 (BFS)
넓이 우선 탐색 (BFS) 알고리즘은 가장 깊이 탐색하는 [DFS](./ko-algorithm-graph-dfs)와는 반대로 현재 정점에 연결된 가까운 노드들 부터
탐색합니다. 첫 번째 정점과 연결되 있는 노드가 3개 있다면, 이 노드들을 먼저 전부 탐색합니다.

BFS는 큐를 사용해서 구현할 수 있습니다.

<div class="divider"></div>

## 구현

```cpp
#define vi vector<int>
#define vb vector<bool>

void bfs(vector<vi > &g, vb &visited, int start) 
{
  queue<vi > q;

  q.push(g[start]);
  visited[start] = true;

  while(!q.empty()) 
  {
    vi neighbors = q.front();
    q.pop();

    for(int i=0; i<neighbors.size(); ++i) 
    {
      if(visited[neighbors[i]]==false)  
      {
        visited[neighbors[i]] = true;
        q.push(g[neighbors[i]]);
      }
    }
  }
}
```
