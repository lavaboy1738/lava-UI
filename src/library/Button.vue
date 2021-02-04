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