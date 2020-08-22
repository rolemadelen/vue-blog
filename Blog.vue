<template>
    <div>
        <foo />
        {{ greet }}
    </div>
</template>

<script>
import Foo from './components/foo.md'

export default {
    components: { Foo },
    data() {
        return {
            greet: 'hello!',
        }
    }
}
</script>

<style scoped>

</style>