<div class="update">
last updated 10.19.20
</div>

### 逆ポーランド記法「Reverse Polish Notation, RPN」

`A*(B+C)`などの数式を**中置記法**（Infix Notation）とよびます。この数式を`ABC+*`みたいに表現するのができます。この記法を**後置記法**（Postfix Notation）または**逆ポーランド記法**とよびます。

中置記法からRPNに変換するアルゴリズムは<router-link to="../DataStructure/jap-stack">スタック</router-link>を使うアルゴリズムとして有名なので、スタックを学ぶ時絶対にぶつかる問題の一つです。

では早速アルゴリズムの動作方式を見てみましょう。

アルゴリズムの一般的な手順は下記の通りです。

1. 被演算子の場合、すぐ出力する。
```rb
if (expr[i]>='A' and expr[i]<='Z') 
    print expr[i]
end
```
2. `(`の場合、スタックにpushする。
```rb
if (expr[i]=='(')
    op << expr[i]
end
```
3. `)`の場合、`(`がでるまでスタックをpopする。
```rb
if (expr[i]==')')
    while op.last != '('
        print op.last 
        op.pop
    end
    op.pop
end
```
4. 演算子の場合、下記の条件がtrueだったらスタックにpushする。 <br>
  i. スタックが空いてる場合、<br>
  ii. スタックのtopが`(`の場合、<br>
  iii. 今の演算子の優先順位がスタックのtopの優先子より湯煎順位が高い場合。<br>

5. ４番の条件がfalseの場合、今の演算子の優先順位がスタックのtopの演算子の優先式より小さいか同じになるまでスタックをpopする。popするのが終わったら今の演算子をpushする。
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

6. 最後に、スタックに残っている演算子を全部出力する。
```rb
op.size.times do
    print op.pop
end
```

例えば`A*(B+C)`式が与えられたとしてみてみましょう。
<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-1.png" alt="Infix to Postfix step 1" /> <br />
</center>

`A`は被演算子なので**ルール#1**によって出力します。

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-2.png" alt="Infix to Postfix step 2-3" /> <br />
</center>

`*`は**ルール#4**（`スタックが空いてる場合`）によって、`(`は**ルール#2**によってスタックにpushします。

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-3.png" alt="Infix to Postfix step 3-4" /> <br />
</center>

`B`は被演算子なので**ルール#1**によって出力します。`+`はルール#4の中で `スタックのtopが ( の場合`に該当するのでスタックにpushします。

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-4.png" alt="Infix to Postfix step 5" /> <br />
</center>

`C`も被演算子なので**ルール#1**によって出力します。

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-5.png" alt="Infix to Postfix step 6" /> <br />
</center>

`)`は**ルール#3**によって`(`がでるまでスタックをpopします。最後にスタックに残っている演算子を全部popして出力します。

<center>
<img src="assets/algorithm/stack/infix2postfix/infix2postfix-6.png" alt="Infix to Postfix step 7"/> <br />
</center>

### 実装・中置記法 → 後置記法
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