# AtCoder Beginner Contest 169

| Tasks | Time Limit | Memory Limit |
|:-:|:-:|:-:|
|[A](#A)|2 sec|1024 MB|
|[B](#B)|2 sec|1024 MB|
|[C](#C)|2 sec|1024 MB|

<div class="divider"></div>

## A - Multiplication 1 <a id="A"></a>
  ```cpp
int main()
{
  ios;cfs(15);

  INT(a,b);
  cout << a*b << endl;

  ret;
}
```

## B - Multiplication 2 <a id="B"></a>

```cpp
ll a[100010];
int main(){
  ios; cfs(15);

  INT(n);
  rep(i, n) {
    scan(a[i]);
    if(a[i]==0) {
      cout<<"0"<<endl;
      ret;
    }
  }

  ll prod = 1;
  rep(i,n) {
    if(a[i] <= 1000000000000000000/prod) {
      prod *= a[i];
    } else {
      prod = -1;
      break;
    }
  }

  cout << prod << endl;
  ret;
}
```

## C - Multiplication 3 <a id="C"></a>
```cpp
int main(){
  ios; cfs(15);

  LL(a);
  ld b;scan(b);
  ll c = round(b*100);
  cout<<a*c/100<<endl;
  ret;
}   
```
