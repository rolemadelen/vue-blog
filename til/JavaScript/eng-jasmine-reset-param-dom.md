
## Testing Framework 'Jasmine'

you can check if `jasmine` is already in place by typing `jasmine -v`.

```sh
npm install -g jasmine
```

```js
// foo.js
const multiply(a, b) {
	return a*b;
}

module.exports = multiply

/*
module.exports = {
	multply,
	any_other_functions
}
*/
```

```js
// foo.spec.js
const multiply = require('./foo')
// const {multiply, any_other_functions} = require('./foo')

describe('multiply', function() {
	it('multiplies two numbers', function() {
		expect(multiply(2, 1)).toEqual(2);
	});
	it('more_tests', function() {
  });
});
```

```sh
$ jasmine foo.spec.js
```

## Reset Parameter

```js
function foo(arr, ...args) {
	console.log(args)
}

foo([1,2], 3) // args == [3]
foo([1,2], 3, 4, 5) // args == [3,4,5]
```

## DOM

Document Object Model (DOM) is a tree-like representation of the contents of the webpage.

- querySelector
  + `document.querySelector(selector)`
  + returns reference to the first match of _selector_
- querySelectorAll
  + `document.querySelector(selectors)`
  + returns a `nodelist` containg references to all of the matches of the _selectors_
  + Node that `nodelist` is in an array form but not an array.
    * use `Array.from()` or `...` (spread operator).
    * `let arr = Array.from(nodelist);`
    * `let arr = { ...nodelist };`

- Create Elements
	```js
	const div = document.createElement('div');
	```

- Append elements
	```js
	parentNode.appendChild(childNode)
	parentNode.insertBefore(newNode, referenceNode)
	```

- Remove Elements
	```js
	parentNode.removeChild(child)
	```

- Alter elements
  + working with classes
	```js
	div.classList.add('new');
	div.classList.remove('new');
	div.classList.toggle('new');
	```

## Reference
- [npm & jasmine installation](https://github.com/TheOdinProject/curriculum/blob/master/web_development_101/installations/installing_node.md)
