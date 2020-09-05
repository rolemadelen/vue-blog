<template>
  <div class="blog">
    <router-view />
    
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
    <br>
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
  max-width: 40em;
  margin: 3rem auto;
}
</style>