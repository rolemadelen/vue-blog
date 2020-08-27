# AtCoder Beginner Contest 173

| Tasks | Time Limit | Memory Limit |
|:-:|:-:|:-:|
|[A](#A)|2 sec|1024 MB|
|[B](#B)|2 sec|1024 MB|

<div class="divider"></div>

## A - Payment <a id="A"></a>
```cpp
int main(){
  ios; cfs(15);
  INT(n);
  int x = n/1000;
  if(n%1000>0) cout<<((x+1)*1000)-n<<endl;
  else cout << 0 << endl;
  ret;
}
```

## B - Judge Status Summary <a id="B"></a>
```cpp
int main(){
  ios; cfs(15);
  INT(n);
  VEC(string) v(n);
  rep(i, n) {
    string a;
    cin >> a;
    v[i]=a;
  }

  int a,b,c,d;
  a=b=c=d=0;

  for(string s : v) {
    if(s == "AC") ++a;
    else if(s == "WA") ++b;
    else if(s=="TLE") ++c;
    else if(s=="RE") ++d;
  }

  cout <<"AC x " << a << endl;
  cout <<"WA x " << b << endl;
  cout <<"TLE x " << c << endl;
  cout <<"RE x " << d << endl;
  ret;
}
```
