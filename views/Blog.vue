<template>
  <div class="blog">
    <router-view />
    
    <br>
    
    <disqus shortname="jioneeu" />
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus';

export default {
  components: { Disqus },
}
</script>

<style lang="scss">
.blog {
  @import "../styles/_content.scss";
  line-height: 1.5;
  max-width: 50em;
  margin: 3rem auto;
  font-family: 'Noto Serif JP', serif;
}
</style>