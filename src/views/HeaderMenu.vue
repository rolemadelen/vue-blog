<template>
    <div>
        <router-link :to="page">{{this.name}}</router-link>
    </div>
</template>

<script>
export default {
    props: {
        page: String,
        name: String,
    },
}
</script>