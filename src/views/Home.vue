<template>
    <div class="homepage-top">
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
        h1{
            font-weight: 800;
            font-size: 3rem;
        }
        .actions{
            padding: 0.5rem 0;
            a{
                position: relative;
                font-weight: 600;
                color: white;
                margin: 0 0.5rem;
                background-color: #ff8a00;
                display: inline-block;
                border-radius: 20rem;
                padding: 0.5rem 1rem;
                z-index: 1;
                transition: 0.1s all ease 0.15s;
                overflow: hidden;
                top: 0;
                box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
                &::before{
                    position: absolute;
                    left: -120%;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    content: "";
                    background-color: white;
                    transition: all 0.3s ease-in-out;
                    z-index: -1;
                }
                &:hover{
                    color: #ff8a00;
                    transition: 0.1s all ease 0.15s;
                    top: -0.25rem;
                    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
                    &::before{
                        left: 0%;
                        transition: all 0.3s ease-in-out;
                    }
                }
            }
        }
    }
</style>

