<template>
<h1>Switch Component Demo</h1>
<div class="demo">
    <h2 class="demo-title">Common Use Case</h2>
    <div class="demo-component">
        <Switch v-model:value="inputValue" />
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
        <Switch v-model:value="inputValue2" disabled />
    </div>
    <div class="demo-actions">
        <Button>Source Code</Button>
    </div>
    <div class="demo-code">
        <pre>&lt;lava-switch disabled /&gt;</pre>
    </div>
</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from "../library/Switch.vue";
import Button from "../library/Button.vue";
export default {
    components: {Switch, Button},
    setup(){
        const inputValue = ref(false);
        const inputValue2 = ref(false);
        return{inputValue, inputValue2};
    }
}
</script>

<style lang="scss" scopded>
    h1{
        margin-bottom: 1rem;
    }
    .demo{
        border: 1px solid rgba(0, 0, 0, 0.3);
        &-title, &-actions, &-code, &-component{
            padding: 1rem;
        }
        &-title{
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        }
    }
</style>