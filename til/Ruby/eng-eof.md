
## Reading inputs until EOF

아래와 같이 입력이 몇 번 들어올지 알 수 없는 경우 EOF를 사용할 수 있다.

```
1 1
2 2
5 6
```

```rb
while line = gets
    a, b = line.split.map(&:to_i)
    puts a+b
end
```

`STDIN`을 사용하는 방법도 있다.
```rb
STDIN.each_line od |line|
    a, b = line.split.map(&:to_i)
    puts a+b
end
```

`STDIN.read`도 있는데 이는 파일 전체를 읽어 메모리에 올려두기 때문에 파일이 클 경우에는 
안쓰는 것이 좋다고 한다.
