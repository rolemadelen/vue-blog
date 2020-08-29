## Change content on hover
```html
<header>
  <div>
    <span>
      Original Content
    </span>
  </div>
</header>
```
```css
header:hover div.header span {
  display:none;
}

header:hover  div.header:after {
  content: 'Changed to this content!';
}
```

## Reference
- [Change content on hover](https://jsfiddle.net/fLMSd/14/)
