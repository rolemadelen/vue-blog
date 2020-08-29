
## Padding Zeroes

I was working on the time tracker and wanted to pad a zero like `01`, `02`, ..., `09` for hours, minutes, and seconds.

At first I did it manually using ifs.

```js
let hour = 5;

if(hour < 10) {
  hour = `0${hour}`;
}
```

But I found the eaiser and simple way to pad zeroes.

```js
this.hour = ('00'+hour).slice(-2);
this.min = ('00'+min).slice(-2);
this.sec = ('00'+sec).slice(-2);
```
