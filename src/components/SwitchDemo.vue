<template>
    <h1>Switch Component</h1>
    <ComponentDemo v-bind:sourceCode="sourceCode1" title="Common Use Case" >
        <Switch v-model:value="bool" />
    </ComponentDemo>
    <ComponentDemo v-bind:sourceCode="sourceCode2" title="Disabled Switch" >
        <Switch disabled/>
    </ComponentDemo>
</template>

<script lang="ts">
import Switch from "../library/Switch.vue";
import ComponentDemo from "./ComponentDemo.vue";
import {ref} from "vue";

const Prism = (window as any).Prism;
const sourceCode1 = `<template>\r\n    <Switch v-model:value=\"bool\" \/>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport { ref } from 'vue';\r\nimport Switch from \"..\/library\/Switch.vue\";\r\nexport default {\r\n    components: {Switch},\r\n    setup(){\r\n        const bool = ref(false);\r\n        return{bool};\r\n    }\r\n}\r\n<\/script>`;
const sourceCode2 = `<template>\r\n    <Switch v-model:value=\"bool\" disabled \/>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport Switch from \"..\/library\/Switch.vue\";\r\nexport default {\r\n    components: {Switch},\r\n}\r\n<\/script>`

export default {
    components: {Switch, ComponentDemo},
    setup(){
        const bool = ref(false);
        return{Prism, sourceCode1 ,sourceCode2, bool}
    }
}
</script>