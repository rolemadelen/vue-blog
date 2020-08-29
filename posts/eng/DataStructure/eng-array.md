
### What is Array?

Array is a container or a set which contains same type of variables. For example, in an integer array, only integers are allowed. In a character array, every data is a character.

<div style="text-align: center;">
  <img src="assets/data-structure/array/array1d-1.png" alt="array 1d image">
</div>

We refer to each data in an array as an <i>element</i> and the position each element is in is called the <i>index</i>. 
The index starts from 0 and only positive numbers are used including the zero.

There are two types of an array:
1. **1-Dimensional Array** (see the picture above)
2. **n-Dimensional Array** 
  + 2-D Array: array of an array (think of a 3x3, 4x4, 5x5, etc grids)
  + 3-D Array: think of a rubiks cube
  + 4-D and more is also possible but it's not used that often due to its complexity and how difficult it iis to visualize the structure. So 2-D is used most of the time and occasionally 3D.

### Arrays in Ruby
Ruby's array is also a set which composes of same <i>type</i> variables but the difference is that this 'type' refers to the <i>Object</i>; in an object array, only objects are allowed -- <i>this may not be true but I'm just explaining it this way for the simplicity.</i>

In Ruby, where almost everything is Object, everything can be an element of an array.

For instance, we can have an array with a number, string, true/false, nil, or even an array since its an object in Ruby.

<div style="text-align: center;">
  <img src="assets/data-structure/array/array1d-2.png" alt="ruby obj array 1d image">
</div>

Go ahead and run the code below to check that every element is really an object.
```rb
arr = [1, 3.2, "hello", true, [1,2,3], nil];

arr.each do |elem|
  puts elem.is_a? Object
end
```

<div class="divider"></div>

### Operations on Array

### Create

We can use the literal constructor `[]` to create a new array.

```rb
arr = []                    # => []
arr2 = [1, '2', "three"]    # => [1, '2', "three"]
```

Or we can explicitly call its `:new` method to create an array.
```rb
arr = Array.new()      # => []
arr = Array.new(3)     # => [nil, nil, nil]
arr = Array.new(3, 0)  # => [0, 0, 0]
```

The first parameter refers to the size of a new array, and the second parameter is used to set the initial value of each element.
We need to be careful with using the 2nd parameter. When we use the 2nd parameter to create an array, Ruby populates an array that references the same object.

```rb
# initial value is "hello"
arr = Array.new(3, "hello");     # => ["hello", "hello", "hello"]

arr[0].upcase!;   # do all-caps to the first 'hello'
puts arr          # => ["HELLO", "HELLO", "HELLO"] 
```

Since all elements reference the same object, changing the one element affects the every other elements as well.
So when we want to set the initial value using this method, it is recommended to use immutable objects (symbol, numbers, boolean, etc).

We can pass in blocks when we want to initialize each element with mutable objects.
```rb
arr = Array.new(3) { "hello" }  # => ["hello", "hello", "hello"]

arr[0].upcase!
puts arr            # => ["HELLO", "hello", "hello"]
```

And finally, we can use [`Array()`](https://ruby-doc.org/core-2.7.0/Kernel.html#method-i-Array) method which is provided by the kernel.
```rb
Array([])            # => []
Array(nil)           # => []
Array([1, 2, 3])     # => [1, 2, 3]
Array(1..5)          # => [1, 2, 3, 4, 5]
Array(1...5)         # => [1, 2, 3, 4]
```

### Access

In the beginnig, I said 0 or natural numbers are used for array's index. In Ruby, however, negative indexing is also possible. 
Negative indexes start counting from the end.

```rb
arr = [1, 2, 3, 4, 5]
arr[2]    # => 3
arr[1]    # => 2
arr[0]    # => 1
arr[-1]   # => 5
arr[-2]   # => 4
arr[100]  # => nil
```

Ruby returns `nil` when we try to access outside of the array bounds like `arr[100]` in size 5 array. In order to raise 'out of bounds' error, we can use `:fetch` method.

```rb
arr = [1, 2, 3, 4, 5]
arr.fetch(0)            # => 1
arr.fetch(100)          # => IndexError (index 100 outside of array bounds: -5...5)
arr.fetch(100, 'out!')  # => "out!"
```

### Insert

We can use `:push` and `:<<` to insert an element at the end of an array.

```rb
arr = [1]
arr.push(2)  # => [1, 2]
arr << 3     # => [1, 2, 3]
```

To insert an element at the beginning, we use `:unshift`.
```rb
arr = [3]
arr.unshift(2)  # => [2, 3]
arr.unshift(1)  # => [1, 2, 3]
``` 

Or we can use `:insert` to insert an element anywhere in the array.
```rb
arr = ['one', 'two', 'four', 'five']
arr.insert(2, 'three')   # => ["one", "two", "three", "four", "five"]
```

### Delete

We can use `:pop` and `:shift` method to delete an element at the end and at the beginning, respectively.

```rb
arr = [1, 2, 3, 4, 5]
a.pop    # => 5
arr      # => [1, 2, 3, 4]

a.shift  # => 1
arr      # => [2, 3, 4]
```

To delete an element at a specific position, use `:delete_at`.
```rb
arr = [1, 2, 3, 4, 5]
arr.delete_at(2)    # => 3
arr                 # => [1, 2, 4, 5]
```

To delete all elements with a specific value, use `:delete`.
```rb
arr = [1, 2, 2, 3, 4]
arr.delete(2)  # => 2
arr            # => [1, 3, 4]
```

Lastly, we can use this special method `:uniq` to remove all duplicates in the array.
```rb
arr = [1, 2, 2, 3, 3, 3, 4, 5, 5]
arr.uniq  # => [1, 2, 3, 4, 5]
arr       # => [1, 2, 2, 3, 3, 3, 4, 5, 5]

arr.uniq! # => [1, 2, 3, 4, 5]
arr       # => [1, 2, 3, 4, 5] 
```

### 2-Dimensional Array

Let's briefly take a look at the structure of 2-D Array and how to create one in Ruby.

<div style="text-align: center;">
  <img src="assets/data-structure/array/array2d-1.png" alt="array 2d image">
</div>

Unlike the linear array where we use one index to access its element, we need to use 2 indexes (row, column) to access elements in 2-D arrays.
Remember that the order of the index is `arr[row][col]` not `arr[col][row]` (see the picture above).

### Create

Below code creates a 3x3 2-D array.

```rb
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

arr[0]     # => [1, 2, 3]
arr[1]     # => [4, 5, 6]
arr[2]     # => [7, 8, 9]
arr[0][1]  # => 2
arr[2][2]  # => 9
```

  <img src="assets/data-structure/array/array2d-2.png" alt="array 2d image">

We can also create 2-D array by inserting sub-arrays to the 1-D array.

```rb
arr = Array.new(3)  # => [nil, nil, nil]

arr[0] = [1, 2, 3]  # => [[1,2,3], nil, nil]
arr[1] = [4, 5, 6]  # => [[1,2,3], [4,5,6], nil]
arr[2] = [7, 8, 9]  # => [[1,2,3], [4,5,6], [7,8,9]]
```

Or pass in blocks to create a 2-D array.
```rb
arr = Array.new(3) { [] }  # => [[], [], []]

arr[0] << 1   # => [[1], [], []]
arr[1] << 4   # => [[1], [4], []]
arr[2] << 7   # => [[1], [4], [7]]
```

In Ruby, multi-dimensional array is really just an array with its element being an array. So as we saw earlier from the 1-D array, same access, insert, and delete methods can be applied in 2-D or 3-D or higher dimensional arrays.
