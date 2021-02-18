<template>
    <div class="dialogue-overlay"></div>
    <div class="dialogue-wrapper">
        <header>Title</header>
        <main>
            <p>Biscuits and gravy</p>
            <p>Strawberry Shortcake</p>
        </main>
        <footer>
            <Button>Confirm</Button>
            <Button>Cancel</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
    components: {Button}
}
</script>