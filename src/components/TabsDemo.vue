<template>
    <h1>Tabs Component</h1>
    <ComponentDemo title="Multi-Tabs" v-bind:sourceCode="tabsCode">
        <Tabs v-model:selected="defaultTab">
            <Tab title="Tab1">My name is Jeff</Tab>
            <Tab title="Tab2">Jeff</Tab>
            <Tab title="Tab3">Hello Jeff</Tab>
        </Tabs>
    </ComponentDemo>
</template>

<script lang="ts">
import Tabs from "../library/Tabs.vue";
import Tab from "../library/Tab.vue";
import { ref } from 'vue';
import ComponentDemo from "./ComponentDemo.vue";
export default {
    components: {Tabs, Tab, ComponentDemo},
    setup(){
        const defaultTab = ref("Tab1");
        const tabsCode = `<template>\r\n    <Tabs v-model:selected=\"defaultTab\">\r\n        <Tab title=\"Tab1\">My name is Jeff<\/Tab>\r\n        <Tab title=\"Tab2\">Jeff<\/Tab>\r\n        <Tab title=\"Tab3\">Hello Jeff<\/Tab>\r\n    <\/Tabs>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Tabs from \"..\/library\/Tabs.vue\";\r\nimport Tab from \"..\/library\/Tab.vue\";\r\nimport { ref } from 'vue';\r\nexport default {\r\n    components: {Tabs, Tab},\r\n    setup(){\r\n        const defaultTab = ref(\"Tab1\");\r\n        return{\r\n            defaultTab,\r\n        }\r\n    }\r\n}\r\n<\/script>`;
        return{
            defaultTab,
            tabsCode,
        }
    }
}
</script>