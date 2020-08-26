<template>
  <div class="home">
    <list-posts _section="PS" lang="jap"/>
  </div>
</template>

<script>
import ListPosts from "./components/ListPosts.vue";

export default {
  components: { ListPosts },
};
</script>