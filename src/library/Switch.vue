<template>
    <button :class="{checked: checked}" @click="toggle" > <span></span> </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    setup(){
        const checked = ref(false);
        const toggle = () => {
            checked.value = !checked.value
        }
        return {checked, toggle}
    }
}
</script>

<style lang="scss" scoped>
    $height: 1.5rem;
    $height2: 1.3rem;
    button{
        height: $height;
        width: $height * 2;
        outline: none;
        border: none;
        background: grey;
        border-radius: $height/2;
        position: relative;
        cursor: pointer;
        span{
            position: absolute;
            top: 0.1rem;
            left: 0.1rem;
            height: $height2;
            width: $height2;
            background: white;
            border-radius: $height2 / 2;
            transition: 0.3s all ease;
        }
        &.checked{
            background: blue;
            span{
                transition: 0.3s all ease;
                left: calc(100% - #{$height2} - 0.1rem);
            }
        }
    }
</style>