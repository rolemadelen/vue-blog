
## Breadth First Search
Unlike [Depth First Search](en-algorithm-graph-dfs) algorithm, BFS explore all nodes connected to the current 
vertex first. So if 3 nodes are connected to the current vertex, it explores all those nodes first.

BFS can be implemented using a queue.

<div class="divider"></div>

## Implementation

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
