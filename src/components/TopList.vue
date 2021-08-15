<template>
    <TopItem v-for="i in 20" :key="i" :item="listItems[i]" />
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