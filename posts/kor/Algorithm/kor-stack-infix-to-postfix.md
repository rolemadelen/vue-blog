### 후위표기식(Postfix Notation)

`A*(B+C)`와 같은 식을 **중위표기식**(Infix Notation)이라고 하는데, 이를 `ABC+*`와 같이 연산자들이 오른쪽에 오도록 표기할 수 있다. 이런 표기 방식을 **후위표기식**(Postfix Notation)이라고 한다. 

<router-link to="../DataStructure/kor-stack">스택</router-link>을 처음 배울 때 가장 많이 접하게 되는 문제로써, 스택 자료구조를 사용해 중위표기식을 후위표기식으로 변환할 수 있다.

해당 알고리즘은 아래의 행동을 반복한다.
1. 피연산자 (숫자, 여기서는 A~Z)의 경우 바로 출력한다.
```rb
if (expr[i]>='A' and expr[i]<='Z') 
    print expr[i]
end
```
2. 여는 괄호(`(`)의 경우 스택에 push한다.
```rb
if (expr[i]=='(')
    op << expr[i]
end
```
3. 닫는 괄호(`)`)를 만난 경우, 스택에서 여는 괄호를 만날때까지 pop한다.
```rb
if (expr[i]==')')
    while op.last != '('
        print op.last 
        op.pop
    end
    op.pop
end
```
4. 연산자를 만난 경우, 아래의 조건이 참이면 스택에 push한다. <br>
  i. 스택이 비어있는 경우<br>
  ii. 스택 top이 여는 괄호(`(`)인 경우<br>
  iii. 지금 만난 연산자의 우선순위가, 스택 top의 연산자의 우선순위 보다 높은 경우<br>

5. 4번이 해당하지 않을 경우, 지금 만난 연산자의 우선순위보다 낮거나 같은 연산자들을 스택에서 전부 pop한 후, 지금의 연산자를 push한다.
```rb
if (expr[i]=='+' or expr[i]=='-' or expr[i]=='*' or expr[i]=='/')
    ## 4번
    if (op.size==0 || op.last=='(' || 
       (priority(expr[i]) > priority(op.last)))
     op << expr[i] 
     ## 5번
    else 
        while priority(expr[i]) <= priority(op.last)
            print op.last 
            op.pop 
        end
        op << expr[i]
    end
end
```

6. 5번까지의 연산이 완료된 후, 스택에 남아있는 연산자들을 전부 출력한다.
```rb
op.size.times do
    print op.pop
end
```

`A*(B+C)`를 예로 들어보자.
<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-1.png" alt="Infix to Postfix step 1" /> <br />
</center>

`A`는 피연산자이기 1번 규칙을 따라 곧바로 출력한다.

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-2.png" alt="Infix to Postfix step 2-3" /> <br />
</center>

`*`연산자의 경우 4번 규칙 (스택이 비어있는 경우)에 때라 스택에 push하고, 

`(` 연산자는 2번 규칙을 따라 스택에 push한다.

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-3.png" alt="Infix to Postfix step 3-4" /> <br />
</center>

`B`는 1번 규칙을 따라 곧바로 출력한다.

 `+`의 경우 4번 규칙 중 `스택의 top이 여는 괄호인 경우`에 해당하기 때문에 스택에 push한다.

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-4.png" alt="Infix to Postfix step 5" /> <br />
</center>

`C`또한 피연산자이기 때문에 바로 출력한다.

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-5.png" alt="Infix to Postfix step 6" /> <br />
</center>

닫는 괄호를 만났기 때문에 3번 규칙에 따라 여는 괄호가 나올때까지 스택에서 pop해준다. 

모든 연산자들과 피연산자들의 스캔이 끝났다. 끝으로, 스택이 비어있는지 확인하고 남아있는 것들을 전부 pop해준다.
<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-6.png" alt="Infix to Postfix step 7"/> <br />
</center>

### 중위표기식 → 후위표기식 전체 코드
```rb
def priority(c)
  return 2 if (c=='*' or c=='/')
  return 1 if (c=='+' or c=='-')
  return 0
end

def to_postfix(expr)
  op = []
  size = expr.size
  size.times do |i|
    if (expr[i]>='A' and expr[i]<='Z') 
      print expr[i]
    elsif (expr[i]=='(')
      op << expr[i]
    elsif (expr[i]=='+' or expr[i]=='-' or 
           expr[i]=='*' or expr[i]=='/')
      if (op.size==0 || op.last=='(' 
                     || (priority(expr[i]) > priority(op.last)))
        op << expr[i] 
      else 
        while priority(expr[i]) <= priority(op.last)
          print op.last 
          op.pop 
        end
        op << expr[i]
      end
    elsif (expr[i]==')')
      while op.last != '('
        print op.last 
        op.pop
      end
      op.pop
    end
  end

  op.size.times do
    print op.pop
  end
  puts
end

expr = gets.chomp
to_postfix(expr)
```

### 문제 풀어보기
- <a href="https://www.acmicpc.net/problem/1918" target="_blank">백준 온라인 저지 - 1918번: 후위표기식</a>
- <a href="https://www.acmicpc.net/problem/1935" target="_blank">백준 온라인 저지 - 1935번: 후위표기식 2</a>

<div class="divider"></div>
