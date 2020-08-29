
## 출력 (STDOUT)

`puts`을 이용 STDOUT에 출력한다.


두 가지 방법으로 문자열을 출력할 수 있다.
```rb
puts "Hello, World!"
puts 'Hello, World!'
```

더하기(`+`) 연산자를 이용 문자열을 합치거나 같이 출력할 수 있다.

```rb
last_name = "Eu"
first_name = "Jione"

puts last_name + " " + first_name

# 출력 결과
Eu Jione
```

### String Interpolation
문자열 중간에 변수를 삽입하는 법

```rb
name = "jioneeu"
puts "Hello, #{name}!"

# 출력 결과
"Hello, jioneeu!"
```

### 그 외
- `print`를 사용하면 `puts`처럼 끝에 개행문자를 출력하지 않는다.
- `putc` -> 문자 하나를 화면에 출력한다 

## 입력 (STDIN)

`gets`를 이용 STDIN에서 입력받는다.

```rb
name = gets
puts "Name: #{name}"

# 입력
jioneeu

# 출력 결과
Name: jioneeu
```

`gets`로 받은 값은 언제나 문자열의 값을 가지고 있다.
숫자를 입력받을 때는 `to_i`라는 메소드를 이용해 문자열을 숫자로 변환해주어야 한다.

```rb
num = gets # 숫자 5를 입력하면 a에는 문자열 "5"가 저장된다

num = gets.to_i # 숫자 5가 저장된다
```

### 타입 변환
- to\_i(base=10) -> integer
- to\_f -> float
- to\_s -> string
- to\_str -> string

### 한 줄에 숫자 여러개 입력받기
```rb
a, b = gets.split.map(&:to_i)
puts a
puts b
```
