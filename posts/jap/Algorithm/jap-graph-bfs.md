
<center>
<img src="assets/algorithm/graph/dfsbfs.gif" alt="bfs/dfs gif"> <br>
<span style="font-size:11px"><i>gif source: <a href="https://twpower.github.io/73-how-to-implement-dfs-and-bfs-in-cpp">TWpower's Tech Blog</a></i></span>
</center>

<div class="divider"></div>

### 幅優先探索（Breadth First Search)
 
幅優先探索（BFS）アルゴリズムは<router-link to="./jap-graph-dfs">DFS</router-link>とは逆に元ノードから繋いでる、近隣のノードたちから探索をします。例えば、最初のノードと繋いでるノードが３つあったら、この３つをまず探索します。

BFSはqueueを使って実装できます。

<div class="divider"></div>

### 実装
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
