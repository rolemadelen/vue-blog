## Directive Shortcuts
### preventDefault shortcuts
before we wrote

```html
  <form v-on:submit="onSubmitForm">
  ...
  </form>

  <!-- code -->

  onSubmitForm(e) {
    e.preventDefault();
  }
```

But we can shorten it to ..

```html
  <form @submit.prevent="onSubmitForm">
    ...
  </form>
```

### v-on and v-bind
`v-on` can be shorten to `@`
```html
  <!-- <button v-on:click="onReset">Reset</button> -->
  <button @click="onReset">Reset</button>
```

`v-bind:` can be shorten to `:`
```js
  <!--<div id="screen" v-bind:class="state"></div>-->
  <div id="screen" :class="state"></div>
```

## Style Loaders
### style
In order to use style tags in vue.js, we need extra loaders.
```sh
$ npm i vue-style-loader -D
$ npm i css-loader -D
```

## Webpack --watch
Sometimes you forget to `npm run build` and wonder why your code is not working.

So you can change your webpack config so that it automatically re-build your code.

change the script parts of your `package.json` to
```json
  "scripts": {
    "build": "webpack --watch"
  }
```