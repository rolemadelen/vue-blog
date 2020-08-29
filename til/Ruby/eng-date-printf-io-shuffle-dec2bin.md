### Getting the date
```rb
today = Time.now
#  => 2020-05-12 21:00:47.298824488 +0900

today.year  # 2020
today.month # 5
today.day   # 12
```

### printf
```rb
today = Time.now
today = "%02d%02d" % [today.month, today.day]
# => "0512"
```

### File IO
reading line by line
```rb
IO.readlines(<PATH>)
```

appending to a file
```rb
open(<PATH>, 'a') do |f|
  f.puts <TEXTS>
end
```

### Shuffle array elements
```rb
array = [1,2,3,4,5]
array.shuffle
# => [3, 1, 5, 2, 4] 

array.shuffle
# => [5, 4, 1, 2, 3] 
```

### decimal to ascii character and vice versa
```rb
a = 97
a.chr # 'a'

a = 'a'
a.ord # 97
```