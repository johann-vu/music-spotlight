<template>
<div class="snackbar__wrapper">
    <div class="snackbar__body">
        Hey!
    </div>
</div>
</template>

<script>
export default {
    name: "Snackbar"
}
</script>

<style lang="scss" scoped>
.snackbar__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    
    .snackbar__body {
        margin: 30px;
        padding: 10px;
        width: 200px;
        border: solid var(--text-color);
        background-color: var(--bkg-color);
    }
}
</style>