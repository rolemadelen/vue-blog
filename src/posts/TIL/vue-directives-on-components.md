## How to add v-directives on the component?

`my-component` is a temporary component I made and let say we want to alert everytime we click on a button.

```js
<my-component type="button" @click="onClickAlert"> Alert </my-component>
```

The above wont work because `@click="onClickAlert"` does not link with our components.

We need to use `@click.native`.

```js
<my-component type="button" @click.native="onClickFunc"> Alert </my-component>
```