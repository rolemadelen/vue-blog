## Review setting up webpack for Vue

I've been using vue with CDN scripts and I'm trying to practice using webpacks like I did couple days age with a tutorial. But I forgot.. \*sad face\* So, here we go.

## Vue.js Webpack setup

```bash
$ npm init
```
- Set project name and entery for everything else
- this will generate `package.json` file

```bash
$ npm i webpack webpack-cli -D
```

- `-D` option means it is used only during the development stage
- this will generate `node-modules` dir


## main.js

I will be using codes from the [Countries Directory](https://github.com/jioneeu/countries-directiory) toy project only because this is the most recent project I did.

So here's my `main.js` 

```js
import Vue from 'vue';
import cdir from './countriesDirectory';

new Vue(cdir).$mount('#root');
```

## webpack.config.js

basic skeleton of webpack configuration file.

```js
const path  = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
  },
  plugins: [
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};
```

At the `output:` instead of `app.js`, we can do `[name].js` and it will automatically replace `[name]` with `app` (the one you named at `entry`)

Here's my full config file. You can generally see where everything goes and how it works... (hopefully).

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path  = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [
      { test: /\.vue$/,
        loader: 'vue-loader'},
      { test: /\.svg$/,
        loader: 'vue-svg-loader' },
      { test: /\.css$/,
        use: ['style-loader', 'css-loader']},
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
```

## Coding 

The way you code is little different when using webpack (or vue-cli env).

We write all of our (seems like?) code in `.vue` file. So for this project, I wrote all my code in `countryDirectory.vue`.

Basic skeleton of the file looks like this..
```vue
<template>
  <div>
    <!-- ignore this space! -->
    <h2>  { { title }} </h2>
  </div>
</template>

<script>
  export default{
    data() {
      return{
        title: 'Countries Directory',
      }
    },
    methods: {
    } 

  };
</script>

<style>
</style>
```

when you want to import stylesheets from the net like google font, use `@import`.
```vue
<style> 
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&display=swap');

body {
  font-family: 'Baloo 2', cursive;
}
</style>
```

