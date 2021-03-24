<template>
    <div class="layout">
        <TopNav class="nav"/>
        <div class="content">
            <aside v-if="menuVisible">
                <h2>Welcome</h2>
                <ol>
                    <li><router-link to="/docs/intro">Introduction</router-link></li>
                    <li><router-link to="/docs/installation">Installation</router-link></li>
                    <li><router-link to="/docs/get-started">Get Started</router-link></li>
                </ol>
                <h2>Components</h2>
                <ol>
                    <li>
                        <router-link to="/docs/switch">Switch</router-link>
                    </li>
                    <li>
                        <router-link to="/docs/button">Button</router-link>
                    </li>
                    <li>
                        <router-link to="/docs/dialogue">Dialogue</router-link>
                    </li>
                    <li>
                        <router-link to="/docs/tabs">Tabs</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import TopNav from '../components/TopNav.vue'
export default {
    components: {TopNav},
    setup(){
        const menuVisible = inject<Ref<boolean>>("menuVisible");
        return {menuVisible}
    }
}
</script>

<style lang="scss" scoped>
    .router-link-active{
        color: #ff8a00;
        font-weight: 600;
    }
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
            .nav {
                flex-shrink: 0;
            }
            .content {
                flex-grow: 1;
                padding-top: 3.75rem;
                padding-left: 12rem;
                @media (max-width: 500px) {
                padding-left: 0; 
                }
            }
        }
        .content {
        display: flex;
            aside {
                flex-shrink: 0;
                z-index: 1;
                @media (max-width: 500px) {
                    background-image: linear-gradient(305deg, rgba(254, 254, 254,0.02) 0%, rgba(254, 254, 254,0.02) 1%,transparent 1%, transparent 50%,rgba(220, 220, 220,0.02) 50%, rgba(220, 220, 220,0.02) 64%,rgba(249, 249, 249,0.02) 64%, rgba(249, 249, 249,0.02) 100%),linear-gradient(38deg, rgba(70, 70, 70,0.02) 0%, rgba(70, 70, 70,0.02) 35%,transparent 35%, transparent 62%,rgba(152, 152, 152,0.02) 62%, rgba(152, 152, 152,0.02) 74%,rgba(99, 99, 99,0.02) 74%, rgba(99, 99, 99,0.02) 100%),linear-gradient(337deg, rgba(124, 124, 124,0.02) 0%, rgba(124, 124, 124,0.02) 45%,transparent 45%, transparent 55%,rgba(34, 34, 34,0.02) 55%, rgba(34, 34, 34,0.02) 72%,rgba(189, 189, 189,0.02) 72%, rgba(189, 189, 189,0.02) 100%),linear-gradient(92deg, rgba(239, 239, 239,0.02) 0%, rgba(239, 239, 239,0.02) 12%,transparent 12%, transparent 22%,rgba(204, 204, 204,0.02) 22%, rgba(204, 204, 204,0.02) 51%,rgba(70, 70, 70,0.02) 51%, rgba(70, 70, 70,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
                }
            }
            main {
                flex-grow: 1;
                padding: 1rem;
            }
    }
    aside{
        width: 12rem;
        padding: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 4.5rem;
        height: 100%;
        h2{
            margin-top: 1rem;
            margin-bottom: 0.25rem;
            font-weight: 500;
        }
        ol{
            li{
                padding: 0.25rem 0;
            }
        }

    }
    main {
        overflow: auto;
        margin: 0.8rem;
    }
</style>