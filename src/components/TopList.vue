<template>
    <ul>
        <li v-for="item in listItems" :key="item.id">{{item.title}}</li>
    </ul>
</template>

<script>
export default {
    name:"TopList",
    props: {
        listItems: {
            type:Array,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>