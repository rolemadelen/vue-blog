# AtCoder Beginner Contest 168

| Tasks | Time Limit | Memory Limit |
|:-:|:-:|:-:|
|[A](#A)|2 sec|1024 MB|
|[B](#B)|2 sec|1024 MB|
|[C](#C)|2 sec|1024 MB|

<div class="divider"></div>

## A - ∴ (Therefore) <a id="A"></a>
```cpp
#include <stdio.h>
int main()
{
  int n;
  scanf("%d", &n);
  switch(n%10) 
  {
    case 2:
    case 4:
    case 5:
    case 7:
    case 9:
      printf("hon\n");
      break;
    case 0:
    case 1:
    case 6:
    case 8:
      printf("pon\n");
      break;
    case 3:
      printf("bon\n");
  }

  return 0;
}
```

## B - ... (Triple Dots) <a id="B"></a>

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int k;
  string s;

  cin >> k;
  cin >> s;

  if (s.length() <= k) cout << s;
  else {
    s[k] = '\0';
    cout << s.c_str() << "...\n";
  }

  return 0;
}
```

## C -  : (Colon) <a id="C"></a>
```cpp
#include <bits/stdc++.h>
#define rep(i,n) for (int i=0; i<(n); ++i)

using namespace std;
using ll = long long;
using P = pair<int,int>;

const double PI = acos(-1);

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int a, b, h, m;
  cin >> a >> b >> h >> m;
  double th = double(h*60+m)/720 * 2*PI;
  double tm = double(m)/60 * 2*PI;
  double xh = a*cos(th), yh = a*sin(th);
  double xm = b*cos(tm), ym = b*sin(tm);
  double dx = xh-xm, dy = yh-ym;
  double ans = sqrt(dx*dx + dy*dy);
  printf("%.10f\n", ans);

  return 0;
}
```
