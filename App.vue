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
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

::selection {
    background: rgba(225, 225, 243, 0.2);
    text-shadow: none;
}
</style>