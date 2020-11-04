<template>
  <div class="blog">
    <router-view />

    <br />

    <disqus shortname="jioneeu" />
  </div>
</template>

<script>
import { Disqus } from "vue-disqus";

export default {
  components: { Disqus },
};
</script>

<style lang="scss">
.blog {
  @import "../styles/_content.scss";
  line-height: 1.5;
  max-width: 50em;
  margin: 3rem auto;
  font-family: "Noto Sans Javanese", serif;
  font-size: 15px;
}

html.darkmode {
  .blog code {
    border: 1px solid #828282;
    background-color: #444444;
    color: #c3c3c3;
  }
  .blog pre {
    border: 1px solid #595959;
  }
  .blog pre code {
    border: none;
    background-color: #121212;
    color: #c6c6c6;
  }

  .hljs-string {
    color: #166e20;
  }

  .hljs-comment {
    color: #5d5d5d;
  }
}
</style>