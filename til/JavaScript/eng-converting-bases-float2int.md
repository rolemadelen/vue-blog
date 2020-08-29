
## Converting a base

I can use `Number#toString` to convert numbers to different bases
```js
let val = 255;
val.toString(16)   // FF
val.toString(8)    // 377
val.toString(2)    // 11111111
```

## to Binary

For the binary though, seems like using `Number#toString(2)` is not good because it fails to handle negative numbers.
This is using `>>>` (unsigned right shift) to coerce the number to an unsigned integer.
```js
function toBinary(dec) {
	return (dec >>> 0).toString(2);
}
```

## Cast float to int?

Also when I convert the numbers to different bases to display it in the calculator, I ignored the decimal parts.
For example `12.75` becomes `12` and this number will be converted to hex, oct, and binary. 
I was looking for something like `int(val)` but seems like there isn't one?
```js
let val = 12.75;
Math.floor(val);  // 12
```

## Reference
- [Converting to different bases](https://stackoverflow.com/questions/30954085/conversion-from-decimal-to-octal-binary-and-hexadecimal-in-javascript)
- [Correct way to convert to binary](https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript)
- [JS float to int](https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript)
