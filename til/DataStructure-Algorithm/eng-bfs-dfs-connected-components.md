
## DFS
- Recursion

```cpp
// BOJ problem 1260

void dfs(VEC(vi)& g, vb& visited, int start) {
  visited[start] = true;
  cout<<start<<' ';
  rep(i, g[start].size()) {
    int next = g[start][i];
    if(!visited[next]) dfs(g, visited, next);
  }
}
```

- Stack

```cpp
// BOJ problem 1260

void dfs(VEC(vi) g, int start) {
  vb visited(g.size(), false);
  visited[start]=true;
  stack<int> s;
  s.push(start);
  cout<<start<<' ';

  while(!s.empty()) {
    int curr = s.top();
    s.pop();
    vi n = g[curr];
    for(int v : n) {
      if(visited[v] == false) {
        cout<<v<<' ';
        visited[v] = true;
        s.push(curr);
        s.push(v);
        break;
      }
    }
  }
}
```
<div class="divider"></div>

## BFS

- Queue

```cpp
// BOJ problem 1260

void bfs(VEC(vi) g, int start) {
  vb visited(g.size(), false);
  queue<vi> q;
  q.push(g[start]);
  visited[start] = true;
  cout<<start<<' ';
  while(!q.empty()) {
    vi t = q.front();
    q.pop();

    rep(i, t.size()) {
      if(visited[t[i]]==false)  {
        visited[t[i]] = true;
        cout << t[i] << ' ';
        q.push(g[t[i]]);
      }
    }
  }
}
```

<div class="divider"></div>

## Connected Components
 하나의 그래프에서 a와 b가 연결 되어 있지 않아 마치 여러개의 그래프로 보이는 경우가 있다.
이 경우 두 개의 그래프라고 할 수도 있지만, 두 개의 연결 요소(connected components)를 가진
하나의 그래프라고 할 수도 있다.

[BOJ 11724](https://www.acmicpc.net/problem/11724)가 연결 요소의 개수를 구하는 문제다.

각 정점마다 dfs 또는 bfs를 돌려서 dfs/bfs 돌리는 횟수마다 연결 요소의 값을 1씩 증가시켜주면 된다.

```cpp
int cc = 0;
vb visited(n+1, false);
rep2(i, 1, n+1) {
  if(visited[i] == false) {
    dfs(g, visited, i);
    ++cc;
  }
}
```