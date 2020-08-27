# AtCoder Beginner Contest 162

| 問題 | 実行時間制限 | メモリ制限 |
|:-:|:-:|:-:|
|[A](#A)|2 秒|1024 MB|
|[B](#B)|2 秒|1024 MB|
|[C](#C)|2 秒|1024 MB|

<div class="divider"></div>

## A - Lucky 7 <a id="A"></a>
```rb
n = gets
puts "#{(n.include? '7') ? 'Yes' : 'No'}"
```

## B - FizzBuzz Sum <a id="B"></a>
```rb
n = gets.to_i
sum = 0

for i in 1..n
    if (i%3!=0 && i%5 != 0)
        sum += i
    end
end

puts sum
```

## C - Sum of gcd of Tuples (Easy) <a id="C"></a>
```rb
def gcd(a, b)
   if b == 0
      return a
   else
      return gcd(b, a%b);
   end 
end

x = Array.new(201) {Array.new(201)}
k = gets.to_i
sum = 0

1.upto(200) do |a|
    a.upto(200) do |b|
        x[a][b] = gcd(a,b)
        x[b][a] = gcd(a,b)
    end
end

1.upto(k) do |a|
    1.upto(k) do |b|
        1.upto(k) do |c|
            sum += gcd(x[a][b], x[b][c])
        end
    end
end

puts sum
```
