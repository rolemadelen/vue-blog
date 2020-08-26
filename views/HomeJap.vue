<template>
  <div class="home">
    <list-posts _section="" lang="jap"/>
  </div>
</template>

<script>
import ListPosts from "./components/ListPosts.vue";

export default {
  components: { ListPosts },
};
</script>