<template>
    <div>
        <img :src="image" :alt="lang">
    </div>
</template>

<script>
export default {
    props: {
        lang: String,
    },
    data() {
        return {
            image: `/src/assets/${this.lang}.png`,
    }
  }
}
</script>