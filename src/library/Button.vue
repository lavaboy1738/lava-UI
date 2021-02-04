<template>
    <button v-bind="$attrs" class="lava-button" :class="classes">
        <slot/>
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
    props: {
        theme: {
            type: String,
            default: "button"
        },
        size: {
            type: String,
            default: "normal"
        }
    },
    setup(props){
        const {theme, size} = props;
        const classes = computed(()=>{
            return {
                [`lava-theme-${theme}`] : theme,
                [`lava-size-${size}`] : theme,
            }
        })
        return {classes}
    }
}
</script>

<style lang="scss">
    $height: 2rem;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 0.25rem;
    .lava-button {
    box-sizing: border-box;
    height: $height;
    padding: 0 0.75rem;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
        & + & {
            margin-left: 0.5rem;
        }
        &:hover,
        &:focus {
            color: $blue;
            border-color: $blue;
        }
        &:focus {
            outline: none;
        }
        &::-moz-focus-inner {
            border: 0;
        }
        &.lava-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover,&:focus{
            color: lighten($blue, 10%);
            }
        }
        &.lava-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus{
            background: darken(white, 5%);;
            }
        }
        &.lava-theme-button{
            &.lava-size-large{
                font-size: 0.75* $height;
                height: 1.5 * $height;
                padding: 0 $height;
            }
            &.lava-size-small{
                font-size: 0.375 * $height;
                height: 0.625 * $height;
                padding: 0 0.125*$height;
            }
        }
    }

</style>