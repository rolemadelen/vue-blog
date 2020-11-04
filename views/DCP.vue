<template>
  <div class="home">
    <list-posts _section="DCP" lang="eng"/>
  </div>
</template>

<script>
import ListPosts from "./components/ListPosts.vue";

export default {
  components: { ListPosts },
};
</script>