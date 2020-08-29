<template>
  <div class="home">
    <list-posts _section="Algorithm" lang="jap"/>
  </div>
</template>

<script>
import ListPosts from "./components/ListPosts.vue";

export default {
  components: { ListPosts },
};
</script>

<style lang="scss">
  .section {
    line-height: 1.3;
  }
</style>