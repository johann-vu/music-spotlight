<template>
    <h1>Callback</h1>
    <p>{{success}}</p>
</template>
<script>
import { EvaluateCallback } from '../scripts/login'
export default {
    name:"Callback",
    data() {
        return {
            success: false
        }
    },
    mounted() {
        var result = EvaluateCallback()
        console.log("Callback success: " + result);
        this.success = result;
    }
}
</script>