<template functional>
   <div class="functional">{{ props.message }}</div>
</template>

<script>
export default {
 props: {
    message: {
        type: String,
        default: ''
    } 
 }
}
</script>

<style>

</style>