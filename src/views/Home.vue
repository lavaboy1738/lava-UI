<template>
    <div>
        <TopNav/>
        <div class="banner">
            <h1>Lava UI</h1>
            <h2>Vue UI library developed by Lavaboy1738</h2>
            <p class="actions">
                <a href="">Github</a>
                <router-link to="/docs">Get Started</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
    components: {TopNav}
}
</script>

<style lang="scss" scoped>
    .banner{
        padding: 6.25rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: lightgreen;
        .actions{
            padding: 0.5rem 0;
            a{
                margin: 0 0.5rem;
                background: white;
                display: inline-block;
                $height: 1.75rem;
                height: $height;
                line-height: $height;
                border-radius: $height/2;
                padding: 0 0.5rem;
            }
        }
    }
</style>

