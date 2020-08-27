# AtCoder Beginner Contest 161

| 問題 | 実行時間制限 | メモリ制限 |
|:-:|:-:|:-:|
|[A](#A)|2 秒|1024 MB|
|[B](#B)|2 秒|1024 MB|
|[C](#C)|2 秒|1024 MB|

<div class="divider"></div>

## A - ABC Swap <a id="A"></a>
```cpp
int main(x, y, z)
{
    scanf("%d%d%d", &x, &y, &z);
    printf("%d %d %d\n", z, x, y);
    return 0;
}
```

## B - Popular vote <a id="B"></a>
```cpp
#include <stdio.h>
#include <stdlib.h>

static int v[1001];
static inline int comparator(const void *a, const void *b)
{
    return ( *(int*)a - *(int*)b );
}

int main(int n, int m, float t)
{
    t=0;
    scanf("%d%d", &n, &m);
    for(int i=0;i<n;++i)
    {
        scanf("%d", &v[i]);
        t+=v[i];
    }

    qsort(v, n, sizeof(int), comparator);

    t /= (4*m);
    printf("%s\n", (v[n-m]>=t) ? "Yes" : "No");
    return 0;
}
```

## C - Replacing Integer <a id="C"></a>
```cpp
#include <stdio.h>

int main(long long n, long long k, long long x)
{
    scanf("%lld%lld",&n,&k);
    n = n%k;

    x = (n-k)>=0 ? n-k : (n-k)*-1;
    printf("%lld\n", n>x?x:n);
    return 0;
}
```
