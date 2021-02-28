<template>
    <h1>Tabs Demo</h1>
    <Tabs v-model:selected="defaultTab">
        <Tab title="Tab1">Tab 1 Content</Tab>
        <Tab title="Tab2">Tab 2 Content</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from "../library/Tabs.vue";
import Tab from "../library/Tab.vue";
import { ref } from 'vue';
export default {
    components: {Tabs, Tab},
    setup(){
        const defaultTab = ref("Tab1");
        return{
            defaultTab
        }
    }
}
</script>