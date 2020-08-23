<template>
  <div id="app">
    <blog-header />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import BlogHeader from "./views/Header";

export default {
  components: { BlogHeader },
};
</script>

<style lang="scss">
::selection {
    background: rgba(225, 225, 243, 0.2);
    text-shadow: none;
}
</style>