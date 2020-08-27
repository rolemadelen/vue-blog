# AtCoder Beginner Contest 153

| 問題 | 実行時間制限 | メモリ制限 |
|:-:|:-:|:-:|
|[A](#A)|2 秒|1024 MB|
|[B](#B)|2 秒|1024 MB|
|[C](#C)|2 秒|1024 MB|
|[D](#D)|2 秒|1024 MB|
|[E](#E)|2 秒|1024 MB|
|F|2 秒|1024 MB|

<div class="divider"></div>

## A. Serval vs Monster<a id="A"></a>
モンスターを倒すためセルバルは何回攻撃したらいいのか。

```c
#include <stdio.h>

int main(h, a)
{
    scanf("%d%d", &h, &a);
    printf("%d\n", (h+a-1)/a);
    return 0;
}
```

<div class="divider"></div>

## B. Common Raccoon vs Monster <a id="B"></a>

```c
#include <stdio.h>

int main(h, n, t)
{
    scanf("%d%d", &h, &n);
    while(n-- && h>0)
    {
        scanf("%d", &t);
        h-=t;
    }

    printf("%s\n", (h<=0)?"Yes":"No");

    return 0;
}
```

<div class="divider"></div>

## C. Fennec vs Monster <a id="C"></a>
```c
#include <stdio.h>
#include <stdlib.h>

static int h[200000];

int comparator(const void *a, const void *b)
{
    return ( *(int*)a - *(int*)b );
}

int main(n, k)
{
    scanf("%d%d", &n, &k);

    if(k>=n) 
    {
        printf("0\n");
        return 1;
    }

    for(int i=0; i<n; ++i)
    {
        scanf("%d", &h[i]);
    }

    qsort(h, n, sizeof(int), comparator);

    unsigned long x=0;
    for(int i=n-k-1; i>=0; --i)
    {
        x += h[i];
    }

    printf("%lu\n", x);

    return 0;
}
```

<div class="divider"></div>

## D. Caracal vs Monster <a id="D"></a>

```c
#include <stdio.h>
#include <math.h>

int main(void)
{
    long h;
    scanf("%ld", &h);
    h = log(h) / log(2) + 1;
    printf("%ld\n", ((long)1 << h)-1);
    return 0;
}
```

<div class="divider"></div>

## E. Crested Ibis vs Monster <a id="E"></a>  

```c
#include <stdio.h>

#define rep(i, s, c) for (int i=s; i<c; ++i)
#define min(a, b) ((a)<(b)) ? (a) : (b)
#define max(a, b) ((a)>(b)) ? (a) : (b)
#define INF 0x7fffffff

int A[1000], B[1000];
int dp[10001];

int main(H, N)
{
    scanf("%d %d", &H, &N);
    rep(i, 0, N)
        scanf("%d %d", &A[i], &B[i]);

    rep(h, 1, H+1)
        dp[h] = INF;

    rep(h, 1, H+1)
        rep(n, 0, N)
            dp[h] = min(dp[h], B[n] + dp[max(h-A[n], 0)]);

    printf("%d\n", dp[H]);
    return 0;
}
```

<!--
<div class="divider"></div>
## F. Silver Fox vs Monster <a id="F"></a>
-- 아직 실력 부족 -- 
-->
