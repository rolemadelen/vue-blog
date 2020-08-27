# AtCoder Beginner Contest 153

| 문제 | 실행시간 제한 | 메모리 제한 |
|:-:|:-:|:-:|
|[A](#A)|2 sec|1024 MB|
|[B](#B)|2 sec|1024 MB|
|[C](#C)|2 sec|1024 MB|
|[D](#D)|2 sec|1024 MB|
|[E](#E)|2 sec|1024 MB|
|F|2 sec|1024 MB|

<div class="divider"></div>

## A. Serval vs Monster<a id="A"></a>
`A`의 공격력을 가진 세르발이 `H`의 체력을 가진 몬스터를 죽이기 위한 총 공격 횟수를 
구하는 문제로 간단히 나눗셈을 하면 된다. 

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
`N`개의 필살기를 각각 한 번씩만 사용할 수 있는 너구리가 `H`의 체력을 가진 몬스터를 처치할 수 
있는지 알아내는 문제이다. 모든 필살기의 데미지를 합한 후 몬스터의 체력과 비교하면 된다.

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
일단 페넥의 공격력은 `1`이고 `N`마리의 몬스터가 있다. 그리고 페넥은 
`K`마리의 몬스터를 필살기로 바로 죽일 수 있다.  

이 문제는  나머지 `N-K`마리의 몬스터를 처치하기 위한 페넥의 최소 공격횟수를 구하는 문제이다.
 
최소 공격횟수이기 때문에 `K`번의 필살기로 체력이 가장 많은 몬스터를 죽여야 한다.
그러면 자동적으로 남아있는 몬스터들의 체력의 총합이 최소 공격횟수가 된다.

시간 복잡도는 `O(NlogN)`.

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

체력이 `1`이 아니면 이분하는 방식인데 보자마자 포화 이진트리가 떠올랐다.  
높이가 `h`인 포화 이진트리의 노드 수를 구하면 되는 간단한 문제다.

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

- `1 <= h <= H`, 체력
- `A[i]`는 `i`<sup>th</sup> 마법의 데미지
- `B[i]`는 `i`<sup>th</sup> 마법을 사용하는데 필요한 마력수치
- `dp[h]`는 체력이 `h`인 몬스터를 죽이는데 필요한 최소 마력수치

우선 `dp[0] = 0`, 그 외는 `INF`로 초기화한다.   
그 후 `dp[h]`는 `min(dp[h], dp[max(h - A[i], 0)] + B[i])`가 된다.

시간복잡도는 `O(NH)`이다.

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
