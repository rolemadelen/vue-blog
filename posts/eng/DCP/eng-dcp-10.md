## Daily Coding Problem 10
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

## Solution
```c
#include <stdio.h>
#include <unistd.h>

void hello_func(void)
{
  printf("Hello, World!\n");
}

void scheduler_func(void (*f)(void), int ms)
{
  sleep(ms/1000);
  (*f)();
}

int main(void)
{
  int n = 3000;
  scheduler_func(hello_func, n);
  return 0;
}
```

```rb
def hello_func
  puts "hello"
end

def scheduler(f, n)
  sleep(n/1000)
  f.call
end

# call after 4 seconds
n = 4000
scheduler(method(:hello_func),  n)
```