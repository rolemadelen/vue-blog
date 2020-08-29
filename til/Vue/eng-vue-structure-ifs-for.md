
## Basic Structure
Remove the slash(`\`) between `{` in actual code. 

```html
<div id="app">
  {\{ message }}
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
```

We can access the data through DOM because everything is now **reactive**.

In JS console, we can access the data with `app` and change its value.
```js
app.message = "Hello world!"
```

## Conditionals
`v-if` is used to set conditions.

```html
<div id="app-3">
  <span v-if="seen">Now you see me.</span>
</div>
```

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

Now set `app3.seen = false` and you won't see the message.

##  Loops
`v-for` directives are used to display list of items.

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome!!' }
    ]
  }
})
```

We can add or remove items in the list from the console.
```js
// add
app4.todos.push({text: SOME-TEXT})

// remove
app4.todos.pop()
```

## Reference
- [Vue.js](https://vuejs.org/v2/guide/index.html)
