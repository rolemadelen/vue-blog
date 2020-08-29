## pry
install with `gem install pry`

```rb
require 'pry'
def multiply(a, b)
	a + b
	binding.pry   # like marking a breakpoint here
end
```

```sh
$ ruby multiply.rb
From: ..../multiply.rb:5 Object#multiply:

    3: def multiply(a, b)
    4:   a+b
 => 5:   binding.pry
    6: end

[1] pry(main)> 
```

And you can use it like IRB printing values, re-running the method with different value and so on..

## regex
```rb
a = "!abc"

if a =~ /\w/
	puts "[a-zA-Z0-9_] exists"
end
```

## Reference
- [Debugging with Pry](https://learn.co/lessons/debugging-with-pry)
- [Regex](https://www.rubyguides.com/2015/06/ruby-regex/)
