<template>
    <button v-bind="$attrs" class="lava-button" :class="classes" :disabled="disabled">
        <slot/>
    </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
    props: {
        theme: {
            type: String,
            default: "normal"
        },
        size: {
            type: String,
            default: "normal"
        },
        priority: {
            type: String,
            default: "normal"
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props){
        const {theme, size, priority} = props;
        const classes = computed(()=>{
            return {
                [`lava-theme-${theme}`] : theme,
                [`lava-size-${size}`] : theme,
                [`lava-priority-${priority}`] : theme,
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
    $red: red;
    $grey: grey;
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
        &.lava-size-large{
            font-size: 0.75* $height;
            height: 1.5 * $height;
            padding: 0 0.6*$height;
        }
        &.lava-size-small{
            font-size: 0.375 * $height;
            height: 0.625 * $height;
            padding: 0 0.25*$height;
        }
        &.lava-priority-primary {
            background: $blue;
            color: white;
            border-color: $blue;
            &:hover,
            &:focus {
                background: darken($blue, 10%);
                border-color: darken($blue, 10%);
            }
        }
        &.lava-priority-danger {
            background: $red;
            border-color: $red;
            color: white;
            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
            &:hover {
                border-color: $grey;
            }
        }
    }

</style>