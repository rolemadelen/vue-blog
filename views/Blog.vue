<template>
  <div class="blog">
    <router-view />
  </div>
</template>

<script>

</script>

<style lang="scss">
.blog {
  @import "../styles/_content.scss";
  line-height: 1.5;
  max-width: 50em;
  margin: 3rem auto;
  font-family: "Noto Sans Javanese", "serif";
  font-size: 15px;

  a:hover {
    color: #1c4c8a;
    text-decoration: underline;
  }
}

html.darkmode {
  table {
    color: #171717;
  }
  .blog h2 {
    border-bottom: 1px solid #3e3e3e;
  }
  .blog a {
    color: #2db4ff;
  }

  .blog code {
    border: 1px solid #ffa6d2;
    background-color: #282c35;
    color: #ffa6d2;
  }
  .blog pre {
    border: 1px solid #595959;
    background-color: rgba(27, 27, 27, 1);
  }
  .blog pre code {
    border: none;
    background-color: transparent;
    color: #eee;
  }

  .hljs-string {
    color: #4a951e;
  }

  .hljs-comment {
    color: #848484;
  }

  .hljs-attr,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-selector-pseudo,
  .hljs-title {
    color: #c4adec;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-type {
    color: #f87171;
  }

  .hljs-number {
    color: #1281ff;
  }

  .hljs-attribute,
  .hljs-bullet,
  .hljs-literal,
  .hljs-symbol {
    color: #4cd2ff;
  }
}
</style>