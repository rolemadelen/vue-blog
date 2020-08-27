# AtCoder Beginner Contest 172

| Tasks | Time Limit | Memory Limit |
|:-:|:-:|:-:|
|[A](#A)|2 sec|1024 MB|
|[B](#B)|2 sec|1024 MB|
|C|2 sec|1024 MB|

<div class="divider"></div>

## A - Calc <a id="A"></a>
```cpp
int main(){
  ios; cfs(15);
  INT(a);
  cout << a+(a*a)+(a*a*a) << endl;
  ret;
}
```

## B - Minor Change <a id="B"></a>
```cpp
int main(){
  ios; cfs(15);
  STR(a,b);

  const int SIZE = a.size();
  int cnt = 0;
  for(int i=0; i<SIZE; ++i) 
  {
    if(a[i] != b[i])
      ++cnt;
  }
  cout << cnt << endl;
  ret;
}
```

## C - Tsundoku

Wrong Answer... 

Haven't figured it out yet.

```cpp
int main(){
  ios; cfs(15);
  INT(n, m, k);
  vi booka;
  vi bookb;

  rep(i, n) {
    int v = in();
    booka.pb(v);
  }

  rep(i, m) {
    int v = in();
    bookb.pb(v);
  }

  int cnt = 0;
  int i = 0, j = 0;
  while(k > 0) {
    if(i>=n && j>=m) break;
    else if(i>=n) {
      k -= bookb[j];
      ++j;
    }
    else if(j>=m) {
      k -= booka[i];
      ++i;
    }
    else if(booka[i] <= bookb[j]) {
      k -= booka[i];
      ++i;
    } else if (booka[i] > bookb[j]) {
      k -= bookb[j];
      ++j;
    }

    if(k<0) break;
    ++cnt;
  }
  cout << cnt << endl;
  ret;
}
```
