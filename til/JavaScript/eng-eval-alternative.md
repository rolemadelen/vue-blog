
## eval() alternative

Apparently `eval()` should never be used because it's [dangerous](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!)

instead of this..
```js
return eval("(" + expr + ")");
```

do the below
```js
return Function('"use strict";return (' + expr + ')')();
```
