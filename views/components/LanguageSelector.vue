<template>
  <div>
    <img :src="image" :alt="lang" />
  </div>
</template>

<script>
export default {
  props: {
    lang: String,
  },
  computed: {
    image: function() {
        return `./assets/${this.lang}.png`;
    }
  },
};
</script>