# AtCoder Beginner Contest 167

| 問題 | 実行時間制限 | メモリ制限 |
|:-:|:-:|:-:|
|[A](#A)|2 秒|1024 MB|
|[B](#B)|2 秒|1024 MB|

<div class="divider"></div>

## A - Registration <a id="A"></a>
```cpp
int main(){
  ios; cfs(15);
  STR(s);
  STR(t); 
  string ans="Yes";
  rep(i, s.size()) {
    if(s[i]!=t[i]) {
      ans = "No";
      break;
    }
  }
  cout<<ans<<endl;
  ret;
}
```

## B - Easy Linear Programming <a id="B"></a>
```cpp
int main(){
  ios; cfs(15);
  LL(a,b,c,k);
  ll t=(k<=a)?k:a;
  k-=(a+b);
  if(k>0) t-=k;
  cout<<t<<endl;
  ret;
}
```
