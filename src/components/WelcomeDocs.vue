<template>
    <article class="markdown-body">
        <h1>Welcome to Lava UI</h1>
        <p>Hello, I'm Ronnie Feng, an interactive developer based in Toronto.</p>
        <p>If you haven't checked out my award-winning portfolio, <a href="https://ronniefeng.com" target="_blank">click here</a> to see it or go to ronniefeng.com. </p>
        <p>
        I strive to craft memorable experiences on the digital canvas. 
        <br>
        If you have some ideas, please send me an email. You can reach me at ronnie@ronniefeng.com
        </p>
        <Button @click="$router.push('docs/intro')">Next: Introduction</Button>
    </article>
</template>

<script lang="ts">
import Button from "../library/Button.vue";
export default {
    components:{Button}
}
</script>