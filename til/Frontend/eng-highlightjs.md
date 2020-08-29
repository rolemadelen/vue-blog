## Adding code highlights on Vue

Not necessarily for Vue, but I was trying to add code highlights on my SPA blog made in Vue.

I tried several modules from npm like `vue-highlight`, `prism`, `highlight.js`, and more but couldn't figure it out.

I ended up simply grabbing the cdn link for highlight.js and add it to my `index.html` of the project.

```html
<html lang="en">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/styles/github-gist.min.css" integrity="sha512-od7JLoOTxM8w/HSKGzP9Kexc20K9p/M2zxSWsd7H1e4Ctf+8SQFtCWEZnW5u6ul5ehSECa5QmOk9ju2nQMmlVA==" crossorigin="anonymous" />
    <title>jioneeu</title>
</html>
```

## cdnjs link
[https://cdnjs.com/libraries/highlight.js/10.0.0](https://cdnjs.com/libraries/highlight.js/10.0.0)