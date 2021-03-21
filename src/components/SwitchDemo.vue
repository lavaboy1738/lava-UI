<template>
<h1>Switch Component Demo</h1>
<div class="demo">
    <h2 class="demo-title">Common Use Case</h2>
    <div class="demo-component">
        <Switch v-model:value="bool" />
    </div>
    <div class="demo-actions">
        <Button @click="codeVisible1 = !codeVisible1">Source Code</Button>
    </div>
    <div class="demo-code" v-if="codeVisible1">
        <pre class="language-html" v-html="Prism.highlight(textCode1, Prism.languages.html, 'html')"></pre>
    </div>
</div>
<div class="demo">
    <h2 class="demo-title">Disabled</h2>
    <div class="demo-component">
        <Switch disabled/>
    </div>
    <div class="demo-actions">
        <Button @click="codeVisible2 = !codeVisible2" >Source Code</Button>
    </div>
    <div class="demo-code" v-if="codeVisible2">
        <pre class="language-html" v-html="Prism.highlight(textCode2, Prism.languages.html, 'html')"></pre>
    </div>
</div>
</template>

<script lang="ts">
import Switch from "../library/Switch.vue";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Button from "../library/Button.vue";
import { ref } from 'vue';

const Prism = (window as any).Prism;
const textCode1 = `<template>\r\n    <Switch v-model:value=\"bool\" \/>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport { ref } from 'vue';\r\nimport Switch from \"..\/library\/Switch.vue\";\r\nexport default {\r\n    components: {Switch},\r\n    setup(){\r\n        const bool = ref(false);\r\n        return{bool};\r\n    }\r\n}\r\n<\/script>`;
const textCode2 = `<template>\r\n    <Switch v-model:value=\"bool\" disabled \/>\r\n<\/template>\r\n\r\n<script lang=\"ts\">\r\nimport { ref } from 'vue';\r\nimport Switch from \"..\/library\/Switch.vue\";\r\nexport default {\r\n    components: {Switch},\r\n    setup(){\r\n        const bool = ref(false);\r\n        return{bool};\r\n    }\r\n}\r\n<\/script>`;

export default {
    components: {Switch, Button},
    setup(){
        const bool = ref(false);
        const codeVisible1 = ref(false);
        const codeVisible2 = ref(false);
        return{Prism, textCode1 ,textCode2, bool, codeVisible1, codeVisible2}
    }
}
</script>

<style lang="scss" scopded>
    .demo{
        border: 1px solid rgba(0, 0, 0, 0.3);
        margin: 2rem 0;
        &-title, &-actions, &-code, &-component{
            padding: 1rem;
        }
        &-title{
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        }
    }
</style>