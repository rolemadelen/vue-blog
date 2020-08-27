
### BOJ [No.2167](https://www.acmicpc.net/problem/2167)

- Dynamic Programming

2차원 배열이 주어졌을 때 (i, j) 위치부터 (x, y) 위치까지에 저장되어 있는 수들의 합을 구하는 프로그램을 작성하시오. 배열의 (i, j) 위치는 i행 j열을 나타낸다.


```rb
n, m = gets.split.map(&:to_i)
dp = Array.new(n+1){Array.new(m+1,0)}
1.upto(n) do |i|
  gets.split.map(&:to_i).to_a.each_with_index do |x, j|
    dp[i][j+1] = x + dp[i-1][j+1] + dp[i][j] - dp[i-1][j]
  end
end

k = gets.to_i
1.upto(k) do 
  i,j,x,y = gets.split.map(&:to_i)
  puts dp[x][y] - dp[i-1][y] - dp[x][j-1] + dp[i-1][j-1]
end
```

### 풀이 

(i,j)부터 (x,y)까지의 의미를 잘못 이해하는 분들이 있다.

(1,2)부터 (2,3)의 합을 예로들면, 아래 표에서 빨간 부분들(2+3+5+6)을 의미한다. `[2][1]`은 포함하지 않는다.

<div style="text-align: center;">
  <img src="assets/ps/2167/1.png" alt="2d array">
</div>

우선 예로, 주어진 3x3 배열에서 (2,2)부터 (3,3)까지의 합을 구한다고 가정한다. 첫 번째 원소부터 차례대로 1, 2, 3, ..., 9의 값을 가진다.

DP를 사용하는 문제로 (굳이 안써도 된다) 우선 배열을 선언하고 `[i][j]`의 값을 구한다. `[i][j]`의 값은 `[1][1]` 부터 `[i][j]`까지의 합이다.

식은 `[i][j] = 현재 위치의 값 + [i-1][j] + [i][j-1] - [i-1][j-1]`가 된다.

```rb
# i 는 1에서 시작하고 j는 0에서 시작하기 때문에 달라보이지만, 위 식과 같다.
dp[i][j+1] = x + dp[i-1][j+1] + dp[i][j] - dp[i-1][j]
```

<div style="text-align: center;">
  <img src="assets/ps/2167/2.png" alt="2d array">
</div>

(x,y)인 (3,3)은 (i,j)부터의 총합이다. 여기서 포함하지 않는 회색 부분들만 빼면 된다. 
우선 첫 번째 행의 합(`[1][3]`)과 첫 번째 열의 합(`[3][1]`)을 총합에서 뺀다. 이 과정에서 `[1][1]`을 두 번 차감했으므로 값을 한 번 더해준다.
```rb
  # (i,j) = (2,2)
  # (x,y) = (3,3)
  i,j,x,y = gets.split.map(&:to_i)
  puts dp[x][y] - dp[i-1][y] - dp[x][j-1] + dp[i-1][j-1]
```
