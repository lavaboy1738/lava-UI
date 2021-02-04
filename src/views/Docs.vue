<template>
    <div class="layout">
        <TopNav class="nav"/>
        <div class="content">
            <aside v-if="menuVisible">
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
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
            .nav {
                flex-shrink: 0;
            }
            .content {
                flex-grow: 1;
                padding-top: 60px;
                padding-left: 156px;
                @media (max-width: 500px) {
                padding-left: 0; 
                }
            }
        }
        .content {
        display: flex;
            aside {
                flex-shrink: 0;
            }
            main {
                flex-grow: 1;
                padding: 16px;
                background: white;
            }
    }
    aside{
        background: lightblue;
        width: 9.5rem;
        padding: 1rem;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
        height: 100%;
        h2{
            margin-bottom: 0.25rem;
        }
        ol{
            li{
                padding: 0.25rem 0;
            }
        }

    }
    main {
        overflow: auto;
    }
</style>