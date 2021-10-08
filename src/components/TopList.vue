<template>
    <TopItem v-for="_, i in 15" :key="i" :item="listItems[i]" />
</template>

<script>
import TopItem from './TopItem.vue'
export default {
    name:"TopList",
    components: {
        TopItem
    },
    props: {
        listItems: {
            type:Array,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>