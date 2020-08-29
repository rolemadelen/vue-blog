
## webpack basics
Studied running vue.js using webpack but still need to review and practice.
The basic structure of `webpack.config.js` was something like this

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
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

## how to prevent a form from refreshing the page

```js
function onSubmitForm(e)
{
  e.preventDefault();
}
```
