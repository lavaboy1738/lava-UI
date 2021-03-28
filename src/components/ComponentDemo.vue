<template>
    <div class="demo">
        <h2 class="demo-title">{{title}}</h2>
        <div class="demo-component">
            <slot/>
        </div>
        <div class="demo-actions">
            <Button @click="hideCode" v-if="codeVisible">Hide Code</Button>
            <Button @click="showCode" v-else >Show Code</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre class="language-html" v-html="Prism.highlight(sourceCode, Prism.languages.html, 'html')"></pre>
        </div>
    </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Button from "../library/Button.vue";
import { ref } from 'vue';
const Prism = (window as any).Prism;
export default {
    props:{
        sourceCode :{
            type: String,
            default: ""
        },
        title:{
            type: String,
            default: ""
        }
    },
    components: {
        Button
    },
    setup(props){
        const {sourceCode, title} = props;
        const codeVisible = ref(false);
        const showCode = () => codeVisible.value = true;
        const hideCode = () => codeVisible.value = false;
        return{
            Prism,
            codeVisible,
            sourceCode,
            showCode,
            hideCode,
            title
        }
    }
}
</script>

<style lang="scss" scoped>
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