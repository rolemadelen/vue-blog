<div class="update">
last updated 10.31.20
</div>

## 배열(array)이란?

배열은 같은 타입의 변수들로 이루어진 집합체를 의미한다. 예를들면 문자 배열에는 문자만, 숫자 배열에는 숫자만 저장이 가능하다.

<div style="text-align: center;">
  <img src="assets/data-structure/array/array1d-1.png" alt="array 1d image">
</div>

배열 속 각각의 데이터를 원소(element)라고 부르며 원소들의 위치를 색인(인덱스; index)이라고 한다. 
배열의 인덱스는 대부분의 프로그래밍 언어에서 0번부터 시작하며, 음수는 사용되지 않는다 (사용 가능한 언어도 있다).

### 배열의 종류 
- 1차원 배열 (위 그림과 같은 형태)
- 2차원 배열: 배열의 배열 (데카르트 좌표계 - cartesian plane - 의 구조를 생각하면 된다)
- 3차원 배열: 3x3x3의 루빅 큐브의 구조와 동일
- 4차원 이상도 가능하지만 형태조차 상상하기 어렵고 복잡하기에 보통 2차원 배열이 가장 많이 쓰인다.

## 루비의 배열
루비의 배열도 같은 타입의 변수들로 이루어진 집합체이지만, 여기서 말하는 타입은 바로 개체(Object)이다 (간단히 설명하기 위한 것일 뿐, 실제 구현과는 다를 수 있다). 

조건문/반복문과 같이 로직의 흐름제어와 관련된 것들을 제외한 모든것이 개체인 루비에서 개체 배열이라 하면, 모든 것을 배열에 포함시킬 수 있다는 뜻이 된다.

아래처럼 루비의 배열에는 정수, 실수, 문자열, 불리언, nil, 그리고 배열도 개체이기 때문에 삽입이 가능하다.
<div style="text-align: center;">
  <img src="assets/data-structure/array/array1d-2.png" alt="ruby obj array 1d image">
</div>

아래의 코드를 실행하고 결과를 확인해보면 정말 모든 원소가 개체란 것을 확인할 수 있다.
```rb
arr = [1, 3.2, "hello", true, [1,2,3], nil];

arr.each do |elem|
  puts elem.is_a? Object
end
```

## 배열의 연산

### 배열 생성하기

루비에서는 `[]` 생성자를 사용하여 배열을 만들 수 있다.

```rb
arr = []                    # => []
arr2 = [1, '2', "three"]    # => [1, '2', "three"]
```

직접 `:new` 메소드를 호출하여 배열을 만들수도 있다. 
```rb
arr = Array.new()      # => []
arr = Array.new(3)     # => [nil, nil, nil]
arr = Array.new(3, 0)  # => [0, 0, 0]
```

두 번째 인자를 사용할 때 주의 할 점이 한 가지 있는데, 해당 값으로 초기화된 원소들은 전부 하나의 같은 개체를 가리킨다. 아래의 코드를 보자.
```rb
# 배열의 값을 "hello"로 초기화
arr = Array.new(3, "hello");     # => ["hello", "hello", "hello"]

arr[0].upcase!;   # 첫 번째 'hello'를 대문자로 변환
puts arr          # => ["HELLO", "HELLO", "HELLO"] 
```

모든 원소들이 결국 하나의 같은 개체이기 때문에, 첫 번째 문자열을 대문자로 바꿨을 때 모든 개체의 값이 바뀌게 된다. 
그렇기 때문에 `:new`에서 두 번째 인자의 값으로는 이뮤터블(immutable) 개체(심볼, 숫자, 불리언)를 사용하는 것이 권장된다. 

초기값으로 뮤터블(mutable) 개체를 가진 배열을 생성할 때는 블럭을 사용한다.
```rb
arr = Array.new(3) { "hello" }  # => ["hello", "hello", "hello"]

arr[0].upcase!
puts arr            # => ["HELLO", "hello", "hello"]
```

