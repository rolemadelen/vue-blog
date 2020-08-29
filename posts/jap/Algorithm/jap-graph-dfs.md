
<center>
<img src="assets/algorithm/graph/dfsbfs.gif" alt="dfs and bfs gif"> <br>
<span style="font-size:11px"><i>gif source: <a href="https://twpower.github.io/73-how-to-implement-dfs-and-bfs-in-cpp">TWpower's Tech Blog</a></i></span>
</center>

<div class="divider"></div>

### 深さ優先探索（Depth First Search)
 
深さ優先探索はツリーやグラフデータ構造の探索及び走査をする時使用されるアルゴリズムです。ツリーの場合はrootから始めてもう走査ができないノードまで深く探索をします。グラフの場合はスターとノードを選択して、そのノードと繋いでる一つのノードを最後まで探索します。一つのノードには何個のノードも来れるので、配列とかvectorなどを使ってノードを訪問したとかの状態をセーブします。

DFSはスタック（stack）を使って実装できます。Recursionの動作方式はスタックと同一名ので、recurisonを使って実装するのもできます。

<div class="divider"></div>

### Implementation

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

