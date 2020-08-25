
One day I was implementing a linked-list stack and this line of code threw a *type mismatched* error.

```c
temp->next = stack->head;
```

Those two pointers `next` and `head` should be of same data type, `Node *`, but apparently it wasn't. <br />
I wanted to know their types and see why its different, but does how do you print its type on C?

There's a generic selection called `_Generic` (C11+ only). 

```c
#define typename(x) _Generic((x),                                                                     \
		_Bool: "_Bool",                              unsigned char: "unsigned char",          \
		char: "char",                                  signed char: "signed char",            \
		short int: "short int",                 unsigned short int: "unsigned short int",     \
		int: "int",                                   unsigned int: "unsigned int",           \
		long int: "long int",                    unsigned long int: "unsigned long int",      \
		long long int: "long long int",     unsigned long long int: "unsigned long long int", \
		float: "float",                                     double: "double",                 \
		long double: "long double",                         char *: "pointer to char",        \
		void *: "pointer to void",                           int *: "pointer to int",         \
		default: "other") 
```

With above macro defined in your code, you can now identify variable types.

```c
int main(void)
{
	int x = 5;
	char y = 6;
	double z = 10;

	printf("type of x: %s\n", typename(x)); // output "int"
	printf("type of y: %s\n", typename(y)); // output "char"
	printf("type of z: %s\n", typename(z)); // output "double"

	return 0;
}
```

Above macro does not include types of mine, so I added `struct Node * : "pointer to Node"` and ran the program.  

The output was `other` and `pointer to Node`. I figured there must be something wrong with my Node structure.

I had the following code:

```c
typedef struct {
	struct Node *next;
	// code
} Node;

typedef struct {
	Node *head;
	// code
} Stack;
```

which should've been:

```c
typedef struct Node{
	struct Node *next;
	// code
} Node;

typedef struct Stack {
	Node *head;
	// code
} Stack;
```

## Reference
  - [StackOverflow : Checking certain type](https://stackoverflow.com/questions/6280055/how-do-i-check-if-a-variable-is-of-a-certain-type-compare-two-types-in-c)
  - [StackOverflow : typedef struct](https://stackoverflow.com/questions/17720223/c-typedef-struct-name-vs-typedef-struct-name/23660072)
