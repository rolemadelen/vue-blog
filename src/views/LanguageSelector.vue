<template>
    <div>
        <img :src="image" :alt="country">
    </div>
</template>

<script>
export default {
    props: {
        country: String,
    },
    data() {
        return {
            image: `/src/assets/${this.country}.png`,
        }
    }
}
</script>