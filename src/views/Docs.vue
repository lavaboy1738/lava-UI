<template>
    <div>
        <TopNav/>
        <div class="content">
            <aside>
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
import TopNav from '../components/TopNav.vue'
export default {
    components: {TopNav}
}
</script>