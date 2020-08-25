## ABC 153

| Tasks | Time Limit | Memory Limit |
|:-:|:-:|:-:|
|[A](#A)|2 sec|1024 MB|
|[B](#B)|2 sec|1024 MB|
|[C](#C)|2 sec|1024 MB|
|[D](#D)|2 sec|1024 MB|
|[E](#E)|2 sec|1024 MB|
|F|2 sec|1024 MB|

<div class="divider"></div>

## A. Serval vs Monster<a id="A"></a>
The health of the monster is `H` and Serval can dealt `A` damage.
How many attacks will Serval need to kill the monster? Do the division.

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

Can Raccoon kill a monster using `N` special moves where each move can only be used once?
Given the health of the monster, `H`, we can loop through Raccoon's special moves and 
check whether the monster's health is `<= 0`.

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
Given that Fennec can kill `K` out of `N` monsters right away with its special move, 
how many attacks will Fennec need to kill the rest?

We first sort monsters based on its health and ignore (or remove) top `K` monsters.
Now we sum up `N-K` monsters health and that becomes Fennec's minimum number of attacks.

The time complexity is `O(NlogN)`.

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

Find the maximum number of nodes in a binary tree with a height `h`.

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

- `1 <= h <= H`: HP
- `A[i]`: damage of `i`<sup>th</sup> spell
- `B[i]`: MP used by `i`<sup>th</sup> spell
- `dp[h]`: minimum MP used to kill a monster with HP `h`

Initialize `dp[0] = 0` and the rest with `INF`. 
Then`dp[h]` becomes `min(dp[h], dp[max(h - A[i], 0)] + B[i])`.

The time complexity is `(NH)`.

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