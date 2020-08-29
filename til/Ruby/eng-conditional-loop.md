
## Conditional Statements

## if statement

```rb
grade = gets.to_i

if grade >= 70
    puts "Good Job! You passed!"
end
```

## if-else statement
```rb
grade = gets.to_i

if grade >= 70
    puts "Good Job! You passed!"
else
    puts "You failed.."
end
```

## if-elsif-else statement
```rb
grade = gets.to_i
if grade >= 90
    puts 'A'
elsif grade>=80
    puts 'B'
elsif grade>=70
    puts 'C'
elsif grade>=60
    puts 'D'
else
    puts 'F'
end
```

## Ternary (?::)
```rb
year = gets.to_i
puts ((year%4==0) && (year%100!=0)) || (year%400==0) ? 1 : 0
```

above code is equivalent to
```rb
year = gets.to_i

if (year%4==0) && (year%100!=0)
	puts 1
elsif year%400 == 0
	puts 1
else
	puts 0
end
```

# Loops

## for-loop
### range
```rb
for i in 0...10
puts i
```

the output would be
```
0
1
2
3
...
8
9
```

`...` means **exclusive** so `0...10` becomes `0~9`.
On the otherhand, `..` is **inclusive**. so `0..10` becomes `0~10`.

### increment
we can also use `upto` 

```rb
for i in 0.upto(9)
    puts i
end
```

This code will output values from `0 to 9

we can also do it this way
```rb
0.upto(9) do |i|
    puts i
end
```

### decrement
we can't simply do the below and expect it to print 10, 9, ..., 1, 0.

```rb
for i in 10..0
    puts i
end
```

Their are many ways to do it
- `downto`
  ```rb
  for i in 10.downto(0)
    puts i
  end
  ```
  This will give us `10, 9, ..., 1, 0`

- `downto` pt. 2
  ```rb
  10.downto(0) do |i|
    puts i
  end
  ```

- `until`
  ```rb
  i = 10
  until i==0
    puts i
    i -= 1
  end
  ```

### iterating an array
```rb
arr = [5, 2, 3, 1]

for x in arr
    puts x
end
```

the output would be
```
5
2
3
1
```

## while-loop
Below code will print 0 ~ 9

```rb
num = 0
while num < 10
    puts num
    num += 1
end
```

## break
We break out of the loop. 

```rb
while true
    num = gets.to_i
    if nums == -1
        break
    end
    puts num
end
```
This code reads in a number and prints it to the screen. But if the number is `-1`, it will break out of the loop.

### break-if

We can right the above code slightly shorter but works exactly same.
```rb
while true
    num = gets.to_i
    break if nums == -1
    puts num
end
```
