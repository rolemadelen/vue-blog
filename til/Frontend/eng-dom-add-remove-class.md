## Adding/Removing a class through DOM

```html
<div>
    <header id="header" class="">...</header>
</div>
```

```js
const header = document.getElementById('header');

document.onscroll = function() { scrollFunction(); }

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       header.classList.add('sticky-header'); 
    } else {
        header.classList.remove('sticky-header');
    }
}
```