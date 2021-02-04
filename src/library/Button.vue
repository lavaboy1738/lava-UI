<template>
    <button v-bind="$attrs" class="lava-button" :class="`theme-${theme}`">
        <slot/>
    </button>
</template>

<script lang="ts">
export default {
    props: {
        theme: {
            type: String,
            default: "button"
        },
    }
}
</script>

<style lang="scss" scoped>
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
    }
</style>