마지막으로 커널에서 제공하는 [`Array()`](https://ruby-doc.org/core-2.7.0/Kernel.html#method-i-Array)를 사용하여 배열을 생성할 수 있다.
```rb
Array([])            # => []
Array(nil)           # => []
Array([1, 2, 3])     # => [1, 2, 3]
Array(1..5)          # => [1, 2, 3, 4, 5]
Array(1...5)         # => [1, 2, 3, 4]
```

### 배열의 원소 접근하기 (get)

배열의 첫 번째 원소는 1번이 아닌 0번 부터 시작한다는 점을 기억하자.
```rb
arr = [1, 2, 3, 4, 5]

# 첫 번째 원소를 x에 저장
x = arr[0]

# 1이 출력된다
puts x
```

루비에서는 인덱스로 음수도 사용이 가능하다.
마지막 원소의 위치를 기준으로 하며 `[-1]`은 마지막 원소를 가리킨다.
```rb
arr = [1, 2, 3, 4, 5]
arr[0]    # => 1
arr[-1]   # => 5
arr[-2]   # => 4
arr[100]  # => nil
```

`arr[100]`과 같이 존재하지 않는 인덱스에 접근할 때 루비는 `nil`을 반환한다. 만약 범위를 벗어났을 때 오류를 일으키도록 하고 싶다면 `:fetch`라는 메소드를 사용하면 된다.

```rb
arr = [1, 2, 3, 4, 5]
arr.fetch(0)            # => 1
arr.fetch(100)          # => IndexError (index 100 outside of array bounds: -5...5)
arr.fetch(100, 'out!')  # => "out!"
```

### 배열에 자료 추가하기 (insert)

배열 끝에 자료를 추가하는 방법에는 `:push`와 `:<<`가 있다.

```rb
arr = [1]
arr.push(2)  # => [1, 2]
arr << 3     # => [1, 2, 3]
```

반대로 처음에 추가할 때는 `:unshift`를 사용한다.
```rb
arr = [3]
arr.unshift(2)  # => [2, 3]
arr.unshift(1)  # => [1, 2, 3]
``` 

특정 위치에 자료를 추가하고 싶을때는 `:insert`를 사용한다.
```rb
arr = ['one', 'two', 'four', 'five']
arr.insert(2, 'three')   # => ["one", "two", "three", "four", "five"]
```

### 배열의 원소 삭제하기 (delete)

마지막 원소를 삭제할때는 `:pop`, 첫 번째 원소를 삭제할때는 `:shift` 메소드를 사용한다.

```rb
arr = [1, 2, 3, 4, 5]
a.pop    # => 5
arr      # => [1, 2, 3, 4]

a.shift  # => 1
arr      # => [2, 3, 4]
```

특정 위치에 있는 원소를 삭제하고 싶을 경우 `:delete_at` 메소드를 사용한다.
```rb
arr = [1, 2, 3, 4, 5]
arr.delete_at(2)    # => 3
arr                 # => [1, 2, 4, 5]
```

반대로 특정 값을 가진 원소를 전부 삭제하고 싶은 경우 `:delete` 메소드를 사용한다.
```rb
arr = [1, 2, 2, 3, 4]
arr.delete(2)  # => 2
arr            # => [1, 3, 4]
```

마지막으로 `:uniq`라는 메소드가 있는데, 이 메소드는 배열에서 중복되는 값들을 삭제한다.
```rb
arr = [1, 2, 2, 3, 3, 3, 4, 5, 5]
arr.uniq  # => [1, 2, 3, 4, 5]
arr       # => [1, 2, 2, 3, 3, 3, 4, 5, 5]

arr.uniq! # => [1, 2, 3, 4, 5]
arr       # => [1, 2, 3, 4, 5] 
```

## 2차원 배열
2차원 배열의 구조와 생성 방법을 간략하게 살펴보자. 

<div style="text-align: center;">
  <img src="assets/data-structure/array/array2d-1.png" alt="array 2d image">
</div>

1차원 배열의 경우 해당 원소에 접근하기 위해 `arr[0]`과 같이 접근했다. 
2차원 배열 역시 같은 방식으로 접근한다. 다만 열(column)과 행(row) 두 개의 인덱스를 사용하다.
위 그림에서 보면 알 수 있지만 배열에서는 `arr[col][row]`이 아닌 `arr[row][col]` 이라는 점 주의하자.

### 2차원 배열 생성하기

<div style="text-align: center;">
  <img src="assets/data-structure/array/array2d-2.png" alt="array 2d image" style="margin: 0;">
</div>

1. 하드코딩으로 생성
```rb
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
arr[0]     # => [1, 2, 3]
arr[1]     # => [4, 5, 6]
arr[2]     # => [7, 8, 9]
arr[0][1]  # => 2
arr[2][2]  # => 9
```

2. `:new` 메소드를 사용

`:new`를 사용해 1차원 배열을 만들고 각 원소에 부분 배열을 삽입한다.

```rb
arr = Array.new(3)  # => [nil, nil, nil]
arr[0] = [1, 2, 3]  # => [[1,2,3], nil, nil]
arr[1] = [4, 5, 6]  # => [[1,2,3], [4,5,6], nil]
arr[2] = [7, 8, 9]  # => [[1,2,3], [4,5,6], [7,8,9]]
```

처음부터 3x3의 빈 배열을 만들수도 있다.
```rb
arr = Array.new(3) { [] }  # => [[], [], []]
arr[0] << 1   # => [[1], [], []]
arr[1] << 4   # => [[1], [4], []]
arr[2] << 7   # => [[1], [4], [7]]
```

루비에서 다차원 배열이란 부분 배열이 원소로 있는 1차원 배열과 같다. 그렇기 때문에 1차원 배열에서 사용한 메소드들(접근, 삽입, 삭제, 등)을 다차원 배열에서도 동일하게 사용이 가능하다.