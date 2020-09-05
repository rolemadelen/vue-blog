### Scroll Behavior

`router-link`のリンクをクリックする時、ページの最初じゃなく、クリックしたpositionそのままで他のページに移動する。
ページの最初に移動するためにはvueのrouteに`scrollBehavior`を設定するとオッケーになる。

```js
export default new VueRouter({
    base: __dirname,
    routes: [ ... ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
```