## Centering Vertical and Horizontally

To center a tag vertical and horizontally, we can use `transform`.

```css
.center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```