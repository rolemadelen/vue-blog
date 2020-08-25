<template>
    <div>
        <router-link :to="pageLink">{{this.name}}</router-link>
    </div>
</template>

<script>
export default {
    props: {
        page: String,
        name: String
    },
    
    data() {
        return {
            pageLink: '/eng/' + this.page,
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>