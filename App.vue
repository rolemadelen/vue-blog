<template>
  <div id="app">
    <blog-header />
    <div>
      <router-view />
    </div>
    <blog-footer />
  </div>
</template>

<script>
import BlogHeader from "./views/Header";
import BlogFooter from "./views/Footer";

export default {
  components: { BlogHeader, BlogFooter },
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

::selection {
    background: rgba(225, 225, 243, 0.2);
    text-shadow: none;
}
</style>