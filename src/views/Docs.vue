<template>
    <div>
        <TopNav/>
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
            <main>main content</main>
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
    aside{
        background: lightblue;
        width: 9.5rem;
        padding: 1rem;
        h2{
            margin-bottom: 0.25rem;
        }
        ol{
            li{
                padding: 0.25rem 0;
            }
        }
        @media (max-width: 500px) {
            padding-top: 4rem;
            position: fixed;
            top: 0;
            left: 0;
        }
    }
</style>