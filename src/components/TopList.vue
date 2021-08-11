<template>
    <TopItem v-for="item in listItems" :key="item.id" :item="item" />
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