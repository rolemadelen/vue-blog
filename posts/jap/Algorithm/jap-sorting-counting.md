
### Counting Sort

### The code

```rb
# 1 <= n <= 10,000,000
# any numbers between 1 to 10,000

n = gets.to_i
count = [0] * 10001;
n.times do
  count[gets.to_i] += 1
end

1.upto(10000) do |i|
  if count[i] > 0
    puts "#{i}\n" * count[i]
  end
end
```

### Time Complexity

### Reference
