<template>
<h1>Switch Component Demo</h1>
<div class="demo">
    <h2 class="demo-title">Common Use Case</h2>
    <div class="demo-component">
        <SwitchDemo1/>
    </div>
    <div class="demo-actions">
        <Button>Source Code</Button>
    </div>
    <div class="demo-code">
        <pre>&lt;lava-switch v-model:value="bool" /&gt;</pre>
    </div>
</div>
<div class="demo">
    <h2 class="demo-title">Disabled</h2>
    <div class="demo-component">
        <SwitchDemo2/>
    </div>
    <div class="demo-actions">
        <Button>Source Code</Button>
    </div>
    <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(textCode, Prism.languages.html, 'html')"></pre>
    </div>
</div>
</template>

<script lang="ts">
import Switch from "../library/Switch.vue";
import SwitchDemo1 from "./SwitchDemo1.vue";
import SwitchDemo2 from "./SwitchDemo2.vue";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Button from "../library/Button.vue";

const Prism = (window as any).Prism;
const textCode = "<lava-switch disabled />";

export default {
    components: {Switch, Button, SwitchDemo1, SwitchDemo2},
    setup(){
        return{Prism, textCode}
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