<template>
    <h1>Tabs Demo</h1>
    <Tabs>
        <Tab title="Tab1">Tab 1 Content</Tab>
        <Tab title="Tab2">Tab 2 Content</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from "../library/Tabs.vue";
import Tab from "../library/Tab.vue";
export default {
    components: {Tabs, Tab}
}
</script>