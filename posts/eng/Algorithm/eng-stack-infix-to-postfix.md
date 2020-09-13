### Reverse Polish Notation

An expression like `A*(B+C)` is called **infix expression**. We can represent this same expression in different ways like `ABC+*`. This form of expression where operators are on the right or post operands are called **reverse polish notation** or simply **postfix notation**.

Infix/Postfix is a very common problem that you'll encounter when you're learning about <router-link to="../DataStructure/eng-stack">Stack</router-link>. 

Here are general steps of the algorithm.

Scan each character (operands and operators) from the infix expression and ...

1. if it's an operand, print it.
```rb
if (expr[i]>='A' and expr[i]<='Z') 
    print expr[i]
end
```
2. if it's `(`, push it to the operator stack.
```rb
if (expr[i]=='(')
    op << expr[i]
end
```
3. if it's `)`, pop operators from the stack until it pops `(`.
```rb
if (expr[i]==')')
    while op.last != '('
        print op.last 
        op.pop
    end
    op.pop
end
```
4. if it's an operator, push it to the stack if... <br>
  i. a stack is empty,<br>
  ii. top of the stack is `(`,<br>
  iii. scanned operator's priority is higher than the operator on top of the stack.<br>

5. if rule #4 is not true, pop the stack until scanned operator's priority is less than or equal to the stack's top operator's priority. And then, push the scanned operator to the stack.
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

6. Finally, empty out the stack.
```rb
op.size.times do
    print op.pop
end
```

For example, let say we have `A*(B+C)`.
<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-1.png" alt="Infix to Postfix step 1" /> <br />
</center>

`A` is an operand. Follow the rule #1 and print it.

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-2.png" alt="Infix to Postfix step 2-3" /> <br />
</center>

Push the `*` operator to the stack since it falls into the rule #4 (`stack is empty`).

And push the `(` operator to the stack based on the rule #2.

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-3.png" alt="Infix to Postfix step 3-4" /> <br />
</center>

`B` is an operand. Follow the rule #1 and print it.

For the `+` operator, it falls into the rule #4 (`top of the stack is (`), so it goes into the stack.

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-4.png" alt="Infix to Postfix step 5" /> <br />
</center>

`C` is also an operand. Follow the rule #1 and print it.

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-5.png" alt="Infix to Postfix step 6" /> <br />
</center>

Now we encountered the `)`. Follow the rule #3 and pop the stack until it pops `(`.

We've finished scanning the expression. Finish it by popping all operators from the stack (rule #6).

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-6.png" alt="Infix to Postfix step 7"/> <br />
</center>

We have finished converting an infix expression to a postfix expression.

### Infix → Postfix entire code
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

<div class="divider"></div